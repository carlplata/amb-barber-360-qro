import { useState, useEffect } from "react";
import { linktreeUrl, userSegments } from "@/data/landing-page";
import { pixelTrackers } from "@/lib/pixel";
import { UserSegmentsSection } from "@/components/sections/UserSegmentsSection";

interface HeroProps {
    selectedId: string | null;
    onSelect: (id: string | null) => void;
}

export function Hero({ selectedId, onSelect }: HeroProps) {
    // State is now managed by parent

    // Auto-scroll to title on selection change (for mobile feedback loop)
    useEffect(() => {
        if (selectedId) {
            const heroElement = document.getElementById("hero-title-container");
            if (heroElement) {
                // Introvert scroll: only if we are significantly scrolled down
                const rect = heroElement.getBoundingClientRect();
                if (rect.top < 0 || rect.bottom > window.innerHeight) {
                    heroElement.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }
        }
    }, [selectedId]);

    const activeSegment = selectedId ? userSegments.find(s => s.id === selectedId) : null;

    const headline = activeSegment
        ? activeSegment.heroHeadline
        : "Conviértete en Barbero Profesional desde Cero en Querétaro";

    const subheadline = activeSegment
        ? activeSegment.heroSubheadline
        : "El curso más completo con 5 certificaciones oficiales y 90% de práctica real.";

    const ctaText = activeSegment ? activeSegment.cta : "Agenda Clase Muestra";
    const ctaLink = activeSegment ? activeSegment.ctaUrl : linktreeUrl;

    // Determine if the link is internal (anchor) or external
    const isInternalLink = ctaLink.startsWith("#");
    const linkAttributes = isInternalLink
        ? {}
        : { target: "_blank", rel: "noopener noreferrer" };

    const handlePrimaryClick = () => {
        if (isInternalLink) {
            pixelTrackers.trackCTA("hero", `scroll_to_${ctaLink}`);
        } else {
            if (ctaLink.includes("linktr.ee")) {
                pixelTrackers.trackLinktree("hero_primary");
            }
            pixelTrackers.trackWhatsApp("hero", ctaText);
        }
    };

    return (
        <section id="hero" className="relative min-h-fit sm:min-h-screen flex items-center justify-center text-white pt-24 pb-12 overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onPlay={() => pixelTrackers.trackVideoPlay("Hero Background")}
                    className="w-full h-full object-cover opacity-80 grayscale-[10%]"
                >
                    <source src="/videos/hero-background.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
                <div className="absolute inset-0 bg-neutral-950/60" />
            </div>

            <div className="max-w-6xl mx-auto text-center px-4 z-10 relative animate-fade-in-up flex flex-col items-center">
                {/* Logo Section */}
                <img
                    src="/lovable-uploads/ae0a782f-1452-445a-a992-875f288b3932.png"
                    alt="AMB Logo"
                    className="w-24 sm:w-40 md:w-48 lg:w-56 mx-auto mb-6 sm:mb-8 object-contain animate-bounce-in opacity-90 drop-shadow-2xl"
                />

                {/* Dynamic Text Section */}
                <div id="hero-title-container" className="w-full max-w-[95vw] sm:max-w-5xl mx-auto transition-all duration-500 min-h-[100px] sm:min-h-[200px] flex flex-col justify-center px-2">
                    <h1 key={selectedId + "-h1"} className="font-heading font-black mb-4 leading-[1.1] uppercase tracking-wider gradient-platinum break-words whitespace-normal drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                        {headline}
                    </h1>
                    <p key={selectedId + "-p"} className="text-gray-100 text-base sm:text-lg md:text-xl font-light mb-6 max-w-2xl mx-auto animate-fade-in px-4 tracking-wide leading-relaxed drop-shadow-md">
                        {subheadline}
                    </p>
                </div>

                {/* Dynamic Segmentation Grid */}
                <div className="w-full max-w-5xl mb-8">
                    <UserSegmentsSection onSelect={onSelect} selectedId={selectedId} />
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto mt-4">
                    <a href={ctaLink} {...linkAttributes} onClick={handlePrimaryClick} className="w-full sm:w-auto btn-primary h-12 text-base shadow-xl hover:shadow-2xl text-center whitespace-nowrap">
                        {ctaText}
                    </a>
                    <a href="https://wa.me/5214423643964" target="_blank" rel="noopener noreferrer" onClick={() => pixelTrackers.trackWhatsApp("hero", "Hablar con asesor")} className="w-full sm:w-auto btn-outline h-12 text-base text-center whitespace-nowrap">
                        Hablar con asesor
                    </a>
                </div>
            </div>
        </section>
    );
}
