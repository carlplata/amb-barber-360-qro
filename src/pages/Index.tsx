import { useState } from "react";
import { Menu, X, Instagram, Facebook, MapPin, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { TiktokIcon } from "@/components/icons/TiktokIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

// --- DATOS DE LA APLICACIÓN ---
const benefits = [
  { icon: "✂️", title: "25 clases prácticas", description: "Aprende con práctica real" },
  { icon: "🧑‍🏫", title: "Profesores activos", description: "Barberos profesionales" },
  { icon: "🏅", title: "5 certificaciones", description: "Reconocimiento oficial" },
  { icon: "💼", title: "Bolsa de trabajo", description: "Oportunidades laborales" },
  { icon: "📦", title: "Precio de distribución", description: "En productos y máquinas de por vida" },
  { icon: "📍", title: "Ubicación céntrica Qro.", description: "Fácil acceso en la ciudad" },
];

const pricingOptions = [
    { title: "Por clase", description: "Paga clase por clase", price: "Flexible", discount: "", image: "/images/pago por clase.jpg", plan: "por-clase", popular: false },
    { title: "Quincenal", description: "Ahorra pagando cada 15 días", price: "8%", discount: "-8%", image: "/images/pago por quincena.jpg", plan: "quincenal", popular: false },
    { title: "Mensual", description: "Ahorra con pago mensual", price: "14%", discount: "-14%", image: "/images/pago mensual.jpg", plan: "mensual", popular: false },
    { title: "Curso completo", description: "Máximo ahorro", price: "20%", discount: "-20%", image: "/images/curso completo.jpg", plan: "curso-completo", popular: true },
];

const certificates = [
  { name: "Barbicide", image: "/lovable-uploads/92910c3a-9ab9-4040-81b7-2400bf55429f.png" },
  { name: "Barbicide Certification", image: "/lovable-uploads/1dd4286a-901c-4cba-9e53-53d06179454d.png" },
  { name: "AMB Certificación Oficial", image: "/lovable-uploads/bd1b84e7-cb19-4084-a1b4-daae1f7deba9.png" },
  { name: "Amos Academy", image: "/lovable-uploads/ed4fd92b-1021-4a93-a841-12eeaaee8ffd.png" },
  { name: "Fundación Carlos Slim", image: "/lovable-uploads/056b97e0-40b6-4bec-8dd9-a6452668c10b.png" },
];

const modalities = [
    { icon: "🚀", title: "3 Meses", desc: "Dos clases por semana (lunes y miércoles o martes y jueves)." },
    { icon: "🏆", title: "6 Meses", desc: "Una clase por semana (sábados o domingos)." },
];

const learningEnvironment = [
  { icon: "👨‍🏫", title: "Profesores activos", desc: "Barberos profesionales trabajando en el sector" },
  { icon: "👥", title: "Grupos pequeños", desc: "Máximo 15 estudiantes por grupo para atención personalizada" },
  { icon: "💇‍♂️", title: "Práctica real con clientes", desc: "Desde la primera semana trabajas con clientes reales" },
];

const masterCourses = [
    { title: "Colorimetría Masculina", icon: "🎨", image: "/images/colorimetria.jpg" },
    { title: "Corte a Tijera y Textura", icon: "✂️", image: "/images/5c0fe394-6cb2-46cb-80ce-8c0c26f04975.png" },
    { title: "Fades Modernos", icon: "🔥", image: "/images/fades.png" },
];

const certificateList = [
    "Barbicide® (2 certificados)",
    "AMB",
    "Carlos Slim",
    "Amos Academy – Barbering Essentials",
  ];

// URLs
const linktreeUrl = "https://linktr.ee/cursosamb";
const googleMapsUrl = "https://maps.app.goo.gl/9d1y5Z9d6X7s8c7C9";

// --- COMPONENTES DE LA PÁGINA ---
const Index = () => {
    return (
        <div className="min-h-screen bg-black">
          <Navbar />
          <Hero />
          <BenefitsSection benefitsData={benefits} />
          <VideoSection />
          <InscriptionSection />
          <LearningEnvironmentSection environmentData={learningEnvironment} />
          <ModalitiesSection modalitiesData={modalities} />
          <PricingSection pricingData={pricingOptions} />
          <CertificatesSection certificatesData={certificates} />
          <TestimonialsSection />
          <ReadyToStartSection />
          <GallerySection />
          <MasterCoursesSection coursesData={masterCourses} />
          <ContactSection />
          <SocialMediaSection />
          <LocationSection />
          <Footer />
        </div>
      );
    };

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-1">
              <img
                src="/lovable-uploads/ae0a782f-1452-445a-a992-875f288b3932.png"
                alt="AMB Logo"
                className="w-full h-full object-contain animate-glow"
              />
            </div>
            <span className="text-white font-heading font-bold uppercase tracking-wider text-base sm:text-lg gradient-text">Barbería 360°</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 text-base font-bold">
              Inscribirme
            </a>
            <a href="https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=141039576-ff609d72-4186-4497-b7c2-89d0fa84f7fd" target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 py-3 text-base font-bold text-white">
              Pagar
            </a>
            <a href="https://wa.me/5214423643964" target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp" className="text-gray-300 hover:text-green-400 transition-all p-3 hover:bg-green-500/20 rounded-xl hover:scale-110">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/asociacionmexicanadebarberia" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Instagram" className="text-gray-300 hover:text-pink-400 transition-all p-3 hover:bg-pink-500/20 rounded-xl hover:scale-110">
              <Instagram size={24} />
            </a>
          </div>

          <button
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú de navegación"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800 shadow-xl">
          <div className="px-4 py-4 space-y-3">
            <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-3 rounded-lg font-semibold text-center hover:from-yellow-300 hover:to-yellow-400 transition-all">
              Inscribirme
            </a>
            <a href="https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=141039576-ff609d72-4186-4497-b7c2-89d0fa84f7fd" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-blue-500 hover:to-blue-600 transition-all">
              Pagar
            </a>
            <div className="flex justify-center space-x-6 pt-2">
              <a href="https://wa.me/5214423643964" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors py-2">
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp
              </a>
              <a href="https://instagram.com/asociacionmexicanadebarberia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors py-2">
                <Instagram size={20} /> Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
    return (
      <section className="relative min-h-screen flex items-center justify-center text-white pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="max-w-5xl mx-auto text-center px-4 z-10 relative animate-fade-in-up">
          <img
            src="/lovable-uploads/ae0a782f-1452-445a-a992-875f288b3932.png"
            alt="AMB Logo"
            className="w-52 sm:w-60 md:w-72 mx-auto mb-8 sm:mb-10 object-contain animate-bounce-in"
          />
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight uppercase tracking-wider bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent animate-glow">
            Conviértete en Barbero Profesional desde Cero en Querétaro
          </h1>
          <div className="glass-effect rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border border-white/30 shadow-elegant">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 group-hover:animate-bounce">📍</div>
              <div className="font-bold font-heading text-base sm:text-lg text-primary">Curso presencial</div>
              <div className="text-gray-200 text-sm sm:text-base">en Querétaro</div>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 group-hover:animate-bounce">🧑‍🎓</div>
              <div className="font-bold font-heading text-base sm:text-lg text-primary">Sin experiencia previa</div>
              <div className="text-gray-200 text-sm sm:text-base">Empezamos desde cero</div>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 group-hover:animate-bounce">✂️</div>
              <div className="font-bold font-heading text-base sm:text-lg text-primary">Clases prácticas</div>
              <div className="text-gray-200 text-sm sm:text-base">desde el primer día</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto btn-primary px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-black uppercase">
              Inscribirme ahora
            </a>
            <a href="https://wa.me/5214423643964" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto btn-outline px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-black uppercase text-white border-white hover:bg-white hover:text-black">
              Hablar con asesor
            </a>
          </div>
        </div>
      </section>
    );
  }

