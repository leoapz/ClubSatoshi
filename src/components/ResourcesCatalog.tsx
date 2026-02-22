"use client";

import { useState } from "react";
import type { ResourceMeta } from "@/lib/mdx";
import type { ResourceCategory } from "@/types/resource";
import ResourceCard from "@/components/ResourceCard";

interface Pill {
  id: "todos" | ResourceCategory;
  label: string;
}

const PILLS: Pill[] = [
  { id: "todos", label: "Todos" },
  { id: "fundamentos", label: "Fundamentos" },
  { id: "primeros-pasos", label: "Primeros Pasos" },
  { id: "wallets", label: "Wallets" },
  { id: "lightning", label: "Lightning Network" },
  { id: "videoteca", label: "Videoteca" },
  { id: "canales", label: "Canales" },
];

interface ResourcesCatalogProps {
  resources: ResourceMeta[];
}

export default function ResourcesCatalog({ resources }: ResourcesCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<"todos" | ResourceCategory>("todos");
  const [search, setSearch] = useState("");

  const filtered = resources.filter((r) => {
    const matchesCat =
      activeCategory === "todos" || r.frontmatter.category === activeCategory;
    const q = search.toLowerCase().trim();
    const matchesSearch =
      !q ||
      r.frontmatter.title.toLowerCase().includes(q) ||
      r.frontmatter.description.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div>
      {/* Buscador */}
      <div className="max-w-xl mx-auto mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar recursos..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-secondary dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
        />
      </div>

      {/* Pills */}
      <div className="sticky top-16 z-10 bg-gray-50 dark:bg-black py-3 mb-8 -mx-4 px-4 md:-mx-6 md:px-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide md:flex-wrap md:justify-center pb-1">
          {PILLS.map((pill) => (
            <button
              key={pill.id}
              onClick={() => setActiveCategory(pill.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === pill.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary"
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {filtered.map((resource) => (
            <ResourceCard
              key={resource.slug}
              slug={resource.slug}
              frontmatter={resource.frontmatter}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400 dark:text-gray-600">
          <p className="text-lg font-medium">
            Próximamente más contenido en esta categoría.
          </p>
        </div>
      )}
    </div>
  );
}
