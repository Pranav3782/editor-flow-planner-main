
-- Create job_notes table
create table public.job_notes (
  id uuid default gen_random_uuid() primary key,
  job_id uuid references public.jobs(id) on delete cascade not null,
  user_id uuid references auth.users not null,
  content text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(job_id) -- One note per job constraint
);

-- Enable RLS
alter table public.job_notes enable row level security;

-- Policies
create policy "Users can view their own job notes" 
  on public.job_notes for select 
  using (auth.uid() = user_id);

create policy "Users can insert their own job notes" 
  on public.job_notes for insert 
  with check (auth.uid() = user_id);

create policy "Users can update their own job notes" 
  on public.job_notes for update 
  using (auth.uid() = user_id);

create policy "Users can delete their own job notes" 
  on public.job_notes for delete 
  using (auth.uid() = user_id);

-- Optional: Drop notes column from jobs if we are fully migrating
-- ALTER TABLE public.jobs DROP COLUMN IF EXISTS notes;
