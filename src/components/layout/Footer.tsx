import { Instagram, Facebook, MapPin, Phone, Clock, ExternalLink, ChevronRight, ChevronDown } from "lucide-react";
import { TiktokIcon } from "@/components/icons/TiktokIcon";
import { googleMapsUrl } from "@/data/landing-page";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { pixelTrackers } from "@/lib/pixel";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-neutral-950 text-white pt-12 sm:pt-24 pb-8 sm:pb-12 overflow-hidden font-sans">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white/5 to-transparent opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 sm:mb-16">

                    {/* Brand Column (Always Visible) */}
                    <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start space-x-3">
                            <div className="w-32 sm:w-48 h-auto p-2">
                                <img
                                    src="/images/logo-white.png"
                                    alt="AMB Asociación Mexicana de Barbería"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                            Formando a la próxima generación de barberos de élite. La escuela con mayor prestigio en Querétaro.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start space-x-3 pt-2">
                            <SocialButton href="https://instagram.com/asociacionmexicanadebarberia" icon={<Instagram size={18} />} label="Instagram" />
                            <SocialButton href="https://facebook.com/asociacionmexicanadebarberia" icon={<Facebook size={18} />} label="Facebook" />
                            <SocialButton href="https://www.tiktok.com/@escueladebarberiaamb" icon={<TiktokIcon width="18" height="18" />} label="TikTok" />
                        </div>
                    </div>

                    {/* Mobile Accordion Wrapper for Columns */}
                    <div className="lg:col-span-8 lg:grid lg:grid-cols-8 lg:gap-8 block">
                        <Accordion type="single" collapsible className="w-full lg:hidden space-y-2">
                            {/* Explore */}
                            <AccordionItem value="explore" className="border-b border-white/10">
                                <AccordionTrigger className="text-base font-bold py-3 hover:text-primary hover:no-underline">
                                    Explorar
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-3 pl-2 pb-4">
                                        <FooterLink href="#hero">Inicio</FooterLink>
                                        <FooterLink href="#beneficios">Beneficios</FooterLink>
                                        <FooterLink href="#cursos">Cursos</FooterLink>
                                        <FooterLink href="#testimonios">Testimonios</FooterLink>
                                        <FooterLink href="#faq">Preguntas Frecuentes</FooterLink>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Contact */}
                            <AccordionItem value="contact" className="border-b border-white/10">
                                <AccordionTrigger className="text-base font-bold py-3 hover:text-primary hover:no-underline">
                                    Contacto
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-4 pl-2 pb-4">
                                        <li className="flex items-start space-x-3 group">
                                            <MapPin className="text-amber-500 mt-1 flex-shrink-0" size={16} />
                                            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-sm hover:text-white transition-colors">
                                                Av. Tecnológico Sur #4A, Local 09,<br />Col. Centro, Querétaro, Qro.
                                            </a>
                                        </li>
                                        <li className="flex items-center space-x-3 group">
                                            <Phone className="text-amber-500 flex-shrink-0" size={16} />
                                            <a href="tel:+524423643964" className="text-neutral-400 text-sm hover:text-white transition-colors">
                                                +52 (442) 364 3964
                                            </a>
                                        </li>
                                        <li className="flex items-center space-x-3 group">
                                            <Clock className="text-amber-500 flex-shrink-0" size={16} />
                                            <span className="text-neutral-400 text-sm">
                                                Lun - Vie: 10am - 7pm<br />Sáb - Dom: 8am - 4pm
                                            </span>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Payment */}
                            <AccordionItem value="payment" className="border-b-0">
                                <AccordionTrigger className="text-base font-bold py-3 hover:text-primary hover:no-underline">
                                    Inscripción Segura
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="bg-neutral-900/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm mt-2">
                                        <PaymentContent />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {/* Desktop Columns (Hidden on Mobile) */}
                        <div className="hidden lg:block lg:col-span-2 space-y-6">
                            <h4 className="font-heading font-bold text-lg text-white">Explorar</h4>
                            <ul className="space-y-3">
                                <FooterLink href="#hero">Inicio</FooterLink>
                                <FooterLink href="#beneficios">Beneficios</FooterLink>
                                <FooterLink href="#cursos">Cursos</FooterLink>
                                <FooterLink href="#testimonios">Testimonios</FooterLink>
                                <FooterLink href="#faq">Preguntas Frecuentes</FooterLink>
                            </ul>
                        </div>

                        <div className="hidden lg:block lg:col-span-3 space-y-6">
                            <h4 className="font-heading font-bold text-lg text-white">Contacto</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3 group">
                                    <MapPin className="text-amber-500 mt-1 flex-shrink-0 group-hover:text-amber-400 transition-colors" size={18} />
                                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-sm hover:text-white transition-colors leading-relaxed">
                                        Av. Tecnológico Sur #4A, Local 09,<br />Col. Centro, Querétaro, Qro.
                                    </a>
                                </li>
                                <li className="flex items-center space-x-3 group">
                                    <Phone className="text-amber-500 flex-shrink-0 group-hover:text-amber-400 transition-colors" size={18} />
                                    <a href="tel:+524423643964" className="text-neutral-400 text-sm hover:text-white transition-colors">
                                        +52 (442) 364 3964
                                    </a>
                                </li>
                                <li className="flex items-center space-x-3 group">
                                    <Clock className="text-amber-500 flex-shrink-0 group-hover:text-amber-400 transition-colors" size={18} />
                                    <span className="text-neutral-400 text-sm">
                                        Lun - Vie: 10am - 7pm<br />Sáb - Dom: 8am - 4pm
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="hidden lg:block lg:col-span-3 space-y-6">
                            <h4 className="font-heading font-bold text-lg text-white">Inscripción Segura</h4>
                            <div className="bg-neutral-900/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
                                <PaymentContent />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-neutral-600 text-xs">
                        © {currentYear} Asociación Mexicana de Barbería. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-neutral-600 text-xs hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="text-neutral-600 text-xs hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function PaymentContent() {
    return (
        <>
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <img
                        src="/images/mercadopago-custom.png"
                        alt="Mercado Pago"
                        className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>
                <div>
                    <div className="text-white text-sm font-bold">Mercado Pago</div>
                    <div className="text-xs text-green-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
                        Pagos 100% Protegidos
                    </div>
                </div>
            </div>
            <p className="text-neutral-500 text-xs mb-4 leading-relaxed">
                Aceptamos todas las tarjetas de crédito, débito y pagos en efectivo.
            </p>
            <a
                href="https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=141039576-ff609d72-4186-4497-b7c2-89d0fa84f7fd"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pixelTrackers.trackCTA("footer_payment", "Pagar Inscripción")}
                className="flex items-center justify-center w-full bg-[#009EE3] hover:bg-[#008CC9] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/20 group"
            >
                Pagar Inscripción Ahora
                <ExternalLink size={14} className="ml-2 opacity-70 group-hover:opacity-100" />
            </a>
        </>
    );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            onClick={() => pixelTrackers.trackCTA("footer_social", label)}
            className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-neutral-400 hover:text-amber-500 transition-all hover:scale-110 border border-white/5 hover:border-amber-500/30"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    const label = typeof children === "string" ? children : "link";
    return (
        <li>
            <a
                href={href}
                onClick={() => pixelTrackers.trackCTA("footer_nav", label)}
                className="text-neutral-400 text-sm hover:text-amber-500 transition-colors flex items-center group"
            >
                <ChevronRight size={14} className="mr-2 text-neutral-600 group-hover:text-amber-500 transition-colors opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 duration-300" />
                {children}
            </a>
        </li>
    );
}
