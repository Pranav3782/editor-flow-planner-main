
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing env vars");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function debug() {
    console.log("Checking if 'notes' column exists...");

    // Try to select 'notes' from a job
    const { data, error } = await supabase.from('jobs').select('id, notes').limit(1);

    if (error) {
        console.error("Select Error:", JSON.stringify(error, null, 2));
        if (error.message?.includes('does not exist')) {
            console.log("CONCLUSION: The 'notes' column is MISSING from the 'jobs' table.");
        }
    } else {
        console.log("Select Success. Data:", data);
        console.log("CONCLUSION: The 'notes' column EXISTS.");

        // Test Update
        if (data && data.length > 0) {
            console.log("Testing Update...");
            const id = data[0].id;
            const { error: updateError } = await supabase
                .from('jobs')
                .update({ notes: 'Debug Note ' + Date.now() })
                .eq('id', id);

            if (updateError) {
                console.error("Update Error:", JSON.stringify(updateError, null, 2));
            } else {
                console.log("Update Success.");
            }
        }
    }
}

debug();
