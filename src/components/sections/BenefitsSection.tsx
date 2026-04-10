import { benefits } from "@/data/landing-page";

export function BenefitsSection() {
    return (
        <section id="benefits" className="py-12 sm:py-24 bg-gradient-dark text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
            <div className="relative max-w-7xl mx-auto px-4">
                <h2 className="font-heading font-black text-center mb-8 sm:mb-20 uppercase tracking-wider gradient-text animate-glow text-2xl sm:text-4xl">
                    ¿Por qué elegir nuestro curso?
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="h-full card-modern card-interactive bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm text-center border border-primary/20 group animate-fade-in-up flex flex-col items-center justify-center p-3 sm:p-6 rounded-xl hover:bg-neutral-800/50 transition-all">
                            <div className="text-3xl sm:text-5xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                            <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-3 font-heading gradient-text leading-tight">{benefit.title}</h3>
                            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
