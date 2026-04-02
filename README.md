# Game Hub

GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more.

[![image](public/images/gamehub-cover.png)](https://gamehub.jeffolivier.com)

Game Hub is a platform designed to streamline your gaming experience by providing easy sorting options based on genres and release dates, as well as a powerful search feature to find your favorite games in no time! This project is a simplified replica of the [RAWG's site](https://rawg.io/), which uses the non-commercial access of their [API](https://rawg.io/apidocs) and is based on the Mosh Hamedani's course [React 18 and TypeScript](https://codewithmosh.com/p/ultimate-react-part1).

Under the hood, GameHub is built with React 18 and TypeScript, using TanStack React Query for server-state caching and Zustand for client-side filter state. A custom generic `APIClient<T>` class wraps Axios to provide type-safe, reusable API calls across every endpoint. Games load progressively through infinite scroll pagination, while genres and platforms are cached for 24 hours to minimize unnecessary API requests — small decisions that add up to a noticeably snappy experience.

The architecture separates concerns cleanly: a services layer handles external integrations, typed entity interfaces define every data shape, and custom hooks abstract all data-fetching logic away from the UI. Components remain purely presentational. Chakra UI provides a responsive, accessible component foundation with a custom dark-mode-first theme, and skeleton loaders keep the interface feeling responsive while data is in flight.

## Features

- Platform & genre filters to easily find games that match your preferences.
- Infinite scroll pagination for seamless browsing of large game libraries.
- Game info includes summary, platform, genre, publisher, Metacritic ratings, trailers, and screenshots.
- Dark/Light mode switch.

## Tech Stack

- React 18 / TypeScript
- Vite for fast development and optimized production builds.
- TanStack React Query for server-state management and caching.
- Zustand for lightweight client-side filter state.
- Axios with a custom generic `APIClient<T>` for type-safe API integration.
- Chakra UI for a responsive, accessible, and themeable component library.
- React Router for client-side navigation.
- Responsive design ensuring an optimal experience across all devices.

![image](public/images/gamehub-game.png)

## Installation

To get started with GameHub, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.
4. Create a `.env.local` file in the project root and add your API key:
   ```
   VITE_RAWG_API_URL=https://api.rawg.io/api
   VITE_RAWG_API_KEY=your_api_key_here
   ```
5. Run `npm run dev` to start the web server.
