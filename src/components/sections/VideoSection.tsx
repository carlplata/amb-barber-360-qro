export function VideoSection() {
    return (
        <section className="py-12 sm:py-20 bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-12 font-heading uppercase tracking-wider">
                    Conoce Nuestra Escuela
                </h2>
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Fasociacionmexicanadebarberia%2Fvideos%2F2906440829675027%2F&show_text=false&width=560&t=0"
                        className="border-0 overflow-hidden"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Video de la escuela de barbería AMB"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
