import { createClient } from "@supabase/supabase-js";

const URL = "https://biyswycvsisyxyufnnym.supabase.co";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpeXN3eWN2c2lzeXh5dWZubnltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3MTY4NzgsImV4cCI6MjA5NDI5Mjg3OH0.hqt-Ef9JV1fJSyDcP5ob8r_V_EQmHhF2hXar-y-8ROk";

export const supabase = createClient(URL, API_KEY);
