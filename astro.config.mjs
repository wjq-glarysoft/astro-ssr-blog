import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
//import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "static"
  /* adapter: cloudflare({
    mode: 'directory',  // 从 'advanced' 改为 'directory'
  }), */,

  adapter: cloudflare()
});