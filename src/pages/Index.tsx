import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

// --- Componentes de Sección ---

function HeroSection() {
  return (
    <section className="relative h-screen bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('/images/barber-chair-791535_1280.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center p-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading uppercase tracking-widest">
          The Barber's House Academy
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-light">
          Formando a la nueva generación de barberos profesionales
        </p>
        <a href="https://wa.me/5214423643964" className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-transform hover:scale-105 inline-block font-heading uppercase">
          Inscríbete ahora
        </a>
      </div>
    </section>
  );
}

function LearningEnvironmentSection() {
  const learningEnvironment = [
    { icon: "👨‍🏫", title: "Profesores activos", desc: "Barberos profesionales trabajando en el sector" },
    { icon: "👥", title: "Grupos pequeños", desc: "Máximo 15 estudiantes por grupo para atención personalizada" },
    { icon: "💇‍♂️", title: "Práctica real con clientes", desc: "Desde la primera semana trabajas con clientes reales" },
  ];

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

function CoursesSection() {
  const courses = [
      { title: "Curso de Barbería Profesional", duration: "3 Meses", desc: "Conviértete en barbero profesional desde cero.", image: "/images/barber-4912626_1280.jpg" },
      { title: "Curso Intensivo de Fin de Semana", duration: "Intensivo", desc: "Aprende lo esencial en un formato acelerado.", image: "/images/man-791783_1280.jpg" },
  ];

  return (
    <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading uppercase tracking-wider">
                Nuestros Cursos Principales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {courses.map((course, index) => (
                    <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="w-full h-64 bg-gray-700">
                           <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 font-heading">{course.title}</h3>
                            <p className="text-yellow-400 mb-4 font-semibold">{course.duration}</p>
                            <p className="text-gray-300 mb-6">{course.desc}</p>
                            <a href="https://wa.me/5214423643964" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-transform hover:scale-105 block text-center font-heading uppercase">
                                Quiero Inscribirme
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

function MasterCoursesSection() {
  const masterCourses = [
      { title: "Colorimetría Avanzada", desc: "Domina las técnicas de color profesional", image: "/images/colorimetria.jpg" },
      { title: "Corte a Tijera", desc: "Perfecciona el arte del corte clásico", image: "/images/5c0fe394-6cb2-46cb-80ce-8c0c26f04975.png" },
      { title: "Fades Profesionales", desc: "Técnicas avanzadas de degradados", image: "/images/fades.png" },
      { title: "Barbería Clásica", desc: "Técnicas tradicionales de barbería", image: "/images/barber-5428008_1280.jpg" },
  ];

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

function TestimonialsSection() {
  const testimonials = [
      { name: "Carlos M.", text: "La mejor decisión de mi vida. Aprendí más en 3 meses que en años de práctica por mi cuenta. Los profesores son unos cracks.", image:"/images/man-1282208_1280.jpg" },
      { name: "Javier G.", text: "Gracias a la academia ahora tengo mi propia barbería. La práctica con clientes reales desde el inicio es clave.", image: "/images/barber-4219905_1280.jpg" },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading uppercase tracking-wider">
          Lo que dicen nuestros alumnos
        </h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400"/>
              <div className="text-center md:text-left">
                <p className="italic text-gray-300">"{testimonial.text}"</p>
                <p className="font-bold text-yellow-400 mt-4">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
    return (
      <section className="py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading uppercase tracking-wider">
                Encuéntranos
            </h2>
            <p className="text-lg text-gray-600 mb-8">
                Av. Universidad 242, El Carrizal, 76030 Santiago de Querétaro, Qro.
            </p>
            <div className="w-full h-96 rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.903823730335!2d-100.39572568453458!3d20.59165398622998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3455b5a5b5b5b%3A0x5f5f5f5f5f5f5f5f!2sThe%20Barber's%20House%20Academy!5e0!3m2!1ses-419!2smx!4v1627882835265!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Ubicación de The Barber's House Academy"
                ></iframe>
            </div>
        </div>
      </section>
    );
}

function Footer() {
    return (
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="font-heading text-xl mb-4">The Barber's House Academy</p>
            <div className="flex justify-center space-x-6 mb-6">
                <a href="https://wa.me/5214423643964" className="text-2xl hover:text-yellow-400 transition-colors"><FaWhatsapp /></a>
                <a href="https://www.instagram.com/thebarbershouse.academy/" className="text-2xl hover:text-yellow-400 transition-colors"><FaInstagram /></a>
                <a href="https://www.facebook.com/thebarbershouse.academy" className="text-2xl hover:text-yellow-400 transition-colors"><FaFacebook /></a>
            </div>
            <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} The Barber's House Academy. Todos los derechos reservados.
            </p>
        </div>
      </footer>
    );
}


// --- Página Principal ---

export default function IndexPage() {
  return (
    <div className="bg-black">
      {/* Header Placeholder - se podría añadir un nav bar fijo si se desea */}
      <main>
        <HeroSection />
        <LearningEnvironmentSection />
        <CoursesSection />
        <MasterCoursesSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}