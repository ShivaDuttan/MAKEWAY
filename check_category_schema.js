import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function run() {
  // Let's try listing all tables and then columns if possible via simple queries.
  // PostgREST doesn't allow listing tables directly, so we infer from common column names.
  const tests = ['category_id', 'job_category', 'category_name'];
  
  for (const t of tests) {
    const { error } = await supabase.from('jobs').select(t).limit(1);
    console.log(`Has ${t}:`, !error);
  }
}
run();
