import { useState } from 'react'
import { supabase, type ContactForm, type Enrollment } from '@/lib/supabase'
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