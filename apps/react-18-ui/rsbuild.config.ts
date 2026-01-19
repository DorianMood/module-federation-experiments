import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "react-18_ui",
      remotes: {
        shared_ui: "shared_ui@http://localhost:3001/mf-manifest.json",
      },
      dts: true,
      shared: {},
    }),
  ],
  server: { port: 3018 },
});
