import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ResourceFrontmatter } from "@/types/resource";

export type { ResourceFrontmatter };

const RESOURCES_PATH = path.join(process.cwd(), "content/resources");

export interface Resource {
  slug: string;
  frontmatter: ResourceFrontmatter;
  content: string;
}

export interface ResourceMeta {
  slug: string;
  frontmatter: ResourceFrontmatter;
}

export function getResourceSlugs(): string[] {
  if (!fs.existsSync(RESOURCES_PATH)) {
    return [];
  }
  return fs
    .readdirSync(RESOURCES_PATH)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getResourceBySlug(slug: string): Resource | null {
  const filePath = path.join(RESOURCES_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as ResourceFrontmatter,
    content,
  };
}

export function getAllResources(): ResourceMeta[] {
  const slugs = getResourceSlugs();

  const resources = slugs
    .map((slug) => {
      const resource = getResourceBySlug(slug);
      if (!resource) return null;

      return {
        slug: resource.slug,
        frontmatter: resource.frontmatter,
      };
    })
    .filter((resource): resource is ResourceMeta => resource !== null);

  return resources.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
}
