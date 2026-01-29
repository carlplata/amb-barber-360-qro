import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Star, MapPin, Phone, Instagram, Facebook, GraduationCap, Scissors, Calendar, User, FileText, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import EnrollmentModal from "@/components/EnrollmentModal";
import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const whatsappUrl = "https://wa.me/5214423643964";
  const googleMapsUrl = "https://maps.app.goo.gl/uX3QkQ8wZz1z1z1z9"; // Replace with real URL
  const linktreeUrl = "https://linktr.ee/ambbarber360";

  const benefits = [
    {
      title: "Certificación Oficial",
      description: "Diploma con valor curricular al finalizar el curso.",
      icon: <GraduationCap className="h-10 w-10 text-primary mb-4" />
    },
    {
      title: "Práctica Real",
      description: "Cortes con modelos reales desde las primeras semanas.",
      icon: <Scissors className="h-10 w-10 text-primary mb-4" />
    },
    {
      title: "Horarios Flexibles",
      description: "Clases entre semana y fines de semana disponibles.",
      icon: <Calendar className="h-10 w-10 text-primary mb-4" />
    }
  ];

  const faqs = [
    {
      question: "¿Necesito experiencia previa?",
      answer: "No, nuestro curso 'Desde Cero' está diseñado para principiantes absolutos. Te guiaremos paso a paso."
    },
    {
      question: "¿La inscripción incluye materiales?",
      answer: "Sí, tu inscripción de $2,000 MXN incluye un kit básico y accesorios profesionales, además de tu manual."
    },
    {
      question: "¿Tienen bolsa de trabajo?",
      answer: "Sí, colaboramos con las mejores barberías de Querétaro para ayudarte a encontrar empleo al graduarte."
    },
    {
      question: "¿Cuál es la duración del curso?",
      answer: "El curso tiene una duración de 4 meses, con clases prácticas intensivas."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Curso de Barbería en Querétaro | Aprende desde Cero" 
        description="Domina el arte de la barbería en Querétaro. Curso práctico con certificación, kit incluido y bolsa de trabajo. ¡Inscríbete hoy!"
        image="/og-image.png"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 px-4 py-32 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Conviértete en <span className="text-primary">Barbero Profesional</span> desde Cero en Querétaro
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up delay-100">
            Domina el arte de la barbería con los mejores expertos. Certificación oficial y bolsa de trabajo garantizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
            <EnrollmentModal />
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-lg px-8 py-6 bg-transparent hover:bg-white/10 text-white border-white"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Hablar con asesor
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir nuestro curso?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center">{benefit.icon}</div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background" itemScope itemType="https://schema.org/FAQPage">
        <div className="container px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <AccordionTrigger itemProp="name">{faq.question}</AccordionTrigger>
                <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ubicación en el Corazón de Querétaro</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Dirección</h3>
                    <p className="text-muted-foreground">Av. Tecnológico Sur #4A, Local 09, Centro.</p>
                    <p className="text-muted-foreground">Querétaro, Qro. C.P. 76010</p>
                  </div>
                </div>
                <Button variant="link" className="pl-10 text-primary" onClick={() => window.open(googleMapsUrl, '_blank')}>
                  Abrir en Google Maps
                </Button>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
