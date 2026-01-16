import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "shared_ui",
      exposes: {
        "./Button": "./src/components/Button.tsx",
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
        },
        "react-dom": {
          eager: true,
          singleton: true,
        },
      },
    }),
  ],
  server: { port: 3001 },
  output: {
    // БЕЗ ЭТОГО в режиме preview/prod хост будет искать чанки на своем порту (3000)
    assetPrefix: "http://localhost:3001/",
  },
});
