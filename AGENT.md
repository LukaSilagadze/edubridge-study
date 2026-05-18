# EduBridge Codebase Guide

EduBridge is a React/Vite single-page website for discovering student educational activities in Georgia. Public users browse events, view details, and register through external links. Admin users, allowlisted in Firestore, can create, edit, delete, and upload images for events.

## Stack

- React 19 + Vite in `frontend/`.
- Routing uses `react-router-dom` `HashRouter`, so deployed paths look like `#/events`.
- Firebase Auth + Cloud Firestore provide auth and event storage.
- Cloudinary handles event image uploads through an unsigned upload preset.
- Styling is global CSS imported from `frontend/src/main.jsx`; Font Awesome and Google Fonts load from `frontend/index.html`.

## Key Files

```text
firestore.rules                         Firestore security rules
frontend/package.json                   App scripts and dependencies
frontend/.env.example                   Required Firebase/Cloudinary env vars
frontend/src/App.jsx                    Route table and public/admin layout split
frontend/src/firebase.js                Firebase app, db, and auth exports
frontend/src/main.jsx                   React entry and global CSS imports
frontend/src/components/common/         Header and Footer
frontend/src/pages/                     Public pages
frontend/src/pages/admin/               Admin screens
frontend/src/admin/                     Admin auth, config, mappers, Cloudinary
frontend/src/utils/events.js            Firestore event mapping and sorting
frontend/public/images/                 Static images referenced as /images/...
```

## Routes

Public routes in `App.jsx` render with `Header` and `Footer`:

- `/`: `NewHomePage`, the current homepage with category links, hero, event carousel, partners, and newsletter UI.
- `/events`: `EventsPage`, searchable/filterable Firestore event listing.
- `/events/:id`: `EventDetailsPage`, one event plus similar events and registration links.
- `/contact`: `ContactPage`, client-side contact/FAQ page with simulated submit.
- `/profile`: `ProfilePage`, static/demo profile and portfolio UI.
- `/calendar`: `CalendarPage`, static/demo calendar using local sample events.

Admin routes render without public chrome:

- `/admin/login`: Firebase email/password sign-in.
- `/admin/events`: protected event list and delete actions.
- `/admin/events/new`: protected create form.
- `/admin/events/:id/edit`: protected edit form.
- `/admin`: redirects to `/admin/events`.

## Data Flow

Production event data lives in Firestore `events`.

- `NewHomePage` and `EventsPage` subscribe with `onSnapshot(collection(db, "events"))`.
- `EventDetailsPage` fetches `events/{id}` and then all events for similar-event suggestions.
- `AdminEventsPage` reads all events with `getDocs`.
- `AdminEventFormPage` creates with `addDoc` and edits with `updateDoc`.
- `frontend/src/data/events.json` is legacy/static sample data and is not used by the current public event listing.
- `CalendarPage`, `ProfilePage`, newsletter signup, and contact submission are demo/client-only and do not persist.

## Event Model

Firestore event docs generally use this shape:

```js
{
  title, category, subject, grade, age, location, date, deadline,
  description, image, status, price, language, registrationLink,
  participants, maxParticipants,
  organizer: { name, logo },
  createdAt, updatedAt
}
```

Important helpers:

- `utils/events.js`: `mapEventDoc`, `mapEventsSnapshot`, `sortEventsByFreshness`.
- `mapEventDoc` uses the Firestore document ID as `event.id` and preserves any old stored `id` as `legacyId`.
- `admin/eventMapper.js`: `eventToForm` flattens organizer data; `formToEvent` trims data, validates required title/description/image, validates URLs, converts numeric fields, and sets `updatedAt`.
- Event image, organizer logo, and registration URLs must be HTTPS URLs or local `/images/...` paths.
- Category/location/grade/price/language values should match `frontend/src/admin/adminConfig.js`.

## Auth, Rules, Uploads

Firebase config is read from Vite env vars in `frontend/src/firebase.js`; copy `frontend/.env.example` to `.env` for local work. Required prefixes are `VITE_FIREBASE_*` and `VITE_CLOUDINARY_*`.

`firestore.rules` allows public reads from `events`; only signed-in users with `admins/{uid}` can create, update, or delete events. Clients cannot write `admins`.

Admin status is checked in `admin/AdminAuthContext.jsx` by reading `admins/{currentUser.uid}`. `ProtectedAdminRoute` blocks unauthenticated users and signed-in users missing that admin document.

`admin/cloudinary.js` uploads image files under `edubridge/events`, requires image MIME types, rejects files over 5 MB, and returns the secure Cloudinary URL.

## Styling and Assets

Global CSS import order in `main.jsx`: `reset.css`, `styles.css`, `resolutions.css`, `events.css`, `event-details.css`, `contact.css`, `profile.css`, `calendar.css`, `admin.css`, `notebook.css`. `NewHomePage` also imports `new-homepage.css` directly.

Static assets are in `frontend/public/images` and should be referenced as `/images/file.ext`.

## Commands

Run from `frontend/`:

```bash
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

The root `package-lock.json` exists, but the actual app package is `frontend/package.json`.

## Caveats for Future Agents

- Many UI strings are Georgian; some files appear as mojibake in shell output. Be careful with encoding when editing text.
- `HomePage.jsx` exists but is not routed; `/` uses `NewHomePage.jsx`.
- `EventsPage` has a visible sort select that currently does not change sorting.
- Font Awesome icons depend on the external kit script in `index.html`.
- Do not hardcode Firebase secrets; use Vite env vars.
