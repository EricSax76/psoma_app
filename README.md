# PSOMA App

This monorepo contains the web, mobile and backend projects for PSOMA.

## Development

### Web
Run the web app with:

```bash
pnpm --filter web dev
```

### Mobile
Run the Expo mobile app with:

```bash
cd apps/mobile && npx expo start
```

### Backend
Run the API server with:

```bash
pnpm --filter backend dev
```

## Packages
Shared code lives under `packages/`.
