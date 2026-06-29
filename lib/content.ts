import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ContentItem {
  slug: string;
  title: string;
  blurb: string;
  date: string;
  tags: string[];
  link: string;
  category: string;
  categoryOrder: number;
  order: number;
}

export interface ContentGroup {
  category: string;
  items: ContentItem[];
}

function readItems(folder: string): ContentItem[] {
  const dir = path.join(process.cwd(), "content", folder);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .flatMap((file) => {
      const { data } = matter(
        fs.readFileSync(path.join(dir, file), "utf8")
      );
      if (data.draft === true) return [];
      return [{
        slug: file.replace(".mdx", ""),
        title: data.title ?? "",
        blurb: data.blurb ?? "",
        date: String(data.date ?? ""),
        tags: data.tags ?? [],
        link: data.link ?? "",
        category: data.category ?? "",
        categoryOrder: data.categoryOrder ?? 0,
        order: data.order ?? 0,
      }];
    });
}

function groupByCategory(items: ContentItem[]): ContentGroup[] {
  const map = new Map<string, { catOrder: number; items: ContentItem[] }>();

  for (const item of items) {
    const cat = item.category || "OTHER";
    if (!map.has(cat)) map.set(cat, { catOrder: item.categoryOrder, items: [] });
    map.get(cat)!.items.push(item);
  }

  return [...map.entries()]
    .sort(([, a], [, b]) => a.catOrder - b.catOrder)
    .map(([category, { items }]) => ({
      category,
      items: items.sort((a, b) => a.order - b.order),
    }));
}

export function getWorkItems(): ContentGroup[] {
  return groupByCategory(readItems("work"));
}

export function getPlayItems(): ContentGroup[] {
  return groupByCategory(readItems("play"));
}

export function getWritings(): ContentItem[] {
  return readItems("writings").sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
