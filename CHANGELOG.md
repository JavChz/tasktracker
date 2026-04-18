# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-04-18

### Added
- **Vite Migration**: Replaced Create React App (CRA) with Vite 6 for significantly faster build times and a better development experience.
- **Tailwind CSS v4**: Integrated Tailwind CSS v4 using the new `@tailwindcss/vite` plugin for modern, high-performance styling.
- **TypeScript Conversion**: Migrated the entire codebase from JavaScript to TypeScript to improve maintainability and developer productivity.
- **Zustand State Management**: Replaced React Context API with Zustand for simpler and more performant state management.
- **Lucide React**: Added Lucide React for a modern and consistent icon set.

### Changed
- Refactored all components to functional components with TypeScript interfaces.
- Updated project structure to follow Vite conventions (e.g., `index.html` at root).
- Improved build and deployment pipeline with optimized Vite configuration.

### Removed
- Removed `react-scripts` and other legacy CRA dependencies.
- Removed legacy `serviceWorker.js`.
- Removed Context-based global state implementation.

## [0.1.0] 
### Added
- Initial release of the TaskTracker application.
- Basic task management features.
- React Context for state management.
- Deployment setup for GitHub Pages.
