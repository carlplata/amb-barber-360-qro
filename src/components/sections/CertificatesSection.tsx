import { certificates } from "@/data/landing-page";

export function CertificatesSection() {
    return (
        <section id="certificates" className="py-12 sm:py-24 bg-neutral-950 text-white relative overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 opacity-80 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="font-heading font-black uppercase tracking-wider gradient-text mb-4">
                        Certificaciones Oficiales
                    </h2>
                    <p className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto font-light">
                        Tu carrera respaldada por los líderes de la industria.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center p-4 w-[45%] sm:w-[30%] lg:w-[18%] aspect-square sm:aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 w-full h-1/2 flex items-center justify-center mb-3">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="relative z-10 text-xs sm:text-sm font-semibold text-center text-gray-500 group-hover:text-white transition-colors duration-300 font-heading leading-tight px-1">
                                {cert.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
