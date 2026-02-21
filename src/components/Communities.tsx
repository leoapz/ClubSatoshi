import Link from "next/link";
import { Globe } from "lucide-react";

export default function Communities() {
    return (
        <section id="communities" className="py-20 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary dark:text-white">Comunidades</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        El ecosistema Bitcoin crece gracias a la colaboración. Conoce a quienes comparten nuestra visión.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-500">
                    {/* Placeholders for Community Logos */}
                    <CommunityPlaceholder name="Bitcoin Argentina" />
                    <CommunityPlaceholder name="La Crypta" />
                    <CommunityPlaceholder name="Espacio Bitcoin" />
                    <CommunityPlaceholder name="Tucumán Crypto" />
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 mb-6">¿Lideras una comunidad? ¡Hagamos cosas juntos!</p>
                    <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <Globe className="w-4 h-4" />
                        Contactar para Alianzas
                    </Link>
                </div>

            </div>
        </section>
    );
}

function CommunityPlaceholder({ name }: { name: string }) {
    return (
        <div className="h-32 bg-gray-50 dark:bg-gray-900 rounded-xl flex flex-col items-center justify-center border border-dashed border-gray-300 dark:border-gray-700 hover:border-primary transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 mb-3 group-hover:bg-primary/20 transition-colors" />
            <span className="font-bold text-gray-400 group-hover:text-primary transition-colors text-sm">{name}</span>
        </div>
    )
}
