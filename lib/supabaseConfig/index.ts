import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = `postgres://postgres:${process.env.SUPABASE_PASSWORD}@db.jfbyqhzzothodtxblxdi.supabase.co:6543/postgres`;
const supabaseKey: string = process.env.REST_KEY || '';
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;
