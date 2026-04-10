import { useState } from "react";
import { pricingOptions, modalities, whatsappBaseUrl } from "@/data/landing-page";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Check, Gift, Info, ZoomIn } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { motion, AnimatePresence } from "framer-motion";

export function PricingSection() {
    const [selectedModality, setSelectedModality] = useState(0); // 0 = 3 meses, 1 = 6 meses

    const createWhatsAppLink = (planTitle: string) => {
        const modalityName = selectedModality === 0 ? "3 Meses (Intensivo)" : "6 Meses (Sabatino)";
        const message = `¡Hola! Vi la tabla de precios y me interesa el plan de *${planTitle}* para la modalidad de *${modalityName}*. ¿Cómo puedo apartar mi lugar?`;
        return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
    };

    const inclusions = [
        { title: "Mandil de Cuero", desc: "Uniforme oficial AMB" },
        { title: "Manual Técnico", desc: "Guía paso a paso" },
        { title: "Membresía Vitalicia", desc: "Precios de costo en herramienta" }
    ];

    return (
        <section id="pricing" className="py-12 sm:py-24 bg-neutral-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-5 pointer-events-none"></div>
            
            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="font-heading font-bold text-2xl sm:text-5xl mb-4 uppercase tracking-wide sm:tracking-wider gradient-text">
                        Planes de Inversión
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Selecciona tu modalidad y elige el plan que mejor se adapte a tu ritmo.
                    </p>
                </div>

                {/* MODALITY SELECTOR (TABS) */}
                <div className="flex p-1.5 bg-neutral-800/50 backdrop-blur-sm rounded-2xl w-full max-w-lg mx-auto mb-10 border border-white/5">
                    {modalities.map((modality, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedModality(index)}
                            className={`flex-1 py-3 px-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                                selectedModality === index 
                                ? "bg-primary text-black shadow-glow-sm" 
                                : "text-neutral-400 hover:text-white"
                            }`}
                        >
                            <span className="text-lg">{modality.icon}</span>
                            {modality.title.split('(')[0]}
                        </button>
                    ))}
                </div>

                {/* MAIN CONTENT AREA */}
                <div className="space-y-8">
                    {/* PRICING TABLE IMAGE */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedModality}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-800 shadow-2xl"
                        >
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="w-full group relative block">
                                        <img
                                            src={modalities[selectedModality].priceImage}
                                            alt={`Tabla de precios ${modalities[selectedModality].title}`}
                                            className="w-full max-h-[60vh] object-contain object-top cursor-zoom-in group-hover:brightness-90 transition-all duration-300"
                                            loading="eager"
                                        />
                                        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ZoomIn className="w-3.5 h-3.5" />
                                            Ver completa
                                        </div>
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-2">
                                    <img
                                        src={modalities[selectedModality].priceImage}
                                        alt={`Tabla de precios ${modalities[selectedModality].title}`}
                                        className="w-full h-auto object-contain"
                                    />
                                </DialogContent>
                            </Dialog>

                            <div className="absolute top-4 right-4 hidden sm:block pointer-events-none">
                                <Badge className="bg-black/60 backdrop-blur-md border-white/20 text-white py-2 px-4 shadow-xl">
                                    <Info className="w-4 h-4 mr-2 text-primary" />
                                    Tabla Oficial Actualizada
                                </Badge>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* VIP INCLUSIONS BANNER - FIXES IMAGE DEFECT */}
                    <div className="bg-gradient-to-r from-amber-500/10 via-primary/20 to-amber-500/10 border border-primary/30 rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-primary text-black rounded-xl shadow-glow-sm">
                                    <Gift className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                                    ¡Tu Inscripción lo incluye TODO!
                                </h3>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {inclusions.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="mt-1 bg-primary/20 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white leading-tight">{item.title}</p>
                                            <p className="text-neutral-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6 text-xs sm:text-sm text-neutral-400 italic flex items-center gap-2">
                                <Info className="w-4 h-4" />
                                *El uniforme, manual y membresía están incluidos en todos nuestros planes.
                            </p>
                        </div>
                    </div>

                    {/* SEGMENTED WHATSAPP BUTTONS */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {pricingOptions.map((option, index) => (
                            <a
                                key={index}
                                href={createWhatsAppLink(option.title)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                                    option.popular 
                                    ? "bg-primary border-primary text-black shadow-glow" 
                                    : "bg-neutral-800/50 border-white/10 text-white hover:border-primary/50"
                                }`}
                            >
                                <span className={`text-xs uppercase tracking-tighter font-bold mb-1 ${option.popular ? 'text-black/60' : 'text-primary'}`}>
                                    {option.discount ? `Ahorra ${option.discount.replace('-','')}` : 'Acceso Inmediato'}
                                </span>
                                <div className="flex items-center gap-1.5 mb-1">
                                    <span className="font-bold text-sm sm:text-base leading-tight text-center">{option.title}</span>
                                    <WhatsAppIcon className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:scale-110 transition-transform ${option.popular ? 'text-black/70' : 'text-green-400'}`} />
                                </div>
                                {option.popular && (
                                    <span className="text-xs bg-black/10 px-2 py-0.5 rounded-full font-bold">
                                        RECOMENDADO ⭐
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                    
                    <p className="text-center text-neutral-500 text-xs mt-4">
                        Al dar clic serás redirigido a WhatsApp para hablar con un asesor.
                    </p>
                </div>
            </div>
        </section>
    );
}
