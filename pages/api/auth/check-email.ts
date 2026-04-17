import type { NextApiRequest, NextApiResponse } from "next";
import { findAuthUserByEmail } from "@/src/lib/authAdminUtils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const email =
    typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";

  if (!email) {
    return res.status(400).json({ error: "email is required" });
  }

  try {
    const user = await findAuthUserByEmail(email);
    return res.status(200).json({ exists: !!user });
  } catch (error) {
    console.error("[auth/check-email]", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
