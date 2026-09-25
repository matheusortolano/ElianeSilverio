# Eliane Silvério

Professional responsive landing page developed for **Eliane Silvério**, a specialist in Health and Beauty Business.

Built with React, TypeScript, Vite and custom CSS.

This project is front-end only and does not currently include a backend.

---

## Overview

The website was designed as a professional positioning and personal branding landing page.

Its structure presents Eliane's professional profile, expertise, strategic positioning, areas of work, business solutions and contact channels through a responsive and accessible interface.

The project focuses on:

- professional presentation;
- personal branding;
- reusable React components;
- responsive design;
- centralized content management;
- accessibility;
- semantic HTML;
- performance and maintainability.

---

## Tech Stack

- React
- TypeScript
- Vite
- HTML5
- CSS3
- `@fontsource/montserrat`
- Responsive Design

No Tailwind CSS or backend is used.

---

## Running the Project

Requires a Node.js version compatible with Vite 7 and npm.

```bash
npm install
npm run dev
```

Open the local URL displayed in the terminal.

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

The generated production files are stored in:

```text
dist/
```

---

## Project Structure

```text
ElianeSilverio/
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   ├── data/
│   │   └── siteContent.ts
│   ├── pages/
│   │   └── HomePage.tsx
│   ├── styles/
│   │   ├── global.css
│   │   └── tokens.css
│   ├── types.ts
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Content Management

Most editable website content is centralized in:

```text
src/data/siteContent.ts
```

This includes:

- name;
- professional title;
- navigation;
- statistics;
- positioning;
- areas of expertise;
- solutions;
- calls to action;
- contact information;
- photography configuration.

This approach allows content updates without modifying the individual React components.

---

## Design System

Visual tokens are centralized in:

```text
src/styles/tokens.css
```

This file controls values such as:

- colors;
- typography;
- spacing;
- maximum content width;
- border radius.

General layout, components and responsive behavior are defined in:

```text
src/styles/global.css
```

---

## Images

Photography files are stored in:

```text
public/images/
```

The corresponding content configuration is defined through the `photos` structure inside:

```text
src/data/siteContent.ts
```

Each image can define:

```text
src
alt
width
height
```

Image framing is handled through CSS without distorting the original proportions.

The project currently uses photographic assets extracted from the available visual reference material.

Original high-resolution photographs can replace these assets later without changing the application structure.

---

## Contact Configuration

Contact information is configured in:

```text
src/data/siteContent.ts
```

### WhatsApp

Configure:

```ts
contact.whatsapp
```

The value should contain the country code, area code and phone number without formatting characters.

The application automatically generates the corresponding `wa.me` URL.

### Email

Configure:

```ts
contact.email
```

Only the email address is required.

### LinkedIn

Configure:

```ts
contact.linkedin
```

Use the complete LinkedIn profile URL.

Until valid contact information is provided, the application intentionally displays placeholder values rather than creating fake contact destinations.

The primary CTA prioritizes WhatsApp and can use email as an alternative contact channel.

---

## Typography

Museo Sans is defined as the preferred font family when available.

Montserrat is included as a freely licensed fallback through:

```text
@fontsource/montserrat
```

The font is served locally by the application, avoiding an external Google Fonts dependency.

No proprietary font files are distributed with the project.

---

## Accessibility

Accessibility was considered throughout the interface.

The project includes:

- semantic HTML;
- a single primary `H1`;
- visible keyboard focus;
- image alternative text;
- skip-to-content navigation;
- keyboard-accessible menu interactions;
- reduced-motion support;
- responsive navigation.

The mobile menu supports:

- expanded state announcements;
- focus containment;
- closing with `Escape`;
- closing after selecting a navigation anchor;
- automatic closing when switching to desktop layout.

The website navigation uses anchor links within the main page.

---

## Responsive Design

The interface was designed and tested across multiple viewport sizes.

Validation included:

```text
375px
768px
1024px
1440px
1920px
```

The implementation was checked for:

- horizontal overflow;
- image loading;
- anchor navigation;
- semantic heading structure;
- runtime errors;
- responsive layout behavior.

---

## SEO

Basic SEO metadata is configured directly in:

```text
index.html
```

This includes:

- page title;
- page description.

Because these values are available directly in the HTML document, basic metadata remains accessible before the React application is executed.

The metadata should be updated whenever the primary professional positioning changes.

---

## Content Integrity

The project intentionally avoids inventing professional information.

No fictional:

- clients;
- companies;
- revenue figures;
- testimonials;
- quantitative results;
- contact information

were added to the website.

Business development is presented only as a strategic area when supported by the available project content.

---

## Validation

The project was validated with:

```bash
npm install
npm run build
```

The TypeScript and Vite production build completed successfully.

Browser checks were also performed for desktop and mobile layouts.

Validation included:

- responsive behavior;
- mobile navigation;
- `Escape` key interaction;
- anchor navigation;
- image loading;
- heading structure;
- unavailable-contact messaging;
- absence of horizontal overflow.

---

## Before Real-World Deployment

Before using the website as a production professional page, the following information should be reviewed or completed:

- WhatsApp;
- email;
- LinkedIn;
- final photography;
- production domain;
- SEO metadata.

A production deployment may also include analytics, additional SEO improvements and a backend or external form-processing solution if required.

---

## Future Improvements

Possible future improvements include:

- CMS integration;
- contact form backend;
- analytics integration;
- additional SEO optimization;
- structured data;
- automated tests;
- image optimization;
- production deployment;
- additional professional case studies.

---

## Project Status

Portfolio project completed and available for future improvements.

The current version focuses on responsive front-end development, personal branding, accessibility and structured content management.