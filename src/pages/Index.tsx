import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Star, MapPin, Phone, Instagram, Facebook, GraduationCap, Scissors, Calendar, User, FileText, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { EnrollmentModal } from "@/components/EnrollmentModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const whatsappUrl = "https://wa.me/5214423643964";
  const googleMapsUrl = "https://maps.app.goo.gl/9d1y5Z9d6X7s8c7C9"; 
  const linktreeUrl = "https://linktr.ee/cursosamb";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "AMB Barbería 360 Querétaro",
        "image": "https://lovable.dev/opengraph-image-p98pqg.png",
        "url": "https://amb-barber-360-qro.netlify.app/",
        "telephone": "+5214423643964",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Tecnológico Sur #4A, Local 09, Centro",
          "addressLocality": "Querétaro",
          "postalCode": "76010",
          "addressCountry": "MX"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 20.59297,
          "longitude": -100.38952
        },
        "priceRange": "$$"
      },
      {
        "@type": "Course",
        "name": "Curso de Barbería Profesional desde Cero",
        "description": "Domina el arte de la barbería con los mejores expertos. Certificación oficial y bolsa de trabajo.",
        "provider": {
          "@type": "Organization",
          "name": "Asociación Mexicana de Barbería (AMB)",
          "sameAs": ["https://instagram.com/asociacionmexicanadebarberia", "https://facebook.com/asociacionmexicanadebarberia"]
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "OnSite",
          "location": "Querétaro, Mexico"
        },
        "offers": {
          "@type": "Offer",
          "category": "Paid",
          "price": "2000",
          "priceCurrency": "MXN",
          "url": "https://wa.me/5214423643964"
        }
      }
    ]
  };

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

  const syllabus = [
    {
      title: "Nivel Básico",
      topics: ["Historia de la barbería", "Herramientas y su uso correcto", "Protocolos de higiene", "Técnicas de tijera sobre peine"]
    },
    {
      title: "Nivel Intermedio",
      topics: ["Visagismo y morfología", "Desvanecidos (Fades)", "Perfilado de barba y ceja", "Rituales de toalla caliente"]
    },
    {
      title: "Nivel Avanzado",
      topics: ["Diseños y grecas", "Colorimetría básica", "Marketing para barberos", "Administración de negocio"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Curso de Barbería Profesional en Querétaro | AMB Barber 360</title>
        <meta name="description" content="Conviértete en barbero profesional desde cero en Querétaro. Curso práctico con certificación oficial y bolsa de trabajo. ¡Inscríbete hoy!" />
        <meta name="keywords" content="curso de barbería querétaro, escuela de barbería, aprender barbería, certificación barbería, amb barber 360" />
        <meta property="og:title" content="Curso de Barbería Profesional en Querétaro | AMB Barber 360" />
        <meta property="og:description" content="Domina el arte de la barbería con los mejores expertos. Curso práctico desde cero." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 px-4 py-32 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conviértete en <span className="text-primary">Barbero Profesional</span> desde Cero en Querétaro
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
              Domina el arte de la barbería con los mejores expertos. Certificación oficial y bolsa de trabajo garantizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <EnrollmentModal>
                <Button className="w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all duration-300">
                  Inscribirme ahora
                </Button>
              </EnrollmentModal>
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir nuestro curso?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-none bg-background/50 backdrop-blur-sm">
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

      {/* Syllabus Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Plan de Estudios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {syllabus.map((level, index) => (
              <Card key={index} className="relative overflow-hidden group hover:border-primary transition-colors duration-300 pointer-events-none sm:pointer-events-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{level.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {level.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para empezar tu carrera?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            No pierdas la oportunidad de formarte con los mejores. Cupos limitados por grupo.
          </p>
          <EnrollmentModal>
            <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Asegurar mi lugar
            </Button>
          </EnrollmentModal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ubicación en el Corazón de Querétaro</h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Dirección</h3>
                    <p className="text-muted-foreground">Av. Tecnológico Sur #4A, Local 09, Centro.</p>
                    <p className="text-muted-foreground">Querétaro, Qro. C.P. 76010</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" onClick={() => window.open("https://instagram.com", '_blank')}>
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => window.open("https://facebook.com", '_blank')}>
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>

                <Button variant="link" className="pl-0 text-primary text-lg" onClick={() => window.open(googleMapsUrl, '_blank')}>
                  Abrir en Google Maps →
                </Button>
              </div>
            </div>
            <div className="bg-background p-8 rounded-2xl shadow-sm border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
