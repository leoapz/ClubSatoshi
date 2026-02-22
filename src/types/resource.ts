export type ResourceType = "article" | "video" | "guide" | "external";
export type ResourceLevel = "beginner" | "intermediate" | "advanced";
export type ResourceCategory =
  | "fundamentos"
  | "primeros-pasos"
  | "wallets"
  | "lightning"
  | "videoteca"
  | "canales";

export interface ResourceFrontmatter {
  title: string;
  description: string;
  author: string;
  authorUrl?: string;
  category: ResourceCategory;
  date: string;
  type: ResourceType;
  level: ResourceLevel;
}
