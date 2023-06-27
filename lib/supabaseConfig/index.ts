import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../database.types';

const supabaseUrl: string = `postgres://postgres:${process.env.SUPABASE_PASSWORD}@db.jfbyqhzzothodtxblxdi.supabase.co:6543/postgres`;
const supabaseKey: string = process.env.REST_KEY || '';
const supabase: SupabaseClient<Database> = createClient(supabaseUrl, supabaseKey);

export default supabase;
