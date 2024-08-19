import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mldbwvarffqsunmysayp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sZGJ3dmFyZmZxc3VubXlzYXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MzE0NDAsImV4cCI6MjAzODAwNzQ0MH0.ZRNaSLG6jxxzbhsVb0zC7leo37nFGHL9JH_rVvO_lCQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
