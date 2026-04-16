import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappBaseUrl } from "@/data/landing-page";
import { pixelTrackers } from "@/lib/pixel";

export function StickyCTA() {
    return (
        <div className="fixed bottom-4 right-4 left-4 z-50 md:hidden animate-fade-in-up">
            <a
                href={`${whatsappBaseUrl}?text=${encodeURIComponent("Hola, quisiera más información sobre el curso de barbería")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pixelTrackers.trackWhatsApp("sticky_cta", "Pedir Informes")}
        className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all transform hover:scale-105"
            >
                <WhatsAppIcon className="w-6 h-6" />
                <span>Pedir Informes</span>
            </a>
        </div>
    );
}
