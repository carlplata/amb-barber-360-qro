import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { EnrollmentModal } from "@/components/EnrollmentModal";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const benefits = [
  { icon: "✂️", title: "25 clases prácticas", description: "Aprende con práctica real" },
  { icon: "🧑‍🏫", title: "Profesores activos", description: "Barberos profesionales" },
  { icon: "🏅", title: "5 certificaciones", description: "Reconocimiento oficial" },
  { icon: "💼", title: "Bolsa de trabajo", description: "Oportunidades laborales" },
  { icon: "📦", title: "Precio de distribución", description: "En productos y máquinas de por vida" },
  { icon: "📍", title: "Ubicación céntrica Qro.", description: "Fácil acceso en la ciudad" },
];

const pricingOptions = [
    { title: "Por clase", description: "Paga clase por clase", price: "Flexible", discount: "", image: "/images/pago por clase.jpg", plan: "por-clase" },
    { title: "Quincenal", description: "Ahorra pagando cada 15 días", price: "8%", discount: "-8%", image: "/images/pago por quincena.jpg", plan: "quincenal" },
    { title: "Mensual", description: "Ahorra con pago mensual", price: "14%", discount: "-14%", image: "/images/pago mensual.jpg", plan: "mensual" },
    { title: "Curso completo", description: "Máximo ahorro", price: "20%", discount: "-20%", image: "/images/curso completo.jpg", plan: "curso-completo" },
];

const certificates = [
  { name: "Barbicide", image: "/lovable-uploads/92910c3a-9ab9-4040-81b7-2400bf55429f.png" },
  { name: "Barbicide Certification", image: "/lovable-uploads/1dd4286a-901c-4cba-9e53-53d06179454d.png" },
  { name: "AMB Certificación Oficial", image: "/lovable-uploads/bd1b84e7-cb19-4084-a1b4-daae1f7deba9.png" },
  { name: "Amos Academy", image: "/lovable-uploads/ed4fd92b-1021-4a93-a841-12eeaaee8ffd.png" },
  { name: "Fundación Carlos Slim", image: "/lovable-uploads/056b97e0-40b6-4bec-8dd9-a6452668c10b.png" },
];

const modalities = [
  { icon: "🕒", title: "Matutino", desc: "Lunes y miércoles 9am-12pm" },
  { icon: "🌆", title: "Vespertino", desc: "Martes y jueves 4pm-7pm" },
  { icon: "🗓️", title: "Sabatino", desc: "Sábados 10am-2pm" },
];

const learningEnvironment = [
  { icon: "👨‍🏫", title: "Profesores activos", desc: "Barberos profesionales trabajando en el sector" },
  { icon: "👥", title: "Grupos pequeños", desc: "Máximo 8 estudiantes por grupo para atención personalizada" },
  { icon: "💇‍♂️", title: "Práctica real con clientes", desc: "Desde la primera semana trabajas con clientes reales" },
];

