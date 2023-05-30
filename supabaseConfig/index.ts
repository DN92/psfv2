import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://jfbyqhzzothodtxblxdi.supabase.co';
const supabaseKey: string = process.env.SUPABASE_KEY || '';
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;
