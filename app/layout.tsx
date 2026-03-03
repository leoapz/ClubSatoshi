import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Club Satoshi | Comunidad Bitcoiner",
  description:
    "Aprende cómo Bitcoin impulsa una economía circular y sostenible.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-black">
          <Header />
          {children}
          <Disclaimer />
          <Footer />
        </div>
      </body>
    </html>
  );
}
