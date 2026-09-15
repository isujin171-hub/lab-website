# MESY Lab Website Summary

## Overview

This project is a React/Vite website for **MESY Lab**, rebuilt to follow a deployment style similar to `https://real.hanyang.ac.kr/`.

Main entry file:

- `index.html`

Shared files:

- `src/App.jsx` - page data, routing, layout, and components
- `src/main.jsx` - React app entry point
- `src/styles.css` - global layout, navigation, dropdown, responsive styles
- `server.js` - Express server for serving the production `dist` folder with SPA fallback
- `package.json` - project scripts and dependencies

## Main Pages

The website currently includes these app routes:

- `/` - Home
- `/members` - Lab Members overview
- `/members/professor` - Professor
- `/members/student` - Student
- `/members/alumni` - Alumni
- `/research` - Research overview
- `/research/robot-manipulator`
- `/research/lidar-filtering`
- `/research/mechatronics-system-design-control`
- `/research/auto-drive-mobile-robot`
- `/publications` - Publications overview
- `/publications/international-journal`
- `/publications/domestic-journal`
- `/publications/conference-proceedings`
- `/publications/patents`
- `/projects`
- `/gallery-news`
- `/contact`

## Lab Name

The lab name was updated from **LEE Lab** to **MESY Lab** across the website.

The header brand now shows:

- Logo mark: `MESY`
- Brand name: `MESY Lab`
- Subtitle: `Intelligent Systems Research`

## Navigation

The top navigation now has hover dropdown menus for:

- Lab Members
- Research
- Publications

On desktop, dropdown menus appear when the user hovers over the parent menu item. On mobile, the dropdown items are shown inside the opened mobile menu.

## Lab Members Structure

`Lab Members` is divided into:

- Professor
- Student
- Alumni

Related routes:

- `/members` - overview page
- `/members/professor` - Professor page
- `/members/student` - Student page
- `/members/alumni` - Alumni page

## Research Structure

`Research` is divided into:

- Robot Manipulator
- LiDAR Filtering
- Mechatronics System Design & Control
- Auto Drive & Mobile Robot

Related routes:

- `/research` - overview page
- `/research/robot-manipulator`
- `/research/lidar-filtering`
- `/research/mechatronics-system-design-control`
- `/research/auto-drive-mobile-robot`

## Publications Structure

`Publications` is divided into:

- International Journal Articles
- Domestic Journal Articles
- Conference Proceedings
- Patents

Related routes:

- `/publications` - overview page
- `/publications/international-journal`
- `/publications/domestic-journal`
- `/publications/conference-proceedings`
- `/publications/patents`

## Commands

Install dependencies:

```bash
npm install
```

Run local development server:

```bash
npm run dev
```

Build production files:

```bash
npm run build
```

Run production server after building:

```bash
npm start
```

The Express server serves `dist` and supports direct links such as `/research/lidar-filtering`, similar to a Railway-hosted SPA.

## Deployment Model

The project is ready for a deployment flow similar to the REAL Lab website:

1. Build the React/Vite app with `npm run build`.
2. Serve the `dist` folder through `server.js`.
3. Deploy to Railway, Render, or another Node hosting provider.
4. Connect a custom domain such as `mesy.hanyang.ac.kr` through the domain/DNS administrator.

## Current Design

The current design uses:

- Sticky top navigation
- Responsive mobile menu
- Dropdown navigation
- Research-focused hero sections
- Card layouts for members, projects, gallery/news, and research details
- Placeholder text for professor, students, alumni, publications, projects, and contact information

## Notes For Future Updates

Recommended next edits:

- Review and update professor, student, and alumni information whenever lab membership changes.
- Review and update publication, conference, and patent records as new outputs are added.
- Replace external Unsplash images with real lab photos.
- Connect the contact form to an email service, Google Form, or backend endpoint if needed.

## Source Content Update

Public information from the existing MESY Lab website was used to replace placeholder content.

Source site:

- `https://mesy.hanyang.ac.kr/`

Updated content includes:

- Home introduction for Mechatronics System Laboratory at Hanyang University ERICA.
- Recruitment note for graduate and undergraduate students interested in robotics and mechatronics systems.
- Principal investigator information for Jihyuk Park.
- Current student names, courses, research interests, and emails.
- Alumni names, graduation years, and selected current affiliations.
- Research topics under mechatronics system design and control, robot manipulator, LiDAR filtering, and autonomous driving/mobile robot.
- Representative projects, support agencies, project periods, and funding information.
- Selected journal articles, domestic journal articles, conference proceedings, and patents.
- Contact address, email, and office phone.
