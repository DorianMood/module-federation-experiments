import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact({}),
    pluginModuleFederation({
      name: "shared_ui",
      filename: "remote-entry.js",
      exposes: {
        "./Button": "./src/components/Button.tsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^19.0.0",
          strictVersion: false,
          shareScope: "default",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.0.0",
          strictVersion: false,
          shareScope: "default",
        },
      },
      // dev: true,
    }),
  ],
  server: { port: 3001 },
  output: {
    assetPrefix: "http://localhost:3001/",
  },
  performance: {
    chunkSplit: {
      strategy: "custom",
      splitChunks: {
        cacheGroups: {
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: "react-vendor",
            chunks: "all",
            // Ставим приоритет выше, чем у обычных вендоров
            priority: 40,
            // Переиспользование чанка (важно для кэша)
            enforce: true,
            reuseExistingChunk: true,
          },
        },
      },
    },
  },
});
