import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Service = {
  id: string;
  name: string;
  price: number;
  duration: number;
  description: string;
};

export type Appointment = {
  id: string;
  client_name: string;
  phone: string;
  service_id: string;
  appointment_date: string;
  appointment_time: string;
  status: string;
  created_at: string;
};