# Knightworks
[![Live](https://img.shields.io/badge/Live-knightworks.dev-2ea44f?logo=google-chrome&logoColor=white)](https://knightworks.dev)

**Reforge. Refactor. Release.**  
Clean, reliable apps — forged for performance, built to endure.

## Overview
Personal portfolio. Built as a fast, modern SPA with client-side routing, optimized images, and clean visual hierarchy.

## Tech Stack

[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000)](https://react.dev/)
[![Vite 7](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=fff)](https://vitejs.dev/)
[![React Router v7](https://img.shields.io/badge/React%20Router-v7-CA4245?logo=reactrouter&logoColor=fff)](https://reactrouter.com/)
[![Node 22](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=fff)](https://nodejs.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare&logoColor=fff)](https://pages.cloudflare.com/)
[![WebP Images](https://img.shields.io/badge/Images-WebP-0A84FF?logo=google-photos&logoColor=fff)](https://developers.google.com/speed/webp)

- **Frontend:** React 19, Vite 7, React Router v7
- **Styling:** Tailwind-style utility classes (custom tokens)
- **Build/Assets:** Vite asset pipeline, responsive WebP images
- **Hosting:** Cloudflare Pages (+ Pages Functions for SPA routing)
- **Domains:** Cloudflare DNS, Bulk Redirect (www → apex)
- **Analytics:** (optional) privacy-friendly script

## Scripts
```bash
npm install
npm run dev       # local dev (Vite)
npm run build     # production build
npm run preview   # preview production build
node scripts/build-images.mjs # convert raw-images → responsive WebP in src/assets
```