# Timelines

Timelines is a React + Vite app for building interactive timelines. Events
are rendered as points (single dates) or periods (date ranges) on an
HTML `<canvas>`, and everything is stored per-user in Firebase
(Authentication + Firestore).

## Requirements

- Node.js 18+
- A Firebase project with **Authentication** (Email/Password and/or Google)
  and **Firestore** enabled

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the example environment file and fill in your own Firebase project's
   credentials:

   ```bash
   cp .env.example .env
   ```

   You can find these values in the Firebase Console under
   **Project Settings > General > Your apps > SDK setup and configuration**:

   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_FIREBASE_MEASUREMENT_ID` (optional, only used if you enable Google
     Analytics for the Firebase project)

   The app throws a readable error on startup if the required variables
   (`VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_PROJECT_ID`) are missing, instead
   of failing with a cryptic Firebase SDK crash.

3. Start the dev server:

   ```bash
   npm run dev
   ```

## Firestore security rules

This repo includes `firestore.rules`, which restricts each user to reading
and writing only their own `users/{uid}` document; everything else is
denied by default. Deploy them with the
[Firebase CLI](https://firebase.google.com/docs/cli):

```bash
npm install -g firebase-tools
firebase login
firebase use --add   # select your Firebase project
firebase deploy --only firestore:rules
```

Alternatively, paste the contents of `firestore.rules` into the Firebase
Console under **Firestore Database > Rules**.

## Deploying to Vercel

1. Import this repository in the [Vercel dashboard](https://vercel.com/new).
2. Vercel auto-detects the Vite framework preset (build command
   `npm run build`, output directory `dist`) — no changes needed.
3. In **Project Settings > Environment Variables**, add the same
   `VITE_FIREBASE_*` variables listed above.
4. Deploy. `vercel.json` in this repo rewrites all routes to `/index.html`
   so client-side routes (e.g. `/app/timeline_123`) work on direct load and
   refresh.

## Deploying to Netlify

`netlify.toml` is included with the build command, publish directory, and an
SPA redirect (`/* -> /index.html`, status 200). Set the same
`VITE_FIREBASE_*` variables in **Site settings > Environment variables**.

## Deploying to GitHub Pages

The app defaults to being hosted at the domain root (`base: "/"`). GitHub
Pages project sites are served from a `/<repo-name>/` subpath instead, so
`.github/workflows/deploy.yml` builds with `BASE_PATH=/Timelines/` to keep
that deployment working without affecting Vercel/Netlify builds (which use
the default root base).

## Available scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
