import { userSegments } from "@/data/landing-page";

interface UserSegmentsSectionProps {
    onSelect: (segmentId: string | null) => void;
    selectedId: string | null;
}

export function UserSegmentsSection({ onSelect, selectedId }: UserSegmentsSectionProps) {
    return (
        <div className="w-full mt-6 sm:mt-12 animate-fade-in-up delay-200">
            <h3 className="text-white text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-center px-2">
                ¿Cuál es tu objetivo principal?
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[110px] sm:auto-rows-[140px]">
                {userSegments.map((segment) => (
                    <button
                        key={segment.id}
                        onClick={() => onSelect(segment.id)}
                        className={`
                            relative group overflow-hidden rounded-xl border p-3 sm:p-4 transition-all duration-300 text-left flex flex-col justify-between
                            ${selectedId === segment.id
                                ? "bg-primary/20 border-primary shadow-[0_0_15px_rgba(255,215,0,0.3)] scale-[1.02] sm:scale-105 z-10"
                                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02]"
                            }
                        `}
                    >
                        {/* Background Image Effect */}
                        {segment.image && selectedId === segment.id && (
                            <div className="absolute inset-0 opacity-20 transition-opacity duration-500">
                                <img src={segment.image} alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50" />
                            </div>
                        )}

                        <div className="relative z-10 text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 filter drop-shadow-lg transition-transform group-hover:scale-110 duration-300 origin-left">
                            {segment.icon}
                        </div>
                        <div className="relative z-10 pr-2">
                            <span className={`
                                font-bold text-sm md:text-base leading-tight block
                                ${selectedId === segment.id ? "text-primary" : "text-gray-200 group-hover:text-white"}
                            `}>
                                {segment.title}
                            </span>
                        </div>

                        {/* Status Indicator */}
                        <div className={`
                            absolute top-2 right-2 sm:top-3 sm:right-3 w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300
                            ${selectedId === segment.id ? "bg-primary shadow-[0_0_10px_#FFD700]" : "bg-white/10 group-hover:bg-white/30"}
                        `} />
                    </button>
                ))}
            </div>
        </div>
    );
}
