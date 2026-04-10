import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/src/lib/supabase-admin";
import { extractClientEmailFromCookie } from "@/src/lib/clientAuthUtils";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const email = extractClientEmailFromCookie(req);
  if (!email) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { id } = req.body;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ error: "Job post ID is required" });
    }

    // Ensure the project belongs to the user
    const { data: existing, error: fetchError } = await supabaseAdmin
      .from("job_posts")
      .select("id")
      .eq("id", id)
      .eq("client_email", email)
      .maybeSingle();

    if (fetchError) {
      console.error("[client/job-post/delete] fetch error:", fetchError);
      return res.status(500).json({ error: "Failed to delete project" });
    }

    if (!existing) {
      return res.status(404).json({ error: "Project not found or unauthorized to delete" });
    }

    // Delete the project
    const { error: deleteError } = await supabaseAdmin
      .from("job_posts")
      .delete()
      .eq("id", id);

    if (deleteError) {
      console.error("[client/job-post/delete] delete error:", deleteError);
      return res.status(500).json({ error: "Failed to delete project" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[client/job-post/delete]", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
