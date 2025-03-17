const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)
if(supabase) {
  console.log('supabase connected');
}else {
  console.log('supabase not connected');
}
module.exports = supabase;