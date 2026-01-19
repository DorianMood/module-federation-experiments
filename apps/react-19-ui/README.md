# Rsbuild project

This app is running `react 19`. It is an example how error boundary can help when migrating from react 18 to react 19 (or any other major version). When locading component with module federation app will **not** encounter an error and will **not** fallback to local component. It will use shared copmponent right from shared-ui since react versions are already matching. In real life ButtonWithErrorBoundary must be in nexus/npm package of shared-ui.

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get started

Start the dev server, and the app will be available at [http://localhost:3000](http://localhost:3000).

```bash
pnpm run dev
```

Build the app for production:

```bash
pnpm run build
```

Preview the production build locally:

```bash
pnpm run preview
```

## Learn more

To learn more about Rsbuild, check out the following resources:

- [Rsbuild documentation](https://rsbuild.rs) - explore Rsbuild features and APIs.
- [Rsbuild GitHub repository](https://github.com/web-infra-dev/rsbuild) - your feedback and contributions are welcome!
