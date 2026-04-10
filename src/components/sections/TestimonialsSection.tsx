import { useMemo } from "react";
import { testimonials } from "@/data/landing-page";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface TestimonialsSectionProps {
    selectedId?: string | null;
}

export function TestimonialsSection({ selectedId }: TestimonialsSectionProps) {
    const sortedTestimonials = useMemo(() => [...testimonials].sort((a, b) => {
        if (!selectedId) return 0;
        const aMatch = a.segments?.includes(selectedId);
        const bMatch = b.segments?.includes(selectedId);
        if (aMatch && !bMatch) return -1;
        if (!aMatch && bMatch) return 1;
        return 0;
    }), [selectedId]);

    return (
        <section className="py-12 sm:py-20 bg-neutral-950 text-white transition-all duration-500 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 opacity-80"></div>
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <h2 className="font-heading font-bold text-center mb-10 sm:mb-16 uppercase tracking-wider gradient-text">
                    Testimonios: De Principiantes a Profesionales
                </h2>
                <Carousel opts={{ align: "start", loop: true }} className="w-full">
                    <CarouselContent className="-ml-4">
                        {sortedTestimonials.map((testimonial, index) => {
                            const isRelevant = selectedId && testimonial.segments?.includes(selectedId);

                            return (
                                <CarouselItem key={index} className="pl-4 basis-11/12 md:basis-1/2">
                                    <div className={`
                                        h-full card-modern card-interactive bg-gray-900/95 flex flex-col md:flex-row items-center p-5
                                        ${isRelevant ? "border-yellow-400 shadow-[0_0_15px_rgba(255,215,0,0.15)] scale-[1.02]" : "border-primary/20"}
                                    `}>
                                        <img src={testimonial.image} alt={`Testimonio de ${testimonial.name}`} className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover mb-3 md:mb-0 md:mr-6 border-2 border-yellow-400/50" />
                                        <div>
                                            <div className="mb-2 text-center md:text-left">
                                                <div className="font-bold font-heading text-white flex items-center justify-center md:justify-start gap-2 text-base sm:text-lg">
                                                    {testimonial.name}
                                                    {isRelevant && <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full font-bold">Recomendado</span>}
                                                </div>
                                                <div className="text-yellow-400 text-xs sm:text-sm">{"⭐".repeat(testimonial.rating)}</div>
                                            </div>
                                            <p className="text-gray-200 italic text-sm text-center md:text-left">"{testimonial.text}"</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-4" />
                    <CarouselNext className="hidden md:flex -right-4" />
                </Carousel>
            </div>
        </section>
    );
}
