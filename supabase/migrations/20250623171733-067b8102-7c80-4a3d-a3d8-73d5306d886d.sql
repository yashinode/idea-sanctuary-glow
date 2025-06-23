
-- Create a table to store waitlist email signups
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to the waitlist table
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert emails (for public waitlist)
CREATE POLICY "Anyone can join waitlist" 
  ON public.waitlist 
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy that allows reading waitlist entries (for admin purposes)
CREATE POLICY "Anyone can view waitlist" 
  ON public.waitlist 
  FOR SELECT 
  USING (true);
