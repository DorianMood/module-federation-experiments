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
        },
      },
    }),
  ],
  server: { port: 3019 },
});