const masterCourses = [
    { title: "Colorimetría Avanzada", desc: "Domina las técnicas de color profesional", price: "$3,500", image: "/images/colorimetria.jpg" },
    { title: "Corte a Tijera", desc: "Perfecciona el arte del corte clásico", price: "$2,800", image: "/images/5c0fe394-6cb2-46cb-80ce-8c0c26f04975.png" },
    { title: "Fades Profesionales", desc: "Técnicas avanzadas de degradados", price: "$2,500", image: "/images/fades.png" },
    { title: "Barbería Clásica", desc: "Técnicas tradicionales de barbería", price: "$3,200", image: "/images/barber-5428008_1280.jpg" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center p-1">
              <img
                src="/lovable-uploads/ae0a782f-1452-445a-a992-875f288b3932.png"
                alt="AMB Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-heading uppercase tracking-wider">Barbería 360°</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <EnrollmentModal>
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-transform hover:scale-105">
                Inscribirme
              </button>
            </EnrollmentModal>
            <a href="https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=141039576-ff609d72-4186-4497-b7c2-89d0fa84f7fd" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105">
              Pagar
            </a>
            <a href="https://wa.me/5214423643964" aria-label="Contáctanos por WhatsApp" className="text-gray-400 hover:text-green-500 transition-colors">
              💬
            </a>
            <a href="https://instagram.com/asociacionmexicanadebarberia" aria-label="Visita nuestro Instagram" className="text-gray-400 hover:text-pink-500 transition-colors">
              📸
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú de navegación"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="px-4 py-3 space-y-3">
            <EnrollmentModal>
              <button className="block w-full bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-center">
                Inscribirme
              </button>
            </EnrollmentModal>
            <a href="https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=141039576-ff609d72-4186-4497-b7c2-89d0fa84f7fd" className="block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center">
              Pagar
            </a>
            <a href="https://wa.me/5214423643964" className="block text-white py-2">💬 WhatsApp</a>
            <a href="https://instagram.com/asociacionmexicanadebarberia" className="block text-white py-2">📸 Instagram</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
    return (
      <section className="relative min-h-screen flex items-center justify-center text-white pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/images/location-image-171416640172.jpg" // Una imagen de respaldo mientras carga el video
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <div className="absolute inset-0 bg-black/60" /> {/* Overlay oscuro */}
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 z-10 relative animate-fade-in-up">
          <img
            src="/lovable-uploads/ae0a782f-1452-445a-a992-875f288b3932.png"
            alt="AMB Logo"
            className="w-64 mx-auto mb-8 object-contain"
          />
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight uppercase tracking-wider">
            Conviértete en Barbero Profesional desde Cero en Querétaro
          </h1>
          <div className="bg-black/30 rounded-xl p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📍</div>
              <div className="font-semibold font-heading">Curso presencial</div>
              <div className="text-gray-300">en Querétaro</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🧑‍🎓</div>
              <div className="font-semibold font-heading">Sin experiencia previa</div>
              <div className="text-gray-300">Empezamos desde cero</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✂️</div>
              <div className="font-semibold font-heading">Clases prácticas</div>
              <div className="text-gray-300">desde el primer día</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnrollmentModal>
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-transform hover:scale-105 font-heading uppercase">
                Inscribirme ahora
              </button>
            </EnrollmentModal>
            <a href="https://wa.me/5214423643964" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all hover:scale-105 font-heading uppercase">
              Hablar con asesor
            </a>
          </div>
        </div>
      </section>
    );
  }

function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wider">
          ¿Por qué elegir nuestro curso?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 transition-transform hover:scale-105 hover:border-yellow-400 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-heading">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
    return (
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-heading uppercase tracking-wider">
            Conoce Nuestra Escuela
          </h2>
          <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Fasociacionmexicanadebarberia%2Fvideos%2F2906440829675027%2F&show_text=false&width=560&t=0"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Video de la escuela de barbería AMB"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }

function InscriptionSection() {
  return (
    <section className="py-20 bg-yellow-400 text-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading uppercase tracking-wider">
          Inscripción de $2,000 MXN incluye:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl p-6 transition-transform hover:scale-105 animate-fade-in-up">
            <div className="text-4xl mb-4">👕</div>
            <h3 className="text-xl font-bold mb-2 font-heading">Mandil profesional de cuero</h3>
            <p className="text-gray-600">Valor $700 MXN incluido con tu inscripción</p>
          </div>
          <div className="bg-white rounded-xl p-6 transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-bold mb-2 font-heading">Manual digital y acceso online</h3>
            <p className="text-gray-600">Recibe todo el contenido siempre disponible</p>
          </div>
        </div>
        <EnrollmentModal>
          <button className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-transform hover:scale-105 font-heading uppercase">
            Apartar mi lugar
          </button>
        </EnrollmentModal>
      </div>
    </section>
  );
}

function LearningEnvironmentSection() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading uppercase tracking-wider">
          Ambiente de Aprendizaje Profesional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learningEnvironment.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-heading">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModalitiesSection() {
  return (
    <section className="py-20 bg-gray-100 text-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading uppercase tracking-wider">
          Modalidades de curso: Elige tu mejor horario
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modalities.map((modality, index) => (
            <div key={index} className="bg-yellow-100 rounded-xl p-6 text-center transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl mb-4">{modality.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-heading">{modality.title}</h3>
              <p className="text-gray-700">{modality.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading uppercase tracking-wider">
          Formas de Pago
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingOptions.map((option, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800 transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-800">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 font-heading">{option.title}</h3>
              <p className="text-gray-300 mb-4">{option.description}</p>
              <div className={`text-3xl font-bold mb-6 ${option.discount ? 'text-green-400' : 'text-white'}`}>
                {option.discount || option.price}
              </div>
              <EnrollmentModal defaultPaymentPlan={option.plan}>
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-transform hover:scale-105 block w-full font-heading uppercase">
                  Elegir plan
                </button>
              </EnrollmentModal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificatesSection() {
  return (
    <section className="py-20 bg-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-wider">
            Certificaciones Oficiales
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {certificates.map((cert, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <div className="flex flex-col flex-shrink-0 bg-gray-50 rounded-xl p-6 text-center border border-gray-200 w-full h-full transition-shadow hover:shadow-xl">
                    <div className="w-full h-40 mb-4 flex items-center justify-center">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="max-w-full max-h-full object-contain rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-bold mt-auto font-heading">{cert.name}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Al finalizar el curso recibirás <strong>múltiples certificaciones oficiales</strong> que te respaldan como barbero profesional
          </p>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
    const testimonials = [
      { name: "Juan Zamudio", text: "Entré sin saber ni cómo agarrar las máquinas. Hoy tengo mi propia barbería y trabajo por mi cuenta. Todo gracias a AMB", rating: 5, image: "/images/230308-carlos-flores-cs-7a4f1c.webp" },
      { name: "Marco Becerra", text: "Era guardia de seguridad. Trabajaba en casetas, con horarios inhumanos. Hoy soy barbero con clientes fijos y una vida diferente.", rating: 5, image: "/images/IMG_5113.JPG" },
      { name: "Estefanía Resendiz", text: "Soy estilista desde hace años, pero no sabía barbería. Aquí aprendí todo lo que me faltaba.", rating: 5, image: "/images/348s.jpg" },
      { name: "Luis Ochoa", text: "Estudié en otra escuela y no aprendí nada práctico. Me cambié a AMB y fue otra historia. Hoy vivo de esto.", rating: 5, image: "/images/location-image-171416640172.jpg" },
    ];
  
    return (
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading uppercase tracking-wider">
            Testimonios: De Principiantes a Profesionales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700 flex flex-col md:flex-row items-center transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <img src={testimonial.image} alt={`Testimonio de ${testimonial.name}`} className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6"/>
                <div>
                  <div className="flex items-center mb-4">
                    <div>
                      <div className="font-bold font-heading">{testimonial.name}</div>
                      <div className="text-yellow-400">{"⭐".repeat(testimonial.rating)}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  function GallerySection() {
    const galleryImages = [
      "/images/Imagen de WhatsApp 2025-05-26 a las 14.31.09_0019abd3.jpg",
      "/images/Imagen de WhatsApp 2025-05-26 a las 14.31.08_b411930b.jpg",
      "/images/IMG_5084.JPG",
    ];
  
    return (
      <section className="py-20 bg-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black font-heading uppercase tracking-wider">
            Nuestra Academia en Acción
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img src={image} alt={`Galería de la academia ${index + 1}`} className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  function MasterCoursesSection() {
    return (
      <section className="py-20 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading uppercase tracking-wider">
            Master Courses - Especializaciones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {masterCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-lg transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                 <div className="w-full h-40 mb-6 rounded-lg overflow-hidden bg-gray-200">
                    <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.desc}</p>
                <div className="text-2xl font-bold text-yellow-600 mb-4">{course.price}</div>
                <a href="https://wa.me/5214423643964" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-transform hover:scale-105 block font-heading uppercase">
                  Más información
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

function ContactSection() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading uppercase tracking-wider">
          Formulario de Contacto
        </h2>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
          <div className="text-center mt-8">
            <a
              href="https://wa.me/5214423643964"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-transform hover:scale-105 inline-block font-heading uppercase"
            >
              O contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialMediaSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 font-heading uppercase tracking-wider">
          Síguenos en Redes Sociales
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a href="https://instagram.com/asociacionmexicanadebarberia" aria-label="Visita nuestro Instagram" className="bg-gray-800 hover:bg-pink-600 text-white px-6 py-4 rounded-lg font-bold transition-all hover:scale-110">
            📸 Instagram
          </a>
          <a href="https://facebook.com/asociacionmexicanadebarberia" aria-label="Visita nuestro Facebook" className="bg-gray-800 hover:bg-blue-600 text-white px-6 py-4 rounded-lg font-bold transition-all hover:scale-110">
            📘 Facebook
          </a>
          <a href="https://maps.app.goo.gl/uXv7oY8bF9zJ7A6n8" target="_blank" rel="noopener noreferrer" aria-label="Encuéntranos en Google Maps" className="bg-gray-800 hover:bg-red-600 text-white px-6 py-4 rounded-lg font-bold transition-all hover:scale-110">
            📍 Google Maps
          </a>
          <a href="https://wa.me/5214423643964" aria-label="Contáctanos por WhatsApp" className="bg-gray-800 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-bold transition-all hover:scale-110">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading uppercase tracking-wider">
          Ubicación en el Corazón de Querétaro
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4 font-heading">
              Av. Tecnológico Sur #4A, Local 09, Centro.
            </h3>
            <p className="text-gray-300 mb-6">Querétaro, Qro. C.P. 76010</p>
            <a
              href="https://maps.app.goo.gl/uXv7oY8bF9zJ7A6n8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-transform hover:scale-105 inline-block font-heading uppercase"
            >
              Abrir en Google Maps
            </a>
          </div>
          <div className="w-full h-80 bg-gray-800 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14940.321398332156!2d-100.4039885871582!3d20.593170700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3451e5ff5406d%3A0x8919133f3893361!2sCentro%2C%2076000%20Santiago%20de%20Quer%C3%A9taro%2C%20Qro.!5e0!3m2!1sen!2smx!4v1722022030615!5m2!1sen!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación AMB Querétaro"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="w-16 h-16 flex items-center justify-center p-2">
              <img
                src="/lovable-uploads/ae0a782f-1452-445a-a992-875f288b3932.png"
                alt="AMB Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-lg font-heading">AMB</div>
              <div className="text-gray-300 text-sm">Asociación Mexicana de Barbería</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">MP</span>
            </div>
            <span className="font-bold text-center">Pago 100% seguro con Mercado Pago</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-300 mb-4">
              Tus datos están protegidos. Puedes pagar con tarjeta, débito, crédito o en efectivo.
            </p>
            <a
              href="https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=141039576-ff609d72-4186-4497-b7c2-89d0fa84f7fd"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-transform hover:scale-105 inline-block font-heading uppercase"
            >
              Pagar ahora con Mercado Pago
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Asociación Mexicana de Barbería (AMB). Todos los derechos reservados. Querétaro, México.
        </div>
      </div>
    </footer>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BenefitsSection />
      <VideoSection />
      <InscriptionSection />
      <LearningEnvironmentSection />
      <ModalitiesSection />
      <PricingSection />
      <CertificatesSection />
      <TestimonialsSection />
      <GallerySection />
      <MasterCoursesSection />
      <ContactSection />
      <SocialMediaSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;