import { defineConfig, envField } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://astro-ssr-blog.1003056522.workers.dev",
	env: {
		schema: {
			OAUTH_GITHUB_CLIENT_ID: envField.string({ context: "server", access: "secret" }),
			OAUTH_GITHUB_CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
		},
	}
});
