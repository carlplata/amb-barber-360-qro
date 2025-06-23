
import { useState } from "react";
import { Menu, X, MapPin, Clock, Award, Phone } from "lucide-react";

const benefits = [
  { icon: "✂️", title: "25 clases prácticas", description: "Aprende con práctica real" },
  { icon: "🧑‍🏫", title: "Profesores activos", description: "Barberos profesionales" },
  { icon: "🏅", title: "5 certificaciones", description: "Reconocimiento oficial" },
  { icon: "💼", title: "Bolsa de trabajo", description: "Oportunidades laborales" },
  { icon: "📦", title: "Precio de distribución", description: "En productos y máquinas de por vida" },
  { icon: "📍", title: "Ubicación céntrica Qro.", description: "Fácil acceso en la ciudad" },
];

const pricingOptions = [
  { title: "Por clase", description: "Paga clase por clase", price: "Flexible", discount: "" },
  { title: "Quincenal", description: "Ahorra pagando cada 15 días", price: "8%", discount: "-8%" },
  { title: "Mensual", description: "Ahorra con pago mensual", price: "14%", discount: "-14%" },
  { title: "Curso completo", description: "Máximo ahorro", price: "20%", discount: "-20%" },
];

const testimonials = [
  { name: "Juan Zamudio", text: "Entré sin saber ni cómo agarrar las máquinas. Hoy tengo mi propia barbería y trabajo por mi cuenta. Todo gracias a AMB", rating: 5 },
  { name: "Marco Becerra", text: "Era guardia de seguridad. Trabajaba en casetas, con horarios inhumanos. Hoy soy barbero con clientes fijos y una vida diferente.", rating: 5 },
  { name: "Estefanía Resendiz", text: "Soy estilista desde hace años, pero no sabía barbería. Aquí aprendí todo lo que me faltaba.", rating: 5 },
  { name: "Luis Ochoa", text: "Estudié en otra escuela y no aprendí nada práctico. Me cambié a AMB y fue otra historia. Hoy vivo de esto.", rating: 5 },
];

const modalities = [
  { icon: "🕒", title: "Matutino", desc: "Lunes y miércoles 9am-12pm" },
  { icon: "🌆", title: "Vespertino", desc: "Martes y jueves 4pm-7pm" },
  { icon: "🗓️", title: "Sabatino", desc: "Sábados 10am-2pm" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black">
              AMB
            </div>
            <span className="text-white font-semibold">Barbería 360°</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/5214423643964" className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Inscribirme
            </a>
            <a href="https://wa.me/5214423643964" className="text-white hover:text-yellow-400 transition-colors">
              💬
            </a>
            <a href="https://instagram.com/asociacionmexicanadebarberia" className="text-white hover:text-yellow-400 transition-colors">
              📸
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="px-4 py-3 space-y-3">
            <a href="https://wa.me/5214423643964" className="block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-center">
              Inscribirme
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white pt-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="w-32 h-32 bg-yellow-400 rounded-full mx-auto mb-8 flex items-center justify-center">
          <span className="text-4xl font-bold text-black">AMB</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Conviértete en Barbero Profesional desde Cero en Querétaro
        </h1>
        
        <div className="bg-black/30 rounded-xl p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">📍</div>
            <div className="font-semibold">Curso presencial</div>
            <div className="text-gray-300">en Querétaro</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🧑‍🎓</div>
            <div className="font-semibold">Sin experiencia previa</div>
            <div className="text-gray-300">Empezamos desde cero</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">✂️</div>
            <div className="font-semibold">Clases prácticas</div>
            <div className="text-gray-300">desde el primer día</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/5214423643964" className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
            Inscribirme ahora
          </a>
          <a href="https://wa.me/5214423643964" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-colors">
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          ¿Por qué elegir nuestro curso de barbería en Querétaro?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InscriptionSection() {
  return (
    <section className="py-20 bg-yellow-400 text-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Inscripción de $2,000 MXN incluye:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl p-6">
            <div className="text-4xl mb-4">👕</div>
            <h3 className="text-xl font-bold mb-2">Mandil profesional de cuero</h3>
            <p className="text-gray-600">Valor $700 MXN incluido con tu inscripción</p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-bold mb-2">Manual digital y acceso online</h3>
            <p className="text-gray-600">Recibe todo el contenido siempre disponible</p>
          </div>
        </div>
        <a href="https://wa.me/5214423643964" className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors">
          Apartar mi lugar
        </a>
      </div>
    </section>
  );
}

function ModalitiesSection() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Modalidades de curso: Elige tu mejor horario
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modalities.map((modality, index) => (
            <div key={index} className="bg-yellow-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">{modality.icon}</div>
              <h3 className="text-xl font-bold mb-2">{modality.title}</h3>
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Planes de Pago Flexibles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingOptions.map((option, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800">
              <h3 className="text-xl font-bold mb-4">{option.title}</h3>
              <p className="text-gray-300 mb-4">{option.description}</p>
              <div className={`text-3xl font-bold mb-6 ${option.discount ? 'text-green-400' : 'text-white'}`}>
                {option.discount || option.price}
              </div>
              <a href="https://wa.me/5214423643964" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors block">
                Elegir plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Graduados AMB: De Principiantes a Profesionales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-yellow-400">{"⭐".repeat(testimonial.rating)}</div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          ¿Tienes dudas? Contáctanos
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              name="message"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
          <div className="text-center mt-8">
            <a
              href="https://wa.me/5214423643964"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors inline-block"
            >
              O contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Nuestra Ubicación en el Corazón de Querétaro
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4">
              Av. Tecnológico Sur #4A, Local 09, Centro.
            </h3>
            <p className="text-gray-300 mb-6">Querétaro, Qro. C.P. 76010</p>
            <a
              href="https://maps.app.goo.gl/XjwuYZqwMxEongrY8"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-block"
            >
              Abrir en Google Maps
            </a>
          </div>
          <div className="w-full h-64 bg-gray-800 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.537545084013!2d-100.39177128468488!3d20.588306986271432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d346dd3e7b47cf%3A0xcad2c66fbaabfb2d!2sAv%20Tecnol%C3%B3gico%20Sur%204A%2C%20Centro%20Sur%2C%2076010%20Santiago%20de%20Quer%C3%A9taro%2C%20Qro.!5e0!3m2!1ses!2smx!4v1718760000000!5m2!1ses!2smx"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">MP</span>
            </div>
            <span className="font-bold">Pago 100% seguro con Mercado Pago</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-300 mb-4">
              Tus datos están protegidos. Puedes pagar con tarjeta, débito, crédito o en efectivo.
            </p>
            <a
              href="https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=141039576-ff609d72-4186-4497-b7c2-89d0fa84f7fd"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-block"
            >
              Pagar ahora con Mercado Pago
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
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
      <InscriptionSection />
      <ModalitiesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
