import type { NextApiRequest, NextApiResponse } from "next";
import {
  checkIfExists,
  extractEmailFromAuthHeader,
  getVettingProgress,
  updateVettingData,
} from "@/src/lib/vettingUtils";
import { sanity } from "@/sanity/lib/client";
import groq from "groq";
import { Stage2Data, Stage2ProjectSubmit } from "@/src/lib/schemas/formSchema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const jwtEmail = extractEmailFromAuthHeader(req);
  if (!jwtEmail) {
    return res.status(401).json({ error: "Invalid or missing token" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const data: Stage2ProjectSubmit = body;
    const existing = await checkIfExists(jwtEmail);

    if (!existing) {
      return res.status(401).json({
        success: false,
        message: "There is no user with given email id",
      });
    }

    if (!data.videoLink || !data.videoLink.includes("drive.google.com"))
      return res.status(400).json({
        success: false,
        message: "No video link found or not a google drive link",
      });

    const userData = await getVettingProgress(jwtEmail);

    if (!userData.success) {
      console.error("[-] Error: There was an error fetching userData");
      return res.status(500).json({
        success: false,
        message: "There was an error fetching userData",
      });
    }
    const projDeadline = new Date(userData.data.projectDeadline);
    const isWithinTime = projDeadline.getTime() - Date.now() > 0;

    if (!isWithinTime) {
      return res.status(400).json({
        success: false,
        message: "Submission deadline has passed",
      });
    }

    await updateVettingData({
      ...data,
      status: "round_2_under_review",
      email: jwtEmail,
    });

    return res.status(200).json({ success: true, final: false });
  } catch (error) {
    console.error("Error saving project data:", error);
    return res
      .status(500)
      .json({ error: `Failed to update project selection: ${error}` });
  }
}
