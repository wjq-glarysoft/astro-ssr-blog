import { marked } from "marked";

export function toHTML(md: string): string {
  return marked.parse(md) as string;
}