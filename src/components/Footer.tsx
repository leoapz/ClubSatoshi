import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white py-6 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="relative h-8 w-8 shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Club Satoshi Icon"
                                fill
                                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                        <div className="flex items-baseline font-bold text-lg tracking-tight text-white italic font-heading">
                            Club<span className="text-primary mx-0.5">.</span>Satoshi
                        </div>
                    </Link>

                    <p className="text-gray-500 text-xs order-last sm:order-none">
                        © {new Date().getFullYear()} Club Satoshi. Todos los derechos reservados.
                    </p>

                </div>
            </div>
        </footer>
    );
}
