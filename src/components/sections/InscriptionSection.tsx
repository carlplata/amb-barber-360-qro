import { linktreeUrl, whatsappBaseUrl } from "@/data/landing-page";
import { trackLead } from "@/lib/pixel";

export function InscriptionSection() {
    return (
        <section id="inscription" className="py-12 sm:py-24 bg-neutral-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,193,7,0.05),transparent_50%)]" />
            <div className="relative max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-12 font-heading uppercase tracking-wider text-white animate-glow">
                    ¡TODO INCLUIDO! <br />
                    <span className="text-xl sm:text-3xl gradient-text">Tu Inscripción de $2,000 MXN te da:</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto mb-8 sm:mb-12">
                    {/* Item 1 */}
                    <div className="bg-neutral-900/50 border border-white/10 rounded-xl p-4 flex items-center sm:flex-col sm:text-center text-left gap-4 backdrop-blur-sm hover:bg-white/5 transition-colors">
                        <div className="text-3xl sm:text-5xl sm:mb-4 bg-neutral-800 p-2 sm:p-0 rounded-lg sm:rounded-none">👕</div>
                        <div>
                            <h3 className="text-base sm:text-xl font-bold font-heading text-primary">Mandil de Cuero</h3>
                            <div className="flex flex-col sm:block">
                                <span className="text-white font-bold text-xs sm:text-base tracking-wide bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full sm:bg-transparent sm:text-white sm:p-0 inline-block w-fit">Ahorras $700</span>
                                <span className="text-neutral-500 text-[10px] sm:text-sm sm:mt-1 hidden sm:block">(Ya incluido)</span>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-neutral-900/50 border border-white/10 rounded-xl p-4 flex items-center sm:flex-col sm:text-center text-left gap-4 backdrop-blur-sm hover:bg-white/5 transition-colors">
                        <div className="text-3xl sm:text-5xl sm:mb-4 bg-neutral-800 p-2 sm:p-0 rounded-lg sm:rounded-none">📖</div>
                        <div>
                            <h3 className="text-base sm:text-xl font-bold font-heading text-primary">Manual Físico</h3>
                            <div className="flex flex-col sm:block">
                                <span className="text-white font-bold text-xs sm:text-base tracking-wide bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full sm:bg-transparent sm:text-white sm:p-0 inline-block w-fit">Ahorras $250</span>
                                <span className="text-neutral-500 text-[10px] sm:text-sm sm:mt-1 hidden sm:block">(Ya incluido)</span>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-neutral-900/50 border border-white/10 rounded-xl p-4 flex items-center sm:flex-col sm:text-center text-left gap-4 backdrop-blur-sm hover:bg-white/5 transition-colors">
                        <div className="text-3xl sm:text-5xl sm:mb-4 bg-neutral-800 p-2 sm:p-0 rounded-lg sm:rounded-none">🛒</div>
                        <div>
                            <h3 className="text-base sm:text-xl font-bold font-heading text-primary">Precios Distribuidor</h3>
                            <div className="flex flex-col sm:block">
                                <span className="text-white font-bold text-xs sm:text-base tracking-wide bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full sm:bg-transparent sm:text-white sm:p-0 inline-block w-fit">De por vida</span>
                                <span className="text-neutral-500 text-[10px] sm:text-sm sm:mt-1 hidden sm:block">Gana más margen</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 sm:mb-6">
                    <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" onClick={trackLead} className="btn-primary px-8 py-4 sm:px-12 sm:py-5 text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto text-center">
                        ¡QUIERO MI LUGAR!
                    </a>
                    <a
                        href={`${whatsappBaseUrl}?text=${encodeURIComponent("Hola, quisiera solicitar una Clase Muestra para conocer la escuela")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackLead}
                        className="btn-outline px-8 py-4 sm:py-5 text-base sm:text-lg w-full sm:w-auto text-center"
                    >
                        🎓 Solicitar Clase Muestra
                    </a>
                </div>
                <p className="text-neutral-400 text-xs sm:text-sm font-medium animate-fade-in">
                    Únete a más de <span className="font-bold text-primary">500 egresados</span> exitosos en Querétaro
                </p>
            </div>
        </section>
    );
}
