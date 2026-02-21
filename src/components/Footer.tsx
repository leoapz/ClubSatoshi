import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">

                <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-12">
                    <div className="md:max-w-sm">
                        <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
                            <div className="relative h-10 w-10 shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="Club Satoshi Icon"
                                    fill
                                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <div className="flex flex-col leading-none">
                                <div className="flex items-baseline font-bold text-xl md:text-2xl tracking-tight text-white italic font-heading">
                                    Club<span className="text-primary mx-0.5">.</span>Satoshi
                                </div>
                                <span className="text-[0.65rem] md:text-[0.7rem] tracking-[0.2em] text-gray-400 font-bold uppercase mt-0.5">
                                    Comunidad Bitcoiner
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Impulsando la economía circular con Bitcoin. Educación, comunidad y tecnología para un futuro libre.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Síguenos</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Club Satoshi. Todos los derechos reservados.</p>
                </div>

            </div>
        </footer>
    );
}
