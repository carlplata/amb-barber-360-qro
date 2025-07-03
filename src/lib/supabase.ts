import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Provide fallback values for development to prevent errors
const defaultUrl = 'https://placeholder.supabase.co'
const defaultKey = 'placeholder_key'

export const supabase = createClient(
  supabaseUrl || defaultUrl, 
  supabaseAnonKey || defaultKey
)

// Types for our database tables
export interface ContactForm {
  id?: string
  name: string
  email: string
  phone: string
  message: string
  created_at?: string
}

export interface Enrollment {
  id?: string
  name: string
  email: string
  phone: string
  payment_plan: 'por-clase' | 'quincenal' | 'mensual' | 'curso-completo'
  modality: 'matutino' | 'vespertino' | 'sabatino'
  status: 'pending' | 'confirmed' | 'cancelled'
  created_at?: string
}

export interface Testimonial {
  id?: string
  name: string
  text: string
  rating: number
  approved: boolean
  created_at?: string
}