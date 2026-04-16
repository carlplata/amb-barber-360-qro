import { Video, MapPin } from "lucide-react";
import { googleMapsUrl } from "@/data/landing-page";
import { pixelTrackers } from "@/lib/pixel";

export function LocationSection() {
    return (
        <section id="location" className="py-8 sm:py-20 bg-neutral-900 text-white relative overflow-hidden">
            {/* Background Map Effect (Optional) */}
            <div className="absolute inset-0 bg-[url('/images/map-bg-pattern.png')] opacity-5 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

                    {/* Text Content - Compacted */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 text-yellow-400 mb-2 justify-center lg:justify-start">
                            <MapPin className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">Ubicación Premium</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-bold font-heading uppercase tracking-tight mb-2 sm:mb-4">
                            En el Corazón de Querétaro
                        </h2>
                        <h3 className="text-lg sm:text-2xl text-gray-200 font-medium mb-1">
                            Av. Tecnológico Sur #4A, Centro
                        </h3>
                        <p className="text-gray-400 text-sm mb-6">CP 76010 • Centro Histórico de Querétaro</p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-stretch sm:items-center">
                            <a
                                href="https://wa.me/5214423643964?text=Hola,%20quisiera%20agendar%20una%20videollamada%20para%20conocer%20la%20escuela"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => pixelTrackers.trackWhatsApp("location_section", "Agendar Videollamada")}
                                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <Video className="w-5 h-5 animate-pulse" />
                                <span>Agendar Videollamada</span>
                            </a>
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => pixelTrackers.trackLocation("google_maps")}
                                className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center justify-center"
                            >
                                Ver en Mapa
                            </a>
                        </div>
                        <p className="mt-3 text-xs text-gray-500">
                            ¿Lejos de Querétaro? Te damos el tour virtual.
                        </p>
                    </div>

                    {/* Map - Compacted Height */}
                    <div className="w-full h-48 sm:h-80 lg:h-96 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10 order-1 lg:order-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867.2!2d-100.3951756!3d20.5900508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35ad46819eb6d%3A0x62913506148a0dd3!2sAMB%20Barberia%20360!5e0!3m2!1ses!2smx!4v1707490000000!5m2!1ses!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación AMB Querétaro"
                            className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
