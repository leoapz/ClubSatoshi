import { ExternalLink, Youtube, Twitter } from "lucide-react";

type Platform = "youtube" | "twitter" | "nostr" | "other";

interface Channel {
  name: string;
  url: string;
  description: string;
  platform: Platform;
}

const CHANNELS: Channel[] = [
  {
    name: "Lunaticoin",
    url: "https://www.youtube.com/@Lunaticoin/videos",
    description: "Análisis profundo de Bitcoin y economía austriaca. Uno de los canales más serios del ecosistema hispanohablante.",
    platform: "youtube",
  },
  {
    name: "KManuS88",
    url: "https://www.youtube.com/@KManuS88/videos",
    description: "Divulgación técnica sobre Bitcoin y privacidad, con un enfoque accesible y bien fundamentado.",
    platform: "youtube",
  },
  {
    name: "BTC Andres",
    url: "https://www.youtube.com/@BTCAndres/videos",
    description: "Tutoriales prácticos de wallets, nodos y herramientas Bitcoin para todos los niveles.",
    platform: "youtube",
  },
  {
    name: "LABITCONF",
    url: "https://www.youtube.com/@LABITCONF/videos",
    description: "Charlas y ponencias de la conferencia Bitcoin más importante de Latinoamérica.",
    platform: "youtube",
  },
  {
    name: "CriptoNorber",
    url: "https://www.youtube.com/@CriptoNorber/videos",
    description: "Contenido educativo sobre Bitcoin y Lightning Network en español, fácil de entender.",
    platform: "youtube",
  },
  {
    name: "Joven Inversor",
    url: "https://www.youtube.com/@JovenInversor/videos",
    description: "Finanzas personales y Bitcoin desde una perspectiva joven y práctica.",
    platform: "youtube",
  },
  {
    name: "BTC en Español",
    url: "https://www.youtube.com/@btcenespanol/videos",
    description: "Canal dedicado exclusivamente a Bitcoin en español: noticias, análisis y educación.",
    platform: "youtube",
  },
];

const PLATFORM_ICON: Record<Platform, React.ReactNode> = {
  youtube: <Youtube className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
  nostr: <span className="text-xs font-bold">N</span>,
  other: <ExternalLink className="w-4 h-4" />,
};

const PLATFORM_COLOR: Record<Platform, string> = {
  youtube: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  twitter: "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400",
  nostr: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  other: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
};

const PLATFORM_LABEL: Record<Platform, string> = {
  youtube: "YouTube",
  twitter: "Twitter / X",
  nostr: "Nostr",
  other: "Enlace",
};

export default function ChannelList() {
  return (
    <section className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-2">
            Canales Recomendados
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Creadores de contenido en Bitcoin que el Club Satoshi sigue y recomienda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CHANNELS.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div
                className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${PLATFORM_COLOR[channel.platform]}`}
              >
                {PLATFORM_ICON[channel.platform]}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-secondary dark:text-white text-sm group-hover:text-primary transition-colors truncate">
                    {channel.name}
                  </span>
                  <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold ${PLATFORM_COLOR[channel.platform]}`}>
                    {PLATFORM_LABEL[channel.platform]}
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-2">
                  {channel.description}
                </p>
              </div>

              <ExternalLink className="shrink-0 w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors mt-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
