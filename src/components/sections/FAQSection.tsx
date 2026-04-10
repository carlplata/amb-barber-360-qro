import { faqs } from "@/data/landing-page";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQSection() {
    return (
        <section className="py-12 sm:py-20 bg-gray-50 text-black">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 font-heading uppercase tracking-wider">
                    Preguntas Frecuentes
                </h2>
                <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border overflow-hidden">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0 px-4 sm:px-6">
                            <AccordionTrigger className="text-left font-bold text-sm sm:text-lg hover:no-underline hover:text-primary transition-colors py-4">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-sm sm:text-base pb-4 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
