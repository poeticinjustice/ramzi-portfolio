# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Development server on port 5172 with Turbopack
npm run build    # Production build with Turbopack
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a Next.js 15 portfolio site using App Router, TypeScript, and Tailwind CSS. The architecture focuses on:

### Theme System (Flash Prevention)
The theme implementation prevents flash of wrong theme on page load/navigation:

1. **Inline script in layout.tsx** runs before React hydration to immediately apply the correct theme class to `<html>` based on localStorage or system preference
2. **`suppressHydrationWarning`** on `<html>` tag prevents React hydration warnings from the inline script
3. **MermaidDiagram component** uses MutationObserver to watch for theme class changes on `<html>` and re-renders diagrams accordingly
4. **CSS custom properties** in globals.css define theme colors and gradients that respond to `.dark` class

### ExpandableStory Component
Project backgrounds use this component which accepts:
- `teaser`: string (always shown when collapsed)
- `fullStory`: string | ReactNode (supports both plain strings and JSX with `<p>` tags)
- When `fullStory` is JSX, component renders in `<div>` with `space-y-4` to avoid nested `<p>` tags
- Use `&apos;` for apostrophes in JSX to avoid ESLint warnings

### Project Page Structure
All project pages follow this consistent pattern:
1. Background section with ExpandableStory (casual, conversational tone)
2. ProjectGallery with clickable images
3. Key Features section
4. Technology Stack section
5. State Management Flow diagram (using MermaidDiagram)
6. Project Highlights section
7. ImageModal component

### Content Tone Guidelines
- **Backgrounds**: Intentionally casual and conversational to balance technical content elsewhere
- **Technical sections**: Detailed with specific version numbers and architectural details
- Keep backgrounds authentic and personal, not corporate/marketing language

## Component Patterns

### MermaidDiagram
- Detects dark/light theme on mount and watches for changes via MutationObserver
- Re-renders diagrams when theme changes
- Uses unique IDs to prevent conflicts when multiple diagrams on same page
- Theme colors defined in component to match portfolio design

### Navigation & Theme Toggle
- Theme state managed via localStorage with system preference fallback
- `useTheme` hook provides theme state and toggle function
- Theme persists across page navigations without flash

## Deployment

- Hosted on Vercel
- Domain: ramzikanazi.com (registered at Cloudflare)
- Cloudflare DNS must use "DNS only" (gray cloud, not proxied) to work with Vercel
- Use Vercel's unique CNAME record (found in Vercel project settings → Domains)

## Notes

- Custom gradients in globals.css (.hero-gradient, .section-gradient) for light/dark themes
- All pages are statically generated
- Robots are disabled (index: false) in metadata
- Zero TypeScript errors and zero linting errors is the standard
