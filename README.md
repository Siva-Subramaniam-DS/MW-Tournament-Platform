# MW Tournament Platform

A tournament platform front end for Modern Warships communities. Visitors can browse tournaments and view brackets; organizers can sign in and create new tournaments.

**Live site:** https://siva-subramaniam-ds.github.io/MW-Tournament-Platform/

## Features

- Tournament list with status (upcoming, live), format, entry fee and prize pool
- Bracket view for a selected tournament
- Create-tournament form for organizers
- Login modal backed by a small JWT API
- Responsive layout styled with Tailwind CSS

## Tech stack

| Part | Tools |
|---|---|
| Front end | React 18, Vite, Tailwind CSS, lucide-react |
| Back end | Node.js, Express, jsonwebtoken |
| Hosting | GitHub Pages (`gh-pages`) |

## Getting started

Front end:

```bash
npm install
npm run dev
```

Back end (runs on port 5000):

```bash
cd backend
npm install
npm start
```

The back end exposes `POST /api/login` and `GET /api/protected`.

## Deploy

```bash
npm run deploy
```

This builds the app and publishes `dist/` to GitHub Pages.

## Project structure

```
src/
  App.jsx              views and tournament state
  components/          Header, Hero, TournamentList, TournamentBracket,
                       CreateTournament, LoginModal, Footer
  logos/, wallpaper/   images
backend/
  server.js            Express login API
```

## Notes

Tournament data is currently held in front-end state, so tournaments created in the browser are not saved between visits.
