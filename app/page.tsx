import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resources from "@/components/Resources";
import Communities from "@/components/Communities";
import BitcoinMap from "@/components/BitcoinMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Resources />
        <Communities />
        <BitcoinMap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
