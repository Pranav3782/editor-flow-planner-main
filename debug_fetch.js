
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function testFetch() {
    console.log("--- Checking Data ---");

    // 1. Check job_notes table
    const { count } = await supabase.from('job_notes').select('*', { count: 'exact', head: true });
    console.log(`Entries in 'job_notes' table: ${count}`);

    // 2. Check jobs table 'notes' column
    const { data: jobs } = await supabase.from('jobs').select('title, notes').not('notes', 'is', null).limit(10);

    if (jobs && jobs.length > 0) {
        console.log(`Found ${jobs.length} jobs with notes in COLUMN:`);
        jobs.forEach(j => console.log(` - ${j.title}: ${j.notes}`));
    } else {
        console.log("No notes found in 'jobs' column.");
    }
}

testFetch();
