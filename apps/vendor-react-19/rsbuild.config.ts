import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "vendor_react",
      exposes: {
        "./react": "react",
        "./react-dom": "react-dom",
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: "^18.3.1 || ^19.0.0",
        },
        "react-dom": {
          eager: true,
          singleton: true,
          requiredVersion: "^18.3.1 || ^19.0.0",
        },
      },
    }),
  ],
  server: { port: 3100 },
});
