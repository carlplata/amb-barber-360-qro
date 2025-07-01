import { useState, useEffect } from 'react'
import { supabase, type ContactForm, type Enrollment, type Testimonial } from '@/lib/supabase'
import { toast } from 'sonner'

export function useContactForm() {
  const [loading, setLoading] = useState(false)

  const submitContact = async (data: Omit<ContactForm, 'id' | 'created_at'>) => {
    setLoading(true)
    try {
      const { error } = await supabase
        .from('contact_forms')
        .insert([data])

      if (error) throw error

      toast.success('¡Mensaje enviado exitosamente! Te contactaremos pronto.')
      return true
    } catch (error) {
      console.error('Error submitting contact form:', error)
      toast.error('Error al enviar el mensaje. Por favor intenta de nuevo.')
      return false
    } finally {
      setLoading(false)
    }
  }

  return { submitContact, loading }
}

export function useEnrollment() {
  const [loading, setLoading] = useState(false)

  const submitEnrollment = async (data: Omit<Enrollment, 'id' | 'created_at' | 'status'>) => {
    setLoading(true)
    try {
      const { error } = await supabase
        .from('enrollments')
        .insert([{ ...data, status: 'pending' }])

      if (error) throw error

      toast.success('¡Inscripción enviada! Te contactaremos para confirmar tu lugar.')
      return true
    } catch (error) {
      console.error('Error submitting enrollment:', error)
      toast.error('Error al enviar la inscripción. Por favor intenta de nuevo.')
      return false
    } finally {
      setLoading(false)
    }
  }

  return { submitEnrollment, loading }
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false })

      if (error) throw error

      setTestimonials(data || [])
    } catch (error) {
      console.error('Error fetching testimonials:', error)
    } finally {
      setLoading(false)
    }
  }

  const submitTestimonial = async (data: Omit<Testimonial, 'id' | 'created_at' | 'approved'>) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .insert([{ ...data, approved: false }])

      if (error) throw error

      toast.success('¡Testimonio enviado! Será revisado antes de publicarse.')
      return true
    } catch (error) {
      console.error('Error submitting testimonial:', error)
      toast.error('Error al enviar el testimonio. Por favor intenta de nuevo.')
      return false
    }
  }

  return { testimonials, loading, submitTestimonial, fetchTestimonials }
}