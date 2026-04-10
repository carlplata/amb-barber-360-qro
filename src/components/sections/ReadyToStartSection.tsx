import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappBaseUrl } from "@/data/landing-page";
import { trackLead } from "@/lib/pixel";

const items = [
    { icon: "🚫", label: "Sin experiencia", desc: "Empezamos desde cero absoluto" },
    { icon: "⏳", label: "Sin esperas", desc: "Nuevos grupos abriendo constantemente" },
    { icon: "✅", label: "Solo tu decisión", desc: "El primer paso es lo único que necesitas" },
];

export function ReadyToStartSection() {
    return (
        <section className="py-12 sm:py-16 bg-neutral-950 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                    ⚡ ¿Qué necesitas para empezar?
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-6 my-6 sm:my-8">
                    {items.map((item) => (
                        <div key={item.label} className="bg-neutral-900 border border-white/10 rounded-xl p-4 sm:p-6 flex flex-row xs:flex-col sm:flex-col items-center gap-3 xs:gap-2 sm:gap-2">
                            <span className="text-3xl sm:text-4xl flex-shrink-0">{item.icon}</span>
                            <div className="text-left xs:text-center sm:text-center">
                                <p className="font-bold text-yellow-400 text-sm sm:text-base font-heading">{item.label}</p>
                                <p className="text-gray-400 text-xs sm:text-sm leading-tight">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <a
                    href={`${whatsappBaseUrl}?text=${encodeURIComponent("Hola, quisiera solicitar una Clase Muestra")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackLead}
                    className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg transition-all hover:scale-105 font-heading uppercase shadow-lg shadow-green-500/20"
                >
                    <WhatsAppIcon className="w-6 h-6" />
                    Solicitar Clase Muestra
                </a>
                <p className="mt-3 text-neutral-500 text-xs">Sin compromiso — te invitamos a conocer la escuela</p>
            </div>
        </section>
    );
}
