import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
// import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginReact(),
    // pluginModuleFederation({
    //   name: "shell",
    //   filename: "remote-entry.js",
    //   shared: {
    //     react: {
    //       eager: true,
    //       singleton: true,
    //       requiredVersion: "^19.0.0",
    //       strictVersion: false,
    //       shareScope: "default",
    //     },
    //     "react-dom": {
    //       eager: true,
    //       singleton: true,
    //       requiredVersion: "^19.0.0",
    //       strictVersion: false,
    //       shareScope: "default",
    //     },
    //   },
    //   // dev: true,
    // }),
  ],
});
