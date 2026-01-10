
-- -----------------------------------------------------------------------------
-- INSTRUCTIONS:
-- 1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/_/sql
-- 2. Click "New Query"
-- 3. Copy AND Paste the ALL the code below into the editor
-- 4. Click "Run"
-- -----------------------------------------------------------------------------

-- 1. Add 'notes' column to 'jobs' table (Backup/Simple storage)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'jobs' AND column_name = 'notes') THEN
        ALTER TABLE public.jobs ADD COLUMN notes text;
    END IF;
END $$;

-- 2. Create 'job_notes' table (Advanced storage as requested)
CREATE TABLE IF NOT EXISTS public.job_notes (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id uuid NOT NULL UNIQUE REFERENCES public.jobs(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users,
  content text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Enable Security (RLS) for job_notes
ALTER TABLE public.job_notes ENABLE ROW LEVEL SECURITY;

-- 4. Create Access Policies (Allow you to read/write your own notes)
DO $$
BEGIN
    -- Drop existing policies to avoid conflicts if re-running
    DROP POLICY IF EXISTS "Users can view their own job notes" ON public.job_notes;
    DROP POLICY IF EXISTS "Users can insert their own job notes" ON public.job_notes;
    DROP POLICY IF EXISTS "Users can update their own job notes" ON public.job_notes;
    DROP POLICY IF EXISTS "Users can delete their own job notes" ON public.job_notes;
END $$;

CREATE POLICY "Users can view their own job notes" 
  ON public.job_notes FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own job notes" 
  ON public.job_notes FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own job notes" 
  ON public.job_notes FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own job notes" 
  ON public.job_notes FOR DELETE 
  USING (auth.uid() = user_id);

-- 5. Force schema cache reload (Accessing the API immediately after migration)
NOTIFY pgrst, 'reload schema';
