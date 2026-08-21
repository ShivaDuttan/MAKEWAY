import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function run() {
  const { error: errMin } = await supabase.from('jobs').select('budget_min').limit(1);
  const { error: errMax } = await supabase.from('jobs').select('budget_max').limit(1);
  const { error: errBudget } = await supabase.from('jobs').select('budget').limit(1);
  
  console.log("Has budget_min:", !errMin);
  console.log("Has budget_max:", !errMax);
  console.log("Has budget:", !errBudget);
}
run();
