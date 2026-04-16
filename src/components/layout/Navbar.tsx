import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { linktreeUrl } from "@/data/landing-page";
import { pixelTrackers } from "@/lib/pixel";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 shadow-elegant">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    <Link to="/" className="flex items-center space-x-2 sm:space-x-4 hover:opacity-80 transition-opacity" onClick={() => { window.scrollTo(0, 0); pixelTrackers.trackCTA("navbar", "Logo Home"); }}>
                        <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center p-1">
                            <img
                                src="/lovable-uploads/ae0a782f-1452-445a-a992-875f288b3932.png"
                                alt="AMB Logo"
                                className="w-full h-full object-contain animate-glow"
                            />
                        </div>
                        <span className="text-white font-heading font-bold uppercase tracking-wider text-sm sm:text-base lg:text-lg gradient-text truncate max-w-[160px] xs:max-w-none sm:max-w-none">BARBERIA 360° QRO</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-3">
                        <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" onClick={() => pixelTrackers.trackLinktree("navbar")} className="btn-primary px-4 py-2.5 whitespace-nowrap">
                            Ver Cursos
                        </a>
                        <a href="https://wa.me/5214423643964?text=Hola,%20quisiera%20agendar%20una%20Clase%20Muestra%20gratis" target="_blank" rel="noopener noreferrer" onClick={() => pixelTrackers.trackWhatsApp("navbar", "🎁 Clase Muestra")} className="btn-secondary px-4 py-2.5 whitespace-nowrap">
                            🎁 Clase Muestra
                        </a>
                        <a href="https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=141039576-ff609d72-4186-4497-b7c2-89d0fa84f7fd" target="_blank" rel="noopener noreferrer" onClick={() => pixelTrackers.trackCTA("navbar", "Pagar MercadoPago")} className="btn-glass px-4 py-2.5 whitespace-nowrap">
                            Pagar
                        </a>
                        <div className="flex items-center space-x-1 pl-2 border-l border-white/10 ml-1">
                            <a href="https://wa.me/5214423643964" target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp" onClick={() => pixelTrackers.trackWhatsApp("navbar", "Icon WhatsApp")} className="text-gray-400 hover:text-green-400 transition-all p-2.5 hover:bg-green-500/10 rounded-full">
                                <WhatsAppIcon className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com/asociacionmexicanadebarberia" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Instagram" onClick={() => pixelTrackers.trackCTA("navbar", "Icon Instagram")} className="text-gray-400 hover:text-pink-400 transition-all p-2.5 hover:bg-pink-500/10 rounded-full">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <button
                        className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Abrir menú de navegación"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full h-[calc(100vh-4rem)] bg-black z-50 overflow-y-auto border-t border-white/10 px-6 pb-6">
                    <div className="flex flex-col h-full justify-center items-center space-y-6">

                        <div className="flex flex-col space-y-4 w-full text-center">
                            <Link to="/" className="text-white font-heading font-black uppercase tracking-widest text-2xl active:text-primary transition-colors" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); pixelTrackers.trackCTA("navbar_mobile", "Inicio"); }}>
                                Inicio
                            </Link>
                            <a href="#modalities" className="text-gray-300 font-heading font-bold uppercase tracking-widest text-xl active:text-white transition-colors" onClick={() => { setIsOpen(false); pixelTrackers.trackCTA("navbar_mobile", "Horarios"); }}>
                                Horarios
                            </a>
                            <a href="#pricing" className="text-gray-300 font-heading font-bold uppercase tracking-widest text-xl active:text-white transition-colors" onClick={() => { setIsOpen(false); pixelTrackers.trackCTA("navbar_mobile", "Precios"); }}>
                                Precios
                            </a>
                            <a href="#certificates" className="text-gray-400 font-heading font-bold uppercase tracking-widest text-lg active:text-white transition-colors" onClick={() => { setIsOpen(false); pixelTrackers.trackCTA("navbar_mobile", "Certificaciones"); }}>
                                Certificaciones
                            </a>
                            <a href="#location" className="text-gray-400 font-heading font-bold uppercase tracking-widest text-lg active:text-white transition-colors" onClick={() => { setIsOpen(false); pixelTrackers.trackCTA("navbar_mobile", "Ubicación"); }}>
                                Ubicación
                            </a>
                        </div>

                        <div className="w-full max-w-xs space-y-3">
                            <a href="https://wa.me/5214423643964?text=Hola,%20quisiera%20agendar%20una%20Clase%20Muestra%20gratis" target="_blank" onClick={() => pixelTrackers.trackWhatsApp("navbar_mobile", "🎁 Clase Muestra")} className="btn-primary w-full h-12 flex items-center justify-center text-lg">
                                🎁 Clase Muestra
                            </a>
                            <a href={linktreeUrl} target="_blank" onClick={() => pixelTrackers.trackLinktree("navbar_mobile")} className="btn-glass w-full h-12 flex items-center justify-center text-base">
                                📅 Ver Disponibilidad
                            </a>
                        </div>

                        <div className="flex space-x-8 pt-2 justify-center">
                            <a href="https://wa.me/5214423643964" aria-label="WhatsApp" onClick={() => pixelTrackers.trackWhatsApp("navbar_mobile", "Icon WhatsApp")} className="p-3 bg-green-500/10 rounded-full hover:bg-green-500/20 transition-all">
                                <WhatsAppIcon className="w-6 h-6 text-green-400" />
                            </a>
                            <a href="https://instagram.com/asociacionmexicanadebarberia" aria-label="Instagram" onClick={() => pixelTrackers.trackCTA("navbar_mobile", "Icon Instagram")} className="p-3 bg-pink-500/10 rounded-full hover:bg-pink-500/20 transition-all">
                                <Instagram size={24} className="text-pink-400" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
