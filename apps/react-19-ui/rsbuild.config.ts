import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "react-19_ui",
      remotes: {
        shared_ui: "shared_ui@http://localhost:3001/mf-manifest.json",
      },
      dts: true,
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
  html: {
    tags: [
      {
        tag: "script",
        attrs: {
          src: "http://localhost:3001/remote-entry.js",
          defer: true, // или async: true
        },
        // Добавляем перед другими скриптами
        append: false,
      },
    ],
  },
  server: { port: 3019 },
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
          },
        },
      },
    },
  },
});
