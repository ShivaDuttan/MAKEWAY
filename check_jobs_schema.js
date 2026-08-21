import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function run() {
  // Try selecting one row to infer column names
  const { data, error } = await supabase.from('jobs').select('*').limit(1);
  if (error) {
    console.error("Error fetching jobs:", error.message);
  } else if (data && data.length > 0) {
    console.log("Columns:", Object.keys(data[0]));
  } else {
    console.log("No jobs found, cannot infer columns.");
  }
}
run();
