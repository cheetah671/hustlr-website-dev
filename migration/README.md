# Database Migration Guide

## Overview
This folder contains SQL scripts to update the `vettingapplications` table schema to support the new 9-step vetting form.

## Files

| File | Purpose |
|------|---------|
| `000_backup_data_export.sql` | Export existing data as JSON (run first!) |
| `001_vetting_schema_update.sql` | Main migration script |

## Pre-Migration Checklist

- [ ] Run `000_backup_data_export.sql` in Supabase SQL Editor
- [ ] Copy the JSON output and save to a file (e.g., `backup_data.json`)
- [ ] Verify you have 10 rows in the export

## How to Run Migration

### Step 1: Backup Your Data
1. Go to Supabase Dashboard → SQL Editor
2. Paste and run `000_backup_data_export.sql`
3. Save the JSON result somewhere safe

### Step 2: Run Migration
1. Go to Supabase Dashboard → SQL Editor  
2. Paste the entire contents of `001_vetting_schema_update.sql`
3. Click "Run"

### Step 3: Verify
Run these verification queries:

```sql
-- Check row counts match
SELECT 
  (SELECT COUNT(*) FROM vettingapplications) as current_count,
  (SELECT COUNT(*) FROM vettingapplications_backup_20260304) as backup_count;

-- Check new columns exist
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'vettingapplications' 
ORDER BY ordinal_position;

-- Verify skills migrated correctly (should be JSONB now)
SELECT id, email, skills FROM vettingapplications LIMIT 3;
```

## What the Migration Does

### New Columns Added
| Column | Type | Purpose |
|--------|------|---------|
| `hasPublishedResearch` | text | "yes" or "no" |
| `researchPapers` | jsonb[] | Array of research paper objects |
| `codeforcesRating` | text | Codeforces rating level |
| `codeforcesUserId` | text | Codeforces user ID |
| `codechefRating` | text | CodeChef rating level |
| `codechefUserId` | text | CodeChef user ID |
| `hasQualifiedCpCompetitions` | text | "yes" or "no" |
| `cpCompetitions` | jsonb[] | Array of CP competition objects |
| `experiences` | jsonb[] | Array of work experience objects |
| `hackathons` | jsonb[] | Array of hackathon objects |
| `openSource` | jsonb[] | Array of open source contribution objects |

### Type Conversions
| Column | Old Type | New Type | Migration Logic |
|--------|----------|----------|-----------------|
| `skills` | text[] | jsonb | `["React"]` → `[{"skill": "React", "proficiency": "Intermediate"}]` |
| `awards` | text | jsonb | `"Award name"` → `[{"title": "Award name", ...}]` |
| `projects` | text | jsonb | `"Project desc"` → `[{"title": "Project desc", ...}]` |

## Rollback (Emergency Only)

If something goes wrong:

```sql
-- This will restore from the backup table
DROP TABLE IF EXISTS public.vettingapplications;
ALTER TABLE public.vettingapplications_backup_20260304 
  RENAME TO vettingapplications;
```

## Post-Migration

After successful migration:
1. Keep the backup table for 30 days: `vettingapplications_backup_20260304`
2. Test the vetting form end-to-end
3. Once confirmed working, you can delete the backup:
   ```sql
   DROP TABLE IF EXISTS public.vettingapplications_backup_20260304;
   ```
