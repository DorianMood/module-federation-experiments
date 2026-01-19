import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact({
      swcReactOptions: {
        // Заставляем использовать автоматический рантайм,
        // который корректно работает с синглтоном в MF
        runtime: "automatic",
      },
    }),
    pluginModuleFederation({
      name: "main_ui",
      remotes: {
        shared_ui: "shared_ui@http://localhost:3001/mf-manifest.json",
      },
      dts: true,
      shared: {
        react: {
          eager: false,
          singleton: true,
          requiredVersion: "^19.0.0",
          strictVersion: true,
          // shareKey: "react-18",
        },
        "react-dom": {
          eager: false,
          singleton: true,
          requiredVersion: "^19.0.0",
          strictVersion: true,
          // shareKey: "react-18",
        },
        // Добавляем эти два ключа:
        "react/jsx-runtime": {
          singleton: true,
          requiredVersion: "^18.3.1 || ^19.0.0",
        },
        "react/jsx-dev-runtime": {
          singleton: true,
          requiredVersion: "^18.3.1 || ^19.0.0",
        },
      },
    }),
  ],
  source: {
    alias: {
      react: require.resolve("react"),
      "react-dom": require.resolve("react-dom"),
      // Заставляем все импорты рантайма идти через общую точку
      "react/jsx-runtime": require.resolve("react/jsx-runtime"),
      "react/jsx-dev-runtime": require.resolve("react/jsx-dev-runtime"),
    },
  },
  server: { port: 3000 },
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
