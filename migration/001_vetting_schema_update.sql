-- ============================================================================
-- HUSTLR VETTING APPLICATIONS SCHEMA MIGRATION
-- Version: 001
-- Date: 2026-03-04
-- Purpose: Add new fields for expanded 9-step vetting form
-- ============================================================================

-- ============================================================================
-- STEP 1: BACKUP EXISTING DATA
-- ============================================================================
-- Create a backup table with all existing data
CREATE TABLE IF NOT EXISTS public.vettingapplications_backup_20260304 AS 
SELECT * FROM public.vettingapplications;

-- Verify backup was created (run this separately to check)
-- SELECT COUNT(*) FROM public.vettingapplications_backup_20260304;

-- ============================================================================
-- STEP 2: ADD NEW COLUMNS (Safe - no data loss)
-- ============================================================================

-- Research & Competitive Programming fields
ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS "hasPublishedResearch" text;

ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS "researchPapers" jsonb DEFAULT '[]'::jsonb;

ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS "codeforcesRating" text;

ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS "codeforcesUserId" text;

ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS "codechefRating" text;

ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS "codechefUserId" text;

ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS "hasQualifiedCpCompetitions" text;

ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS "cpCompetitions" jsonb DEFAULT '[]'::jsonb;

-- Experience fields
ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS experiences jsonb DEFAULT '[]'::jsonb;

ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS hackathons jsonb DEFAULT '[]'::jsonb;

ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS "openSource" jsonb DEFAULT '[]'::jsonb;

-- ============================================================================
-- STEP 3: CONVERT EXISTING COLUMNS TO JSONB
-- ============================================================================

-- 3a. Convert 'skills' from ARRAY to JSONB
-- First, add a new temporary column
ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS skills_new jsonb DEFAULT '[]'::jsonb;

-- Migrate existing skills data (convert string array to object array)
-- Old format: ['React', 'Node.js'] 
-- New format: [{"skill": "React", "proficiency": "Intermediate"}, ...]
UPDATE public.vettingapplications 
SET skills_new = (
  SELECT COALESCE(
    jsonb_agg(
      jsonb_build_object('skill', skill_item, 'proficiency', 'Intermediate')
    ),
    '[]'::jsonb
  )
  FROM unnest(skills) AS skill_item
)
WHERE skills IS NOT NULL AND array_length(skills, 1) > 0;

-- Drop old column and rename new one
ALTER TABLE public.vettingapplications DROP COLUMN IF EXISTS skills;
ALTER TABLE public.vettingapplications RENAME COLUMN skills_new TO skills;

-- Make skills NOT NULL with default
ALTER TABLE public.vettingapplications 
ALTER COLUMN skills SET DEFAULT '[]'::jsonb;

ALTER TABLE public.vettingapplications 
ALTER COLUMN skills SET NOT NULL;


-- 3b. Convert 'awards' from TEXT to JSONB
-- Add temporary column
ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS awards_new jsonb DEFAULT '[]'::jsonb;

-- Migrate existing awards data (convert text to single award object if not empty)
-- Old format: "Won hackathon at IIT Delhi"
-- New format: [{"title": "Won hackathon at IIT Delhi", "category": "Hackathon", ...}]
UPDATE public.vettingapplications 
SET awards_new = (
  CASE 
    WHEN awards IS NOT NULL AND awards != '' THEN
      jsonb_build_array(
        jsonb_build_object(
          'title', awards,
          'category', 'Academic award',
          'organization', 'Unknown',
          'month', 'January',
          'year', '2024'
        )
      )
    ELSE '[]'::jsonb
  END
)
WHERE TRUE;

-- Drop old column and rename
ALTER TABLE public.vettingapplications DROP COLUMN IF EXISTS awards;
ALTER TABLE public.vettingapplications RENAME COLUMN awards_new TO awards;


-- 3c. Convert 'projects' from TEXT to JSONB  
-- Add temporary column
ALTER TABLE public.vettingapplications 
ADD COLUMN IF NOT EXISTS projects_new jsonb DEFAULT '[]'::jsonb;

-- Migrate existing projects data (most likely empty or simple text)
UPDATE public.vettingapplications 
SET projects_new = (
  CASE 
    WHEN projects IS NOT NULL AND projects != '' AND projects != '[]' THEN
      -- Try to parse as JSON first, if fails treat as text
      CASE 
        WHEN projects::text ~ '^\[.*\]$' OR projects::text ~ '^\{.*\}$' THEN
          projects::jsonb
        ELSE
          jsonb_build_array(
            jsonb_build_object(
              'title', projects,
              'type', 'Personal',
              'members', 'Solo',
              'description', projects,
              'techStack', '[]'::jsonb,
              'startMonth', 'January',
              'startYear', '2024',
              'endMonth', 'December', 
              'endYear', '2024'
            )
          )
      END
    ELSE '[]'::jsonb
  END
)
WHERE TRUE;

-- Drop old column and rename
ALTER TABLE public.vettingapplications DROP COLUMN IF EXISTS projects;
ALTER TABLE public.vettingapplications RENAME COLUMN projects_new TO projects;


-- ============================================================================
-- STEP 4: SET PROPER DEFAULTS FOR ALL JSONB COLUMNS
-- ============================================================================
ALTER TABLE public.vettingapplications 
ALTER COLUMN skills SET DEFAULT '[]'::jsonb;

ALTER TABLE public.vettingapplications 
ALTER COLUMN awards SET DEFAULT '[]'::jsonb;

ALTER TABLE public.vettingapplications 
ALTER COLUMN projects SET DEFAULT '[]'::jsonb;

ALTER TABLE public.vettingapplications 
ALTER COLUMN experiences SET DEFAULT '[]'::jsonb;

ALTER TABLE public.vettingapplications 
ALTER COLUMN hackathons SET DEFAULT '[]'::jsonb;

ALTER TABLE public.vettingapplications 
ALTER COLUMN "openSource" SET DEFAULT '[]'::jsonb;

ALTER TABLE public.vettingapplications 
ALTER COLUMN "researchPapers" SET DEFAULT '[]'::jsonb;

ALTER TABLE public.vettingapplications 
ALTER COLUMN "cpCompetitions" SET DEFAULT '[]'::jsonb;


-- ============================================================================
-- VERIFICATION QUERIES (Run these after migration to verify)
-- ============================================================================
-- Check row count matches backup
-- SELECT 
--   (SELECT COUNT(*) FROM vettingapplications) as current_count,
--   (SELECT COUNT(*) FROM vettingapplications_backup_20260304) as backup_count;

-- Check new columns exist
-- SELECT column_name, data_type 
-- FROM information_schema.columns 
-- WHERE table_name = 'vettingapplications' 
-- ORDER BY ordinal_position;

-- Sample a row to verify data migration
-- SELECT id, email, skills, awards, projects FROM vettingapplications LIMIT 1;


-- ============================================================================
-- ROLLBACK SCRIPT (Only use if something goes wrong!)
-- ============================================================================
-- To rollback, run these commands:
-- 
-- DROP TABLE IF EXISTS public.vettingapplications;
-- ALTER TABLE public.vettingapplications_backup_20260304 
--   RENAME TO vettingapplications;
--
-- ============================================================================
