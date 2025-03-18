# Cover Letter Generator

A small application for generating cover letters for job applications. This app helps users create and manage cover letters, with a goal of creating at least 5 letters.

## Features

- Create and manage cover letters
- Local storage persistence
- Progress tracking toward the goal of 5 letters
- Responsive design for all device sizes
- AI-powered text generation using OpenAI

## Technical Stack

- React
- TypeScript
- Styled Components
- Vite
- OpenAI API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cover-letter-generator
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Set up environment variables:

```bash
# Copy the example .env file
cp .env.example .env
```

Then edit the `.env` file to add your OpenAI API key:

```
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/components` - Reusable UI components
- `src/screens` - Main application screens
- `src/styles` - Global styles and theme
- `src/utils` - Utility functions
- `src/store` - State management with Zustand

## Code Formatting

This project uses Prettier and ESLint for code formatting and linting:

- Prettier - For consistent code formatting
- ESLint - For catching errors and enforcing best practices

### Available Scripts

- `npm run format` - Format all files
- `npm run format:check` - Check if files are formatted
- `npm run lint` - Run ESLint
- `npm run fix` - Fix ESLint issues and format files

### Pre-commit Hook

The project uses husky and lint-staged to automatically format and lint files before commits.

## Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.
