import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  BookOpen,
  Video,
  FileText,
  ExternalLink,
  PlayCircle,
  ShieldCheck,
  Zap,
  Youtube,
  Grid,
} from "lucide-react";
import { getAssetPath } from "@/utils/assets";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-black">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary dark:text-white">
            Recursos Club Satoshi
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Recursos seleccionados para entender Bitcoin.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Index (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-primary">
                Índice de Contenidos
              </h3>
              <nav className="flex flex-col gap-2 text-sm">
                <NavLink href="#fundamentals" label="1. Fundamentos" />
                <NavLink href="#buy" label="2. Primeros Pasos" />
                <NavLink href="#wallets" label="3. Billeteras (Wallets)" />
                <NavLink href="#lightning" label="4. Lightning Network" />
                <NavLink href="#videos" label="5. Videoteca" />
                <NavLink href="#channels" label="6. Canales Recomendados" />
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1">
            {/* Mobile Index */}
            <div className="lg:hidden mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-x-auto">
              <div className="flex gap-2 text-sm whitespace-nowrap">
                <BadgeLink href="#fundamentals" label="Fundamentos" />
                <BadgeLink href="#buy" label="Comprar" />
                <BadgeLink href="#wallets" label="Wallets" />
                <BadgeLink href="#lightning" label="Lightning" />
                <BadgeLink href="#videos" label="Videos" />
              </div>
            </div>

            {/* 1. FUNDAMENTALS */}
            <section
              id="fundamentals"
              className="mb-20 animate-slide-up scroll-mt-24"
            >
              <SectionHeader
                icon={<BookOpen />}
                title="1. Fundamentos: ¿Qué es Bitcoin?"
              />

              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                <ResourceCard
                  type="article"
                  title="¿Qué es Bitcoin? Guía Introductoria"
                  description="Entiende los conceptos básicos de Bitcoin: escasez digital, descentralización y dinero duro."
                  link="/resources/que-es-bitcoin"
                />
                <ResourceCard
                  type="article"
                  title="Glosario Bitcoin"
                  description="Diccionario esencial para entender la terminología del ecosistema (HODL, Halving, FOMO, etc.)"
                  link="/resources/glosario-bitcoin"
                />
                <VideoCard
                  title="Video Explicativo: ¿Qué es Bitcoin?"
                  videoId="8TwCqM-GOGQ"
                />
                <VideoCard
                  title="¿Quién es el creador de Bitcoin?"
                  videoId="D90jmWX76PY"
                />
              </div>
            </section>

            {/* 2. BUYING */}
            <section id="buy" className="mb-20 scroll-mt-24">
              <SectionHeader
                icon={<PlayCircle />}
                title="2. Primeros Pasos: Comprar"
              />

              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                <ResourceCard
                  type="guide"
                  title="Tu Primera Compra de Satoshis"
                  description="Guía paso a paso para realizar tu primera transacción de forma segura."
                  link="/resources/mi-primer-compra-satoshis"
                >
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                    <h4 className="font-bold text-lg mb-4 text-secondary dark:text-white">
                      {"🚀 Cómo comprar tus primeros Satoshis en Lemon (desde Argentina)"}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {
                        '¿Querés sumarte al mundo de las criptomonedas y comprar tus primeros Satoshis (que son como "centavos" de Bitcoin) de forma fácil y segura? ¡Estás en el lugar correcto! Con Lemon Cash, una billetera cripto argentina, el proceso es pan comido.'
                      }
                    </p>

                    <div className="space-y-8">
                      <div>
                        <h5 className="font-bold text-primary mb-2">
                          {"Paso 1: ¡Descargá Lemon Cash y creá tu cuenta!"}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                          {
                            'Lo primero es lo primero. Andá a la tienda de aplicaciones de tu celular (App Store para iPhone o Google Play Store para Android), buscá "Lemon Cash" y descargala.'
                          }
                          <br />
                          <br />
                          {
                            'Una vez que la tengas, abrí la app y seguí los pasos para crear tu cuenta. Te van a pedir algunos datos básicos y validar tu identidad (esto se llama KYC, "Conoce a tu Cliente", y es un requisito para tu seguridad y para cumplir con las regulaciones). ¡Tranqui, es un proceso rápido!'
                          }
                        </p>
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm">
                          <Image
                            src={getAssetPath("/step1.png")}
                            alt="Paso 1: Descargar Lemon"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div>
                        <h5 className="font-bold text-primary mb-2">
                          {"Paso 2: ¡Depositá pesos en tu billetera!"}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                          {
                            "Para comprar Satoshis, primero necesitás tener pesos en tu cuenta de Lemon. ¡Es como cargar saldo en tu tarjeta!"
                          }
                          <br />
                          <br />
                          {
                            'Dentro de la app, vas a encontrar una opción que dice "Depositar" o similar. Hacé clic ahí y elegí la opción para depositar pesos argentinos (ARS). Lemon te va a dar los datos de una cuenta bancaria (CBU/CVU) a la que tenés que transferir desde tu banco o billetera virtual (Mercado Pago, Ualá, etc.).'
                          }
                          <br />
                          <br />
                          {
                            "¡Ojo! Asegurate de que la cuenta desde donde transferís esté a tu nombre, ¡si no, la transferencia podría rebotar!"
                          }
                        </p>
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm">
                          <Image
                            src={getAssetPath("/step2.png")}
                            alt="Paso 2: Depositar pesos"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div>
                        <h5 className="font-bold text-primary mb-2">
                          {"Paso 3: ¡A comprar Satoshis se ha dicho!"}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                          {
                            "Una vez que veas tus pesos reflejados en la app de Lemon (suele ser casi instantáneo), ¡estás listo para el gran momento!"
                          }
                          <br />
                          <br />
                          {
                            'Buscá la opción "Comprar" o "Intercambiar" dentro de la app. Ahí vas a poder elegir la criptomoneda que querés comprar. En este caso, buscá "Bitcoin" (BTC). Recordá que lo que estás comprando son "pedacitos" de Bitcoin, o sea, Satoshis.'
                          }
                          <br />
                          <br />
                          {
                            "Ingresá la cantidad de pesos que querés usar para comprar Satoshis y Lemon te mostrará cuántos recibirías. Revisá bien y confirmá la operación. ¡Y listo! Tus Satoshis ya están en tu billetera de Lemon. ¡Felicidades, ya sos parte del futuro!"
                          }
                        </p>
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm">
                          <Image
                            src={getAssetPath("/step3.png")}
                            alt="Paso 3: Comprar Bitcoin"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </ResourceCard>
                <div className="space-y-6">
                  <VideoCard
                    title="Cómo comprar en Lemon Cash"
                    videoId="_Wv37csEAz8"
                  />
                  <VideoCard
                    title="Depositar pesos en Lemon Cash"
                    videoId="1vRkV5X-Gmw"
                  />
                  <VideoCard
                    title="Comprar Satoshis en Lemon Cash"
                    videoId="mU5beVYFNcg"
                  />
                </div>
              </div>
            </section>

            {/* 3. WALLETS */}
            <section id="wallets" className="mb-20 scroll-mt-24">
              <SectionHeader
                icon={<ShieldCheck />}
                title="3. Billeteras y Custodia (Wallets)"
              />

              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold mb-4 text-gray-500 uppercase tracking-widest text-sm">
                    Billeteras Móviles (Hot Wallets)
                  </h4>
                  <ResourceCard
                    type="guide"
                    title="Mi primer billetera Bitcoin"
                    description="Aprende a instalar y configurar tu primera wallet en el celular paso a paso."
                    link="/resources/mi-primer-billetera-bitcoin"
                  >
                    <div className="mt-4">
                      <VideoCard
                        title="Tutorial de instalación Wallet"
                        videoId="xTG2XapXDvk"
                      />
                    </div>
                  </ResourceCard>
                </div>

                <div>
                  <h4 className="font-bold mb-4 text-gray-500 uppercase tracking-widest text-sm">
                    Billeteras Frías (Cold Wallets)
                  </h4>
                  <ResourceCard
                    type="guide"
                    title="Guía de Billeteras Frías"
                    description="Máxima seguridad para tus ahorros. Qué son y por qué deberías tener una."
                    link="/resources/billeteras-frias"
                  >
                    <div className="space-y-4 mt-4">
                      <VideoCard
                        title="Review Trezor One"
                        videoId="H7ocm0Q-HwE"
                      />
                      <VideoCard
                        title="Ledger Nano S Plus"
                        videoId="XG7A4209aWI"
                      />
                    </div>
                  </ResourceCard>
                </div>
              </div>
            </section>

            {/* 4. LIGHTNING NETWORK */}
            <section id="lightning" className="mb-20 scroll-mt-24">
              <SectionHeader
                icon={<Zap />}
                title="4. Lightning Network: Micropagos"
              />

              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                <ResourceCard
                  type="article"
                  title="Qué es Lightning Network"
                  description="La capa 2 de Bitcoin que permite pagos instantáneos y con comisiones casi nulas."
                  link="/resources/lightning-network"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <VideoCard
                    title="Explicación LN"
                    videoId="z77puVIx5yo"
                  />
                  <VideoCard
                    title="Tutorial Wallet of Satoshi"
                    videoId="Bor-8a-SU9w"
                  />
                  <VideoCard
                    title="Phoenix Wallet"
                    videoId="d68CXB0S6M8"
                  />
                  <VideoCard
                    title="Breez Wallet"
                    videoId="RJNoOAoCnns"
                  />
                </div>
              </div>
            </section>

            {/* 5. VIDEOTHEQUE */}
            <section id="videos" className="mb-20 scroll-mt-24">
              <SectionHeader
                icon={<Grid />}
                title="5. Videoteca de Interés"
              />
              <p className="mb-6 text-gray-500">
                Documentales y charlas para profundizar tu conocimiento.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <VideoCard
                  title="Por qué Bitcoin es el mejor dinero"
                  videoId="AQOBVsHcvhU"
                />
                <VideoCard
                  title="Economía Circular: Perú"
                  videoId="-uCyFQPpdGI"
                />
                <VideoCard
                  title="Economía Circular: África"
                  videoId="a5KPxD_BWGM"
                />
                <VideoCard
                  title="Entrevista: Uso en Perú"
                  videoId="I5tA4P9aPj8"
                />
                <VideoCard
                  title="¿Por qué Bitcoin?"
                  videoId="pToS4GQhZCw"
                />
              </div>
            </section>

            {/* 6. CHANNELS */}
            <section id="channels" className="mb-20 scroll-mt-24">
              <SectionHeader
                icon={<Youtube />}
                title="6. Canales Recomendados"
              />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ChannelLink
                  name="Lunaticoin"
                  url="https://www.youtube.com/@Lunaticoin/videos"
                />
                <ChannelLink
                  name="KManuS88"
                  url="https://www.youtube.com/@KManuS88/videos"
                />
                <ChannelLink
                  name="BTC Andres"
                  url="https://www.youtube.com/@BTCAndres/videos"
                />
                <ChannelLink
                  name="LABITCONF"
                  url="https://www.youtube.com/@LABITCONF/videos"
                />
                <ChannelLink
                  name="CriptoNorber"
                  url="https://www.youtube.com/@CriptoNorber/videos"
                />
                <ChannelLink
                  name="Joven Inversor"
                  url="https://www.youtube.com/@JovenInversor/videos"
                />
                <ChannelLink
                  name="BTC en Español"
                  url="https://www.youtube.com/@btcenespanol/videos"
                />
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// --- Subcomponents ---

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
      <div className="p-2 bg-primary/10 rounded-full text-primary">{icon}</div>
      <h2 className="text-2xl md:text-3xl font-bold text-secondary dark:text-white">
        {title}
      </h2>
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-secondary dark:text-white hover:text-primary hover:pl-1 transition-all py-1.5 block font-medium"
    >
      {label}
    </a>
  );
}

function BadgeLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full shadow-sm text-secondary dark:text-white hover:border-primary hover:text-primary transition-colors"
    >
      {label}
    </a>
  );
}

function ResourceCard({ type, title, description, link, children }: any) {
  const isGuide = type === "guide";
  const isExternal = link?.startsWith("http");
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all hover:-translate-y-1 h-full flex flex-col">
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit ${isGuide ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}
      >
        {isGuide ? (
          <BookOpen className="w-4 h-4" />
        ) : (
          <FileText className="w-4 h-4" />
        )}
        <span className="uppercase">
          {isGuide ? "Guía Práctica" : "Artículo"}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white">
        {title}
      </h3>
      <p className={`text-gray-500 dark:text-gray-400 text-sm mb-4 ${!children ? "flex-1" : ""}`}>
        {description}
      </p>
      {children && <div className="mb-6 w-full flex-1">{children}</div>}
      {isExternal ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-secondary dark:text-white hover:text-primary transition-colors"
        >
          Leer en Notion <ExternalLink className="w-4 h-4" />
        </a>
      ) : (
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-sm font-bold text-secondary dark:text-white hover:text-primary transition-colors"
        >
          Leer artículo
        </Link>
      )}
    </div>
  );
}

function VideoCard({ title, videoId }: any) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 group w-full">
      <div className="relative aspect-video bg-black">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0"
        />
      </div>
      <div className="p-3">
        <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-[10px] font-bold mb-2 bg-red-100 text-red-700 w-fit">
          <Video className="w-3 h-3" />
          <span>VIDEO</span>
        </div>
        <h3 className="text-sm font-bold text-secondary dark:text-white group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
      </div>
    </div>
  );
}

function ChannelLink({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-red-500 hover:shadow-sm transition-all group"
    >
      <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors">
        <Youtube className="w-5 h-5" />
      </div>
      <span className="font-bold text-sm text-secondary dark:text-white">
        {name}
      </span>
    </a>
  );
}
