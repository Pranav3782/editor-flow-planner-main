
-- Run this in Supabase SQL Editor to toggle your account between Free and Pro

-- To become a PRO user (Unlock features)
update public.profiles 
set plan_type = 'pro'
where id = auth.uid();

-- To revert to FREE user (Lock features)
-- update public.profiles 
-- set plan_type = 'free'
-- where id = auth.uid();
