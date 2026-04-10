import { useMemo } from "react";
import { galleryImages } from "@/data/landing-page";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function GallerySection() {
    const autoplay = useMemo(() => Autoplay({ delay: 3000 }), []);

    return (
        <section id="gallery" className="py-12 sm:py-20 bg-gray-200">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16 text-black font-heading uppercase tracking-wider">
                    Nuestra Academia en Acción
                </h2>
                <Carousel
                    opts={{ align: "start", loop: true }}
                    plugins={[autoplay]}
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        {galleryImages.map((image, index) => (
                            <CarouselItem key={index} className="pl-4 basis-11/12 md:basis-1/2 lg:basis-1/3">
                                <div className="rounded-lg overflow-hidden shadow-lg h-52 sm:h-64 md:h-80 relative group">
                                    <img
                                        src={image}
                                        alt={`Estudiantes en la mejor escuela de barbería en Querétaro - AMB ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12" />
                    <CarouselNext className="hidden md:flex -right-12" />
                </Carousel>
            </div>
        </section>
    );
}
