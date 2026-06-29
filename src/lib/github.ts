export async function fetchPost(slug: string) {
  const url = `https://raw.githubusercontent.com/wjq-glarysoft/astro-ssr-blog/master/src/content/posts/${slug}.md`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Post not found");
  }

  return await res.text();
}