function BenefitsSection({ benefitsData }: { benefitsData: typeof benefits }) {
  return (
    <section className="py-20 sm:py-24 bg-gradient-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-center mb-16 sm:mb-20 uppercase tracking-wider gradient-text animate-glow">
          ¿Por qué elegir nuestro curso?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="card-modern bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm text-center border border-primary/20 hover:border-primary/60 group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="text-4xl sm:text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 font-heading gradient-text">{benefit.title}</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{benefit.description}</p>
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
    <section className="py-20 sm:py-24 bg-gradient-primary text-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.1),transparent_50%)]" />
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12 font-heading uppercase tracking-wider text-secondary animate-glow">
          Inscripción de $2,000 MXN incluye:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-12">
          <div className="card-modern bg-white/95 backdrop-blur-md border border-white/60 group hover:scale-105 animate-fade-in-up">
            <div className="text-4xl sm:text-5xl mb-6 group-hover:animate-bounce">👕</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 font-heading text-secondary">Mandil profesional de cuero</h3>
            <p className="text-gray-700 text-base sm:text-lg">Valor $700 MXN incluido con tu inscripción</p>
          </div>
          <div className="card-modern bg-white/95 backdrop-blur-md border border-white/60 group hover:scale-105 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="text-4xl sm:text-5xl mb-6 group-hover:animate-bounce">📖</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 font-heading text-secondary">Manual digital y acceso online</h3>
            <p className="text-gray-700 text-base sm:text-lg">Recibe todo el contenido siempre disponible</p>
          </div>
        </div>
        <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-4 text-xl font-black uppercase text-white shadow-elegant">
          Apartar mi lugar
        </a>
      </div>
    </section>
  );
}

