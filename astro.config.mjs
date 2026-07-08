import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://airdb.dev",
  output: "static",
  publicDir: "static",
  integrations: [sitemap()],
});
