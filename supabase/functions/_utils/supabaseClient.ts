import { createClient } from "npm:@supabase/supabase-js@2.39.8";

export const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
)