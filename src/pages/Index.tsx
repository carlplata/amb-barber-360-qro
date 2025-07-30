import { useState } from "react";
import { Menu, X, Instagram, Facebook, MapPin, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

// URLs
const linktreeUrl = "https://linktree.ee/cursosamb";
const googleMapsUrl = "https://maps.app.goo.gl/9d1y5Z9d6X7s8c7C9";

// Componentes de Iconos Personalizados
const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 449.45 515.38" width="28" height="28" fill="currentColor" {...props}><path fillRule="nonzero" d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z"/></svg>
  );

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="28" height="28" fill="currentColor" {...props}><path d="M 25 2 C 12.3 2 2 12.3 2 25 C 2 29.1 3.1 32.899219 5 36.199219 L 2 46.699219 C 1.9 46.999219 1.9992187 47.399219 2.1992188 47.699219 C 2.4992187 47.999219 2.8992187 48 3.1992188 48 L 14.199219 45.300781 C 17.399219 47.000781 21.1 48 25 48 C 37.7 48 48 37.7 48 25 C 48 12.3 37.7 2 25 2 z M 25 4 C 36.6 4 46 13.4 46 25 C 46 36.6 36.6 46 25 46 C 21.3 46 17.800781 45.000781 14.800781 43.300781 C 14.600781 43.200781 14.299609 43.099219 14.099609 43.199219 L 4.5 45.599609 L 7 36.400391 C 7.1 36.100391 7.0003906 35.899609 6.9003906 35.599609 C 5.1003906 32.499609 4 28.9 4 25 C 4 13.4 13.4 4 25 4 z M 18.113281 12.988281 C 17.925781 12.975781 17.800781 13 17.800781 13 L 16.599609 13 C 15.999609 13 15.100781 13.2 14.300781 14 C 13.800781 14.5 12 16.3 12 19.5 C 12 22.9 14.299609 25.799609 14.599609 26.099609 C 14.599609 26.099609 15 26.600781 15.5 27.300781 C 16 28.000781 16.699609 28.800781 17.599609 29.800781 C 19.399609 31.700781 21.899609 33.899219 25.099609 35.199219 C 26.499609 35.799219 27.699609 36.2 28.599609 36.5 C 30.199609 37 31.700781 36.900781 32.800781 36.800781 C 33.600781 36.700781 34.500391 36.299219 35.400391 35.699219 C 36.300391 35.099219 37.199609 34.400391 37.599609 33.400391 C 37.899609 32.600391 37.999609 31.900781 38.099609 31.300781 L 38.099609 30.5 C 38.099609 30.2 38.000781 30.200781 37.800781 29.800781 C 37.300781 29.000781 36.799219 29.000781 36.199219 28.800781 C 35.899219 28.600781 34.999219 28.200781 34.199219 27.800781 C 33.299219 27.400781 32.599609 27.000781 32.099609 26.800781 C 31.799609 26.700781 31.400391 26.499609 30.900391 26.599609 C 30.400391 26.699609 29.899609 27 29.599609 27.5 C 29.299609 27.9 28.200781 29.299219 27.800781 29.699219 L 27.699219 29.599609 C 27.299219 29.399609 26.7 29.200781 26 28.800781 C 25.2 28.400781 24.299219 27.800781 23.199219 26.800781 C 21.599219 25.400781 20.499219 23.699609 20.199219 23.099609 C 20.499219 22.699609 20.899609 22.3 21.099609 22 C 21.199609 21.9 21.280859 21.799219 21.349609 21.699219 C 21.418359 21.599219 21.475391 21.500391 21.525391 21.400391 C 21.625391 21.200391 21.700781 21.000781 21.800781 20.800781 C 22.200781 20.100781 22.000781 19.300391 21.800781 18.900391 C 21.800781 18.900391 21.7 18.600781 21.5 18.300781 C 21.4 18.000781 21.2 17.499609 21 17.099609 C 20.6 16.199609 20.2 15.199609 20 14.599609 C 19.7 13.899609 19.300781 13.399219 18.800781 13.199219 C 18.550781 13.049219 18.300781 13.000781 18.113281 12.988281 z M 16.599609 15 L 17.699219 15 L 17.900391 15 C 17.900391 15 17.999609 15.100391 18.099609 15.400391 C 18.299609 16.000391 18.799609 17.000391 19.099609 17.900391 C 19.299609 18.300391 19.499609 18.799609 19.599609 19.099609 C 19.699609 19.399609 19.800391 19.600781 19.900391 19.800781 C 19.900391 19.900781 20 19.900391 20 19.900391 C 19.8 20.300391 19.8 20.399219 19.5 20.699219 C 19.2 21.099219 18.799219 21.499219 18.699219 21.699219 C 18.599219 21.899219 18.299609 22.1 18.099609 22.5 C 17.899609 22.9 18.000781 23.599609 18.300781 24.099609 C 18.700781 24.699609 19.900781 26.700391 21.800781 28.400391 C 23.000781 29.500391 24.1 30.199609 25 30.599609 C 25.9 31.099609 26.600781 31.300391 26.800781 31.400391 C 27.200781 31.600391 27.599609 31.699219 28.099609 31.699219 C 28.599609 31.699219 29.000781 31.3 29.300781 31 C 29.700781 30.6 30.699219 29.399609 31.199219 28.599609 L 31.400391 28.699219 C 31.400391 28.699219 31.699609 28.8 32.099609 29 C 32.499609 29.2 32.900391 29.399609 33.400391 29.599609 C 34.300391 29.999609 35.100391 30.399609 35.400391 30.599609 L 36 30.900391 L 36 31.199219 C 36 31.599219 35.899219 32.200781 35.699219 32.800781 C 35.599219 33.100781 35.000391 33.699609 34.400391 34.099609 C 33.700391 34.499609 32.899609 34.800391 32.599609 34.900391 C 31.699609 35.000391 30.600781 35.099219 29.300781 34.699219 C 28.500781 34.399219 27.4 34.1 26 33.5 C 23.2 32.3 20.899219 30.3 19.199219 28.5 C 18.399219 27.6 17.699219 26.799219 17.199219 26.199219 C 16.699219 25.599219 16.500781 25.2 16.300781 25 C 15.900781 24.6 14 21.999609 14 19.599609 C 14 17.099609 15.200781 16.100391 15.800781 15.400391 C 16.100781 15.000391 16.499609 15 16.599609 15 z" /></svg>
  );

