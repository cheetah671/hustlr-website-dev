import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import formidable from "formidable";
import { supabaseAdmin } from "@/src/lib/supabase-admin";
import { extractEmailFromAuthHeader } from "@/src/lib/vettingUtils";

// Disable default body parsing (important for file uploads)
export const config = {
  api: {
    bodyParser: false,
  },
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const parseForm = (req: NextApiRequest): Promise<{ fields: any; files: any }> =>
  new Promise((resolve, reject) => {
    const form = formidable({ multiples: false, maxFileSize: MAX_FILE_SIZE });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const field = req.query.field as string;

  if (!field || typeof field !== "string") {
    return res.status(400).json({ error: "Missing or invalid ?field param" });
  }

  // Verify JWT from Authorization header
  const jwtEmail = extractEmailFromAuthHeader(req);
  if (!jwtEmail) {
    return res.status(401).json({ error: "Invalid or missing token" });
  }

  try {
    const { fields, files } = await parseForm(req);

    const file = files.file?.[0];
    const email = fields.email?.[0];
    if (!file || !email) {
      return res.status(400).json({ error: "Missing file or email" });
    }

    // Ensure the email in FormData matches the JWT
    if (jwtEmail !== email) {
      return res.status(403).json({ error: "Email mismatch: not authorized to upload for this user" });
    }

    const safeEmail = email.replace(/[^\w@.-]/g, "_");
    const ext = path.extname(file.originalFilename || "").toLowerCase();
    const allowedExts = [".jpg", ".jpeg", ".png", ".webp", ".pdf"];

    if (!allowedExts.includes(ext)) {
      return res.status(400).json({ error: "Unsupported file type" });
    }

    const buffer = fs.readFileSync(file.filepath);
    const pathInBucket = `applications/${safeEmail}/${field}${ext}`;

    const { error: uploadError } = await supabaseAdmin.storage
      .from("vetting-files-storage")
      .upload(pathInBucket, buffer, {
        contentType: file.mimetype || "application/octet-stream",
        upsert: true,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      return res.status(500).json({ error: "Storage upload failed" });
    }

    const column = `${field}`;
    console.log(column);
    const supaRes = await supabaseAdmin
      .from("vettingapplications")
      .update({ [column]: pathInBucket })
      .eq("email", email);
    const { data, error: dbError } = supaRes;
    console.log("DB response:", supaRes, { data, dbError });

    if (dbError) {
      return res.status(500).json({ error: "DB update failed", dbError });
    }

    return res.status(200).json({ success: true, pathInBucket });
  } catch (err: any) {
    console.error("Unexpected upload error:", err);
    return res.status(500).json({ error: "Unexpected error" });
  }
}
