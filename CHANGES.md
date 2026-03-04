# Hustlr Website - Changes Documentation

This document outlines all changes made in `hustlr-website-dev-updated` compared to the original `hustlr-website-dev` repository.

---

## Summary of Changes

The primary change was a **complete overhaul of the student vetting/application form**, expanding it from a simple 3-step form to a comprehensive 9-step application process with detailed input components for skills, projects, experience, hackathons, open source contributions, and research/competitive programming.

---

## New Files Added

### New Vetting Input Components (`src/components/vetting/`)

| File | Description |
|------|-------------|
| `BranchInput.tsx` | Input for student's major/branch (e.g., CSE) |
| `CollegeEmailInput.tsx` | Input for college email address |
| `DegreeInput.tsx` | Input for degree type (e.g., B.Tech) |
| `ExperienceInput.tsx` | Dialog-based form for adding work experiences (max 3) with job title, employment type, company, description, skills, and date range |
| `HackathonInput.tsx` | Dialog-based form for adding hackathon participations (max 3) with project details, placement, tech stack, team info |
| `OpenSourceInput.tsx` | Dialog-based form for open source contributions (max 3) with GitHub profile, PRs, program participation (GSoC, LFX, etc.) |
| `PhoneInput.tsx` | Phone number input with +91 prefix |
| `ProjectsInput.tsx` | Dialog-based form for projects (max 3) with title, type, role, description, tech stack, category, and dates |
| `ResearchCompetitiveInput.tsx` | Combined input for research papers and competitive programming (Codeforces/CodeChef ratings, ICPC qualifications) |
| `SkillsProficiencyInput.tsx` | Skill selector with proficiency levels (Beginner/Intermediate/Advanced/Expert), max 10 skills |

---

## Removed Files

| File | Reason |
|------|--------|
| `src/components/vetting/SkillsInput.tsx` | Replaced by `SkillsProficiencyInput.tsx` with proficiency levels |

---

## Modified Files

### 1. Form Schema (`src/lib/schemas/formSchema.ts`)

**Major expansion of the application form schema:**

#### New Fields Added:
- `phone` - Phone number with +91 validation
- `collegeEmail` - College email address
- `degree` - Degree type
- `branch` - Major/branch of study
- `skills` - Changed from simple string array to array of objects with `{skill, proficiency}`
- `projects` - Array of project objects with title, type, members, description, techStack, dates, githubLink
- `experiences` - Array of work experience objects
- `hackathons` - Array of hackathon participation objects
- `openSource` - Array of open source contribution objects
- `hasPublishedResearch` - Yes/No field
- `researchPapers` - Array of research paper objects with title, venue, rank, year, link
- `codeforcesRating` / `codeforcesUserId` - Codeforces profile
- `codechefRating` / `codechefUserId` - CodeChef profile
- `hasQualifiedCpCompetitions` - ICPC-style qualifications flag
- `cpCompetitions` - Array of competitive programming achievements

#### Removed Fields:
- `location` - No longer collected

#### Changed Fields:
- `awards` - Changed from simple string (max 200 chars) to structured array of award objects with title, category, organization, month, year, certification

#### Updated Types:
- `SupabaseVettingData` - Expanded to include all new fields

### 2. Vetting Form (`src/components/vetting/VettingForm.tsx`)

**Expanded from 3 steps to 9 steps:**

| Step | Original | Updated |
|------|----------|---------|
| 0 | Category Selection | Category Selection |
| 1 | Personal Info | Personal Info (expanded with phone, collegeEmail, degree, branch) |
| 2 | Experience and Awards | Skills & Proficiency |
| 3 | - | Projects |
| 4 | - | Experience |
| 5 | - | Hackathons |
| 6 | - | Open Source |
| 7 | - | Research & Competitive Programming |
| 8 | - | Awards and Documents |

**New imports added:**
- `PhoneInput`, `DegreeInput`, `BranchInput`, `CollegeEmailInput`
- `SkillsProficiencyInput` (replaces `SkillsInput`)
- `ProjectsInput`, `ExperienceInput`, `HackathonInput`
- `OpenSourceInput`, `ResearchCompetitiveInput`

