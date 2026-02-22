import Link from "next/link";
import Image from "next/image";
import { Users, Lightbulb, ShieldCheck, ArrowRight } from "lucide-react";
import { getAssetPath } from "@/utils/assets";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-black text-secondary dark:text-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Quienes Somos</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Una comunidad de Tucumán y el Norte Argentino que se junta a aprender, compartir y construir con Bitcoin.
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in">
                    <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                        <h3 className="text-2xl font-bold mb-4">Nuestro Propósito</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            Club Satoshi nació con una idea simple: juntarnos en bares a conversar y aprender sobre Bitcoin. Somos un grupo diverso, unidos por la curiosidad y las ganas de entender esta tecnología. Con el tiempo, fuimos creciendo y nos fuimos convirtiendo en una comunidad de personas que se juntan a aprender, compartir y construir con Bitcoin.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Si no sabés nada de Bitcoin o estás comenzando, podés sumarte y te explicamos todo lo que sabemos. La idea es que tengas una base sólida sobre qué es Bitcoin y cómo funciona. Una vez a la semana nos juntamos para conocernos, compartir experiencias, ideas y seguir aprendiendo entre todos.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Nuestro propósito es empoderar a las personas y avanzar hacia un sistema financiero más justo y accesible, fomentando el pensamiento creativo y crítico desde Tucumán y el Norte Argentino.
                        </p>                        
                    </div>
                    <div className="hidden md:block relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <Image
                            src={getAssetPath("/Purpose_image2.png")}
                            alt="Comunidad levantando Bitcoin"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-20">
                    <div className="text-center mb-12 animate-fade-in">
                        <h3 className="text-2xl font-bold">Nuestros Valores</h3>
                        <p className="text-gray-500 mt-2">Los pilares que sostienen nuestra comunidad</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ValueCard
                            icon={<Users className="w-8 h-8 text-primary" />}
                            title="Colaboración"
                            description="Nos ayudamos entre todos. Si sabés algo, lo compartís. Si no sabés, preguntás. Así crecemos juntos."
                            delay="0.1s"
                        />
                        <ValueCard
                            icon={<ShieldCheck className="w-8 h-8 text-primary" />}
                            title="Libertad"
                            description="Cada uno piensa como quiere. Acá se debate con respeto y buena onda, sin juicios ni prejuicios."
                            delay="0.2s"
                        />
                        <ValueCard
                            icon={<Lightbulb className="w-8 h-8 text-primary" />}
                            title="Aprendizaje"
                            description="Nadie nace sabiendo. Desde el que recién arranca hasta el más técnico, siempre hay algo nuevo para aprender."
                            delay="0.3s"
                        />
                        <ValueCard
                            icon={<Users className="w-8 h-8 text-primary" />}
                            title="Apertura"
                            description="No importa tu experiencia ni de dónde vengas. Si te interesa Bitcoin, ya sos parte."
                            delay="0.4s"
                        />
                    </div>
                </div>

                {/* Vision Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative h-64 rounded-2xl overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <Image
                            src={getAssetPath("/vision_image.png")}
                            alt="Futuro conectado por Bitcoin"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="order-1 md:order-2 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                        <h3 className="text-2xl font-bold mb-4">Misión y Visión</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-primary">Nuestra Misión</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Conectar, educar y difundir conocimientos sobre Bitcoin a través de juntadas, charlas, talleres y proyectos colaborativos. Que cualquier persona pueda entender Bitcoin de manera simple y clara, sin miedo ni prejuicios. Y que se sienta parte de una comunidad que la ayuda a avanzar en su conocimiento.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-primary">Nuestra Visión</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Ser la comunidad referente de Bitcoin en Tucumán y el Norte Argentino, impulsando la economía circular y la adopción real de la tecnología en nuestra región.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ValueCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay?: string }) {
    return (
        <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center hover:shadow-lg transition-all hover:-translate-y-1 animate-slide-up" style={{ animationDelay: delay }}>
            <div className="mb-4 flex justify-center">{icon}</div>
            <h4 className="text-xl font-bold mb-3">{title}</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
        </div>
    );
}
