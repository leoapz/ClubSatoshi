"use client";

import { useState } from "react";

interface YouTubeFacadeProps {
  id: string;
  short?: boolean;
}

export default function YouTubeFacade({ id, short = false }: YouTubeFacadeProps) {
  const [active, setActive] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const src = `https://www.youtube.com/embed/${id}?autoplay=1`;

  return (
    <div
      className={`relative w-full my-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm bg-black ${short ? "aspect-[9/16] max-w-xs mx-auto" : "aspect-video"}`}
    >
      {active ? (
        <iframe
          src={src}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="absolute inset-0 w-full h-full group"
          aria-label="Reproducir video"
        >
          <img
            src={thumbnail}
            alt="Miniatura del video"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
              <svg
                className="w-7 h-7 text-white translate-x-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