**New features:**
- Auto-save functionality with `useCallback` and `useRef`
- Better step calculation based on filled fields

### 3. Awards Input (`src/components/vetting/AwardsInput.tsx`)

**Complete redesign:**

| Aspect | Original | Updated |
|--------|----------|---------|
| Input Type | Simple textarea (200 chars max) | Dialog-based form for multiple awards |
| Fields | Single text field | Title, Category, Organization, Month, Year, Certification upload |
| Structure | Plain string | Array of award objects |

### 4. Application Pages

#### `pages/get-started/student/application/vetting.tsx`
- Updated steps array from 4 items to 9 items
- Added detailed step descriptions

#### `pages/get-started/student/application/stage1.tsx`  
- Updated steps array from 4 items to 10 items (includes final "Application Received" step)
- Added detailed step descriptions
- Fixed typo: "Application Recieved" → "Application Received"

### 5. API Changes

#### `pages/api/application/save.ts`
- Added **beacon request support** for saving data when page closes
- New logic to extract JWT from query params when `beacon=true`
- Import added: `verifyToken` from jwt module

### 6. UI Components

#### `components/ui/command.tsx`
- Minor modifications (likely styling or accessibility improvements)

### 7. Other Modified Components

#### `src/components/vetting/LocationInput.tsx`
- **Commented out entirely** - Location field removed from the form

#### `src/components/vetting/DobInput.tsx`
- Minor updates (likely validation or styling)

#### `src/components/vetting/CollegeInput.tsx`
- Minor updates (likely validation or styling)

#### `src/components/vetting/CategoryRadio.tsx`
- Minor updates

#### `src/components/vetting/UploadFile.tsx`
- Minor updates (likely for new certification upload in awards)

---

## Architecture Overview (Updated Repo)

```
hustlr-website-dev-updated/
├── pages/
│   ├── get-started/student/application/
│   │   ├── stage1.tsx          # 9-step vetting form page
│   │   ├── vetting.tsx         # Vetting status page
│   │   ├── status.tsx          # Application status
│   │   └── stage2/             # Round 2 project selection
│   └── api/application/
│       └── save.ts             # Save vetting data (with beacon support)
├── src/
│   ├── components/vetting/     # Form input components
│   │   ├── VettingForm.tsx     # Main 9-step form orchestrator
│   │   ├── SkillsProficiencyInput.tsx
│   │   ├── ProjectsInput.tsx
│   │   ├── ExperienceInput.tsx
│   │   ├── HackathonInput.tsx
│   │   ├── OpenSourceInput.tsx
│   │   ├── ResearchCompetitiveInput.tsx
│   │   ├── AwardsInput.tsx     # Redesigned awards form
│   │   ├── PhoneInput.tsx      # NEW
│   │   ├── DegreeInput.tsx     # NEW
│   │   ├── BranchInput.tsx     # NEW
│   │   ├── CollegeEmailInput.tsx # NEW
│   │   └── ... (other inputs)
│   └── lib/schemas/
│       └── formSchema.ts       # Zod validation schema (expanded)
```

---

## Key Technical Changes

1. **Form Validation**: Significantly expanded Zod schema with nested object arrays and conditional validation (e.g., research papers required if `hasPublishedResearch === "Yes"`)

2. **UI Components**: New dialog-based input components using shadcn/ui `Dialog`, `Command` (combobox), and `Popover` components

3. **Data Persistence**: Beacon API support for auto-saving form progress when user leaves the page

4. **Tech Stack Options**: Comprehensive predefined lists for technologies, programming languages, frameworks, and tools across all input components

---

## Migration Notes

If migrating from the original to updated version:

1. Database schema needs to be updated to accommodate new fields (arrays for projects, experiences, hackathons, etc.)
2. Existing `awards` data (plain text) needs to be migrated to the new structured format
3. `skills` data needs migration from string array to `{skill, proficiency}` object array
4. `location` field can be dropped from the schema

---

## Files Changed Count

- **New files**: 10
- **Removed files**: 1  
- **Modified files**: 14 (including package-lock.json)
