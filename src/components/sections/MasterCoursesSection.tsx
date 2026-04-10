import { masterCourses, linktreeUrl } from "@/data/landing-page";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export function MasterCoursesSection() {
    return (
        <section id="master-courses" className="py-12 sm:py-20 bg-neutral-900 text-white relative">
            <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-5 pointer-events-none"></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-heading uppercase tracking-wider gradient-text">
                    💼 Cursos Master (Avanzados)
                </h2>
                <p className="text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base max-w-2xl mx-auto">
                    Disponible después de terminar Barbería 360°. En ocasiones especiales puedes cursarlos como extras dentro de tu curso.
                </p>
                <Carousel opts={{ align: "start", loop: true }} className="w-full">
                    <CarouselContent className="-ml-4">
                        {masterCourses.map((course, index) => (
                            <CarouselItem key={index} className="pl-4 basis-10/12 sm:basis-1/2 md:basis-1/3">
                                <div className="bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-700 shadow-lg h-full flex flex-col hover:border-yellow-400/50 transition-colors duration-300">
                                    <div className="w-full h-32 sm:h-40 mb-3 sm:mb-6 rounded-lg overflow-hidden bg-gray-700 flex-shrink-0 relative group">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                    <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">{course.icon}</div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 font-heading">{course.title}</h3>
                                    <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="mt-auto bg-yellow-400 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-yellow-300 transition-transform hover:scale-105 block font-heading uppercase shadow-lg shadow-yellow-400/20">
                                        Más información
                                    </a>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </section>
    );
}
