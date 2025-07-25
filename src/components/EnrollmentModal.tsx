import { useState } from 'react'
import { useEnrollment } from '@/hooks/useSupabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Loader2 } from 'lucide-react'

interface EnrollmentModalProps {
  children: React.ReactNode
  defaultPaymentPlan?: string
}

// Define un tipo para los datos del formulario para mayor seguridad
type EnrollmentFormData = {
  name: string;
  email: string;
  phone: string;
  payment_plan: string;
  modality: string;
}

export function EnrollmentModal({ children, defaultPaymentPlan }: EnrollmentModalProps) {
  const { submitEnrollment, loading } = useEnrollment()
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<EnrollmentFormData>({
    name: '',
    email: '',
    phone: '',
    payment_plan: defaultPaymentPlan || '',
    modality: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Ya no se necesita "as any", el tipado es correcto
    const success = await submitEnrollment(formData)
    if (success) {
      setFormData({ name: '', email: '', phone: '', payment_plan: '', modality: '' })
      setOpen(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Inscripción al Curso de Barbería</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <Input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <Select
            value={formData.payment_plan}
            onValueChange={(value) => setFormData({ ...formData, payment_plan: value })}
            disabled={loading}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona plan de pago" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="por-clase">Por clase</SelectItem>
              <SelectItem value="quincenal">Quincenal (-8%)</SelectItem>
              <SelectItem value="mensual">Mensual (-14%)</SelectItem>
              <SelectItem value="curso-completo">Curso completo (-20%)</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={formData.modality}
            onValueChange={(value) => setFormData({ ...formData, modality: value })}
            disabled={loading}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona modalidad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="matutino">Matutino (Lun-Mié 9am-12pm)</SelectItem>
              <SelectItem value="vespertino">Vespertino (Mar-Jue 4pm-7pm)</SelectItem>
              <SelectItem value="sabatino">Sabatino (Sáb 10am-2pm)</SelectItem>
            </SelectContent>
          </Select>
          <Button
            type="submit"
            disabled={loading || !formData.payment_plan || !formData.modality}
            className="w-full bg-yellow-400 text-black hover:bg-yellow-300"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar Inscripción'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}