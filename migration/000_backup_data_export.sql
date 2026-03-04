-- ============================================================================
-- EXPORT EXISTING DATA AS JSON (Run this BEFORE migration)
-- ============================================================================
-- Run in Supabase SQL Editor to get your data as JSON backup
-- Copy the result and save it somewhere safe

SELECT json_agg(v) 
FROM vettingapplications v;

-- Or export individual rows for clarity:
SELECT 
  id,
  name,
  email,
  category,
  college,
  dob,
  cgpa,
  year,
  linkedin,
  github,
  location,
  awards,
  skills,
  resume,
  transcript,
  "studentId",
  "isComplete",
  "createdAt",
  status,
  "currentStage",
  "selectedProjectSanityId",
  "videoLink",
  "otherLinks",
  "projectDeadline",
  phone,
  "collegeEmail",
  degree,
  branch,
  projects
FROM vettingapplications
ORDER BY "createdAt";
