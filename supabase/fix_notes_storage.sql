
-- Run this in your Supabase SQL Editor to enable Notes storage

-- 1. Create the job_notes table
create table if not exists public.job_notes (
  id uuid default gen_random_uuid() primary key,
  job_id uuid references public.jobs(id) on delete cascade not null,
  user_id uuid references auth.users not null,
  content text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(job_id)
);

-- 2. Enable Security
alter table public.job_notes enable row level security;

-- 3. Create Access Policies
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

-- 4. (Optional) Backfill notes from jobs table if column exists and has data
do $$
begin
  if exists (select 1 from information_schema.columns where table_name = 'jobs' and column_name = 'notes') then
    insert into public.job_notes (job_id, user_id, content)
    select id, user_id, notes from public.jobs where notes is not null and notes != ''
    on conflict (job_id) do update set content = excluded.content;
  end if;
end $$;