// Resto de los componentes y la página
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
            <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-transform hover:scale-105">
              Inscribirme
            </a>
            <a href="https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=141039576-ff609d72-4186-4497-b7c2-89d0fa84f7fd" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105">
              Pagar
            </a>
            <a href="https://wa.me/5214423643964" target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp" className="text-gray-400 hover:text-green-500 transition-colors">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/asociacionmexicanadebarberia" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Instagram" className="text-gray-400 hover:text-pink-500 transition-colors">
              <Instagram size={24} />
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
            <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-center">
              Inscribirme
            </a>
            <a href="https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=141039576-ff609d72-4186-4497-b7c2-89d0fa84f7fd" target="_blank" rel="noopener noreferrer" className="block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center">
              Pagar
            </a>
            <a href="https://wa.me/5214423643964" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white py-2"><WhatsAppIcon className="w-5 h-5" /> WhatsApp</a>
            <a href="https://instagram.com/asociacionmexicanadebarberia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white py-2"><Instagram size={20} /> Instagram</a>
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
            poster="/images/location-image-171416640172.jpg"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <div className="absolute inset-0 bg-black/60" />
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
            <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-transform hover:scale-105 font-heading uppercase">
              Inscribirme ahora
            </a>
            <a href="https://wa.me/5214423643964" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all hover:scale-105 font-heading uppercase">
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
        <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-transform hover:scale-105 font-heading uppercase inline-block">
          Apartar mi lugar
        </a>
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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-heading uppercase tracking-wider">
            Modalidades de curso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modalities.map((modality, index) => (
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

function PricingSection() {
    const createWhatsAppLink = (planTitle: string) => {
        const message = `Hola, me interesa el plan ${planTitle} para el curso de barbería 360. ¿Qué horarios hay disponibles?`;
        return `https://wa.me/5214423643964?text=${encodeURIComponent(message)}`;
      };

    return (
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading uppercase tracking-wider">
            Formas de Pago
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingOptions.map((option, index) => (
              <div key={index} className="relative bg-gray-900 rounded-xl p-6 text-center border border-gray-800 transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-bold">Más Popular</Badge>
                )}
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
                <a href={createWhatsAppLink(option.title)} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-transform hover:scale-105 block w-full font-heading uppercase">
                    Elegir plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

function CertificatesSection() {
    const certificateList = [
      "Barbicide® (2 certificados)",
      "AMB",
      "Carlos Slim",
      "Amos Academy – Barbering Essentials",
    ];

    return (
      <section className="py-20 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-wider">
              Certificaciones Oficiales
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {certificateList.map((cert, index) => (
              <div key={index} className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
                <span className="text-lg">{cert}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Al finalizar, recibirás <strong>múltiples certificaciones oficiales</strong> que te respaldan como un barbero profesional de élite.
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
  
function ReadyToStartSection() {
    return (
      <section className="py-20 bg-yellow-500 text-black">
        <div className="max-w-4xl mx-auto px-4 text-center bg-black/80 text-white rounded-xl shadow-2xl p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading uppercase tracking-wider">
            🚀 ¿Qué necesitas para empezar?
          </h2>
          <div className="space-y-4 text-xl mb-10">
            <p>🚫 No necesitas experiencia</p>
            <p>⏳ No necesitas esperar el momento perfecto</p>
            <p className="font-bold text-yellow-400">✅ Solo necesitas dar el primer paso</p>
          </div>
          <h3 className="text-2xl font-bold mb-4 font-heading uppercase tracking-wider">
            📣 Inscríbete hoy en Querétaro
          </h3>
          <p className="text-lg mb-6 text-gray-300">
            🟨 Aparta tu lugar desde $2,000 MXN y recibe tu kit profesional
          </p>
          <a href="https://wa.me/5214423643964" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-transform hover:scale-105 font-heading uppercase inline-flex items-center gap-2">
            <WhatsAppIcon className="w-6 h-6" />
            Habla con un asesor
          </a>
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
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading uppercase tracking-wider">
            💼 Cursos Master (Avanzados)
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Disponible después de terminar Barbería 360°. En ocasiones especiales puedes cursarlos como extras dentro de tu curso.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {masterCourses.map((course, index) => (
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.902316402283!2d-100.39525368453458!3d20.59259280720474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3454b63364c7b%3A0x4705553038381813!2sAMB%20(Asociaci%C3%B3n%20Mexicana%20de%20Barber%C3%ADa)!5e0!3m2!1ses-419!2smx!4v1689280049449!5m2!1ses-419!2smx2"
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
      <ReadyToStartSection />
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