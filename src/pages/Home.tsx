import { useState } from "react";
import { SEO } from "@/components/SEO";
import { schema } from "@/data/landing-page";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { InscriptionSection } from "@/components/sections/InscriptionSection";
import { ModalitiesSection } from "@/components/sections/ModalitiesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { MasterCoursesSection } from "@/components/sections/MasterCoursesSection";
import { ReadyToStartSection } from "@/components/sections/ReadyToStartSection";
import { LocationSection } from "@/components/sections/LocationSection";

const Home = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-black">
            <SEO
                title="Curso de Barbería Profesional en Querétaro | Aprende desde Cero - AMB"
                description="Conviértete en barbero profesional con 5 certificaciones oficiales. Práctica real, horarios flexibles y bolsa de trabajo. ¡Agenda tu Clase Muestra en Querétaro hoy!"
                keywords="mejor escuela de barbería en queretaro, cursos de barbería en queretaro, aprender barbería, certificación barbería, amb barber 360"
                schema={schema}
            >
                <meta name="geo.region" content="MX-QUE" />
                <meta name="geo.placename" content="Santiago de Querétaro" />
            </SEO>
            <Navbar />
            <Hero selectedId={selectedId} onSelect={setSelectedId} />
            <BenefitsSection />
            <VideoSection />
            <InscriptionSection />
            <ModalitiesSection />
            <PricingSection />
            <CertificatesSection />
            <FAQSection />
            <TestimonialsSection selectedId={selectedId} />
            <GallerySection />
            <MasterCoursesSection />
            <ReadyToStartSection />
            <LocationSection />
            <Footer />
            <StickyCTA />
        </div>
    );
};

export default Home;
