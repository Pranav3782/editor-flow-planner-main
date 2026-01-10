-- Add notes column to jobs table if it doesn't exist
ALTER TABLE "public"."jobs" 
ADD COLUMN IF NOT EXISTS "notes" text;

-- Verify the column was added
SELECT column_name, data_type, is_nullable
FROM information_schema.columns 
WHERE table_schema = 'public' 
  AND table_name = 'jobs'
ORDER BY ordinal_position;

-- Force PostgREST to reload the schema cache
NOTIFY pgrst, 'reload schema';
