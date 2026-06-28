import { marked } from "marked";

export function toHTML(md: string) {
  if (!md) return "";

  return marked.parse(md);
}