function LearningEnvironmentSection({ environmentData }: { environmentData: typeof learningEnvironment }) {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading uppercase tracking-wider">
          Ambiente de Aprendizaje Profesional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {environmentData.map((item, index) => (
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

function ModalitiesSection({ modalitiesData }: { modalitiesData: typeof modalities }) {
    return (
      <section className="py-20 bg-gray-100 text-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-heading uppercase tracking-wider">
            Modalidades de curso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modalitiesData.map((modality, index) => (
              <div key={index} className="bg-yellow-100 rounded-xl p-6 text-center transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">{modality.icon}</div>
                <h3 className="text-xl font-bold mb-2 font-heading">{modality.title}</h3>
                <p className="text-gray-700">{modality.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 mb-6">
              🎯 Ambos cursos constan de 25 clases 100% prácticas, en Querétaro<br/>
              ⏱️ Tú eliges el ritmo: entre semana o fines de semana
            </p>
            <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-transform hover:scale-105 font-heading uppercase inline-block">
                Consultar horarios disponibles
            </a>
          </div>
        </div>
      </section>
    );
  }

function PricingSection({ pricingData }: { pricingData: typeof pricingOptions }) {
    const createWhatsAppLink = (planTitle: string) => {
        const message = `Hola, me interesa el plan ${planTitle} para el curso de barbería 360. ¿Qué horarios hay disponibles?`;
        return `https://wa.me/5214423643964?text=${encodeURIComponent(message)}`;
      };

    return (
      <section className="py-16 sm:py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 font-heading uppercase tracking-wider bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Formas de Pago
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pricingData.map((option, index) => (
              <div key={index} className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 sm:p-6 text-center border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold border-0 px-3 py-1 text-xs sm:text-sm">Más Popular</Badge>
                )}
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-lg overflow-hidden bg-gray-800 border border-gray-600">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-heading text-yellow-400">{option.title}</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{option.description}</p>
                <div className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${option.discount ? 'text-green-400' : 'text-white'}`}>
                  {option.discount || option.price}
                </div>
                <a href={createWhatsAppLink(option.title)} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all hover:scale-105 hover:shadow-lg block w-full font-heading uppercase text-sm sm:text-base">
                    Elegir plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

function CertificatesSection({ certificatesData }: { certificatesData: typeof certificates }) {
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
              {certificatesData.map((cert, index) => (
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
  
function ReadyToStartSection() {
    return (
      <section className="py-20 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="bg-black/90 backdrop-blur-sm text-white rounded-2xl shadow-2xl p-12 border border-yellow-400/30 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm">
              ⚡ ÚLTIMO PASO HACIA TU NUEVA CARRERA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 font-heading uppercase tracking-wider bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              🚀 ¿Qué necesitas para empezar?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/50 hover:border-yellow-400/50 transition-all">
                <div className="text-5xl mb-4">🚫</div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Sin experiencia</h3>
                <p className="text-gray-300">No necesitas saber nada de barbería</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/50 hover:border-yellow-400/50 transition-all">
                <div className="text-5xl mb-4">⏳</div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Sin esperas</h3>
                <p className="text-gray-300">No necesitas esperar el momento perfecto</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-xl p-6 border border-yellow-400/50">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Solo decisión</h3>
                <p className="text-white font-semibold">Dar el primer paso</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-xl p-8 mb-8 border border-yellow-400/30">
              <h3 className="text-3xl font-bold mb-4 font-heading uppercase tracking-wider text-yellow-400">
                📣 Inscríbete hoy en Querétaro
              </h3>
              <p className="text-xl mb-6 text-gray-200">
                🟨 Aparta tu lugar desde <span className="text-yellow-400 font-bold">$2,000 MXN</span> y recibe tu kit profesional
              </p>
            </div>
            <a href="https://wa.me/5214423643964" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 font-heading uppercase inline-flex items-center gap-3">
              <WhatsAppIcon className="w-7 h-7" />
              Habla con un asesor
            </a>
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
  
  function MasterCoursesSection({ coursesData }: { coursesData: typeof masterCourses }) {
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading uppercase tracking-wider">
            💼 Cursos Master (Avanzados)
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Disponible después de terminar Barbería 360°. En ocasiones especiales puedes cursarlos como extras dentro de tu curso.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coursesData.map((course, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 shadow-lg transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                 <div className="w-full h-40 mb-6 rounded-lg overflow-hidden bg-gray-700">
                    <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold mb-4 font-heading">{course.title}</h3>
                <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-transform hover:scale-105 block font-heading uppercase">
                  Inscribirme
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
              target="_blank" rel="noopener noreferrer"
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
          <div className="flex justify-center items-center gap-8">
            <a href="https://instagram.com/asociacionmexicanadebarberia" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Instagram" className="text-gray-400 hover:text-pink-500 transition-transform hover:scale-125">
              <Instagram size={32} />
            </a>
            <a href="https://facebook.com/asociacionmexicanadebarberia" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Facebook" className="text-gray-400 hover:text-blue-600 transition-transform hover:scale-125">
              <Facebook size={32} />
            </a>
            <a href="https://www.tiktok.com/@escueladebarberiaamb" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro TikTok" className="text-gray-400 hover:text-white transition-transform hover:scale-125">
              <TiktokIcon />
            </a>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Encuéntranos en Google Maps" className="text-gray-400 hover:text-red-500 transition-transform hover:scale-125">
              <MapPin size={32} />
            </a>
            <a href="https://wa.me/5214423643964" target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp" className="text-gray-400 hover:text-green-500 transition-transform hover:scale-125">
              <WhatsAppIcon className="w-8 h-8" />
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
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-transform hover:scale-105 inline-block font-heading uppercase"
            >
              Abrir en Google Maps
            </a>
          </div>
          <div className="w-full h-80 bg-gray-800 rounded-xl overflow-hidden">
            <iframe
                src="https://maps.app.goo.gl/u5f5k5f5f5f5f5f55"
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
              target="_blank"
              rel="noopener noreferrer"
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

export default Index;