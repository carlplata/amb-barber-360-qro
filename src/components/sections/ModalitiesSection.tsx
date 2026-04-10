import { modalities, linktreeUrl } from "@/data/landing-page";

export function ModalitiesSection() {
    return (
        <section id="modalities" className="py-12 sm:py-20 bg-gray-100 text-black">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 font-heading uppercase tracking-wider">
                    Modalidades de curso
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:gap-8">
                    {modalities.map((modality, index) => (
                        <div
                            key={index}
                            className="bg-yellow-100 rounded-xl p-3 sm:p-6 text-center border-2 border-transparent animate-fade-in-up flex flex-col items-center justify-center"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">{modality.icon}</div>
                            <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 font-heading leading-tight">{modality.title}</h3>
                            <p className="text-gray-700 text-xs sm:text-base line-clamp-2 sm:line-clamp-none">{modality.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 sm:mt-8 text-center">
                    <p className="text-sm sm:text-lg text-gray-700 mb-4 sm:mb-6">
                        🎯 Ambos cursos constan de 25 clases 100% prácticas, en Querétaro<br />
                        ⏱️ Tú eliges el ritmo: entre semana o fines de semana
                    </p>
                    <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="bg-black text-yellow-400 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-800 transition-transform hover:scale-105 font-heading uppercase inline-block">
                        Consultar horarios disponibles
                    </a>
                </div>
            </div>
        </section>
    );
}
