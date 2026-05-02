# 🍅 Pomodoro

A simple Pomodoro timer built with React, TypeScript, Vite and Tailwind CSS.

## Features

- Three modes: **Focus**, **Short Break**, **Long Break**
- Start, pause and reset controls
- Customizable durations for each mode
- Completed sessions are logged and persisted in `localStorage`

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

The app runs on [http://localhost:5173](http://localhost:5173) by default.

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – type-check and build for production
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint

## Project Structure

```
src/
├── components/
│   ├── ModeSelector.tsx    # Switch between focus/break modes
│   ├── TimerDisplay.tsx    # Renders the countdown
│   ├── SettingsPanel.tsx   # Edit durations
│   └── SessionList.tsx     # History of completed sessions
├── App.tsx                 # Timer state and logic
├── types.ts                # Shared types
└── main.tsx                # Entry point
```
