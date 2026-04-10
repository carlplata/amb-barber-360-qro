import { learningEnvironment } from "@/data/landing-page";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function LearningEnvironmentSection() {
    return (
        <section id="learning-environment" className="py-20 bg-white text-black overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-heading uppercase tracking-wider">
                    Ambiente de Aprendizaje Profesional
                </h2>
                <Carousel
                    opts={{ align: "start", loop: true }}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    plugins={[Autoplay({ delay: 3500 }) as any]}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        {learningEnvironment.map((item, index) => (
                            <CarouselItem key={index} className="pl-4 basis-11/12 md:basis-1/2 lg:basis-1/3">
                                <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200 h-full flex flex-col items-center justify-center shadow-lg transition-transform hover:scale-105">
                                    <div className="text-6xl mb-6 transform transition-transform hover:rotate-12">{item.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 font-heading text-primary">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
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
