// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://bmkjhbnghfsioxlxdeyq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJta2poYm5naGZzaW94bHhkZXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMTY5NTQsImV4cCI6MjA2MjY5Mjk1NH0.UaEIxqa6-MMtmFIPz0EFUg4EUzSHsGQtlMEOP93VdT8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);