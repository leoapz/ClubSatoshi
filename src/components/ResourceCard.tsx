import Link from "next/link";
import type { ResourceFrontmatter, ResourceCategory } from "@/types/resource";

const TYPE_ICON: Record<string, string> = {
  article: "📄",
  guide: "📄",
  video: "🎬",
  external: "🔗",
};

const CATEGORY_LABEL: Record<ResourceCategory, string> = {
  fundamentos: "Fundamentos",
  "primeros-pasos": "Primeros Pasos",
  wallets: "Wallets",
  lightning: "Lightning",
  videoteca: "Videoteca",
  canales: "Canales",
};

const CATEGORY_COLOR: Record<ResourceCategory, string> = {
  fundamentos: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  "primeros-pasos": "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  wallets: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  lightning: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
  videoteca: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
  canales: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
};

const LEVEL_LABEL: Record<string, string> = {
  beginner: "Principiante",
  intermediate: "Intermedio",
  advanced: "Avanzado",
};

const LEVEL_COLOR: Record<string, string> = {
  beginner: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  intermediate: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
  advanced: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
};

interface ResourceCardProps {
  slug: string;
  frontmatter: ResourceFrontmatter;
}

export default function ResourceCard({ slug, frontmatter }: ResourceCardProps) {
  const typeIcon = TYPE_ICON[frontmatter.type] ?? "📄";
  const categoryLabel = CATEGORY_LABEL[frontmatter.category];
  const categoryColor = CATEGORY_COLOR[frontmatter.category];
  const levelLabel = LEVEL_LABEL[frontmatter.level];
  const levelColor = LEVEL_COLOR[frontmatter.level];

  return (
    <Link
      href={`/resources/${slug}`}
      className="group flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className="text-2xl leading-none">{typeIcon}</span>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${categoryColor}`}>
            {categoryLabel}
          </span>
          <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${levelColor}`}>
            {levelLabel}
          </span>
        </div>
      </div>

      <h2 className="text-base font-bold text-secondary dark:text-white mb-2 group-hover:text-primary transition-colors leading-snug">
        {frontmatter.title}
      </h2>

      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
        {frontmatter.description}
      </p>
    </Link>
  );
}
