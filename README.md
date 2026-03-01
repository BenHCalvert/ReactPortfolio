# Ben Calvert Portfolio

A personal portfolio site built with React. Live at [benhcalvert.github.io/ReactPortfolio](https://benhcalvert.github.io/ReactPortfolio).

## Prerequisites

- [Node.js](https://nodejs.org/) >= 16 (Node 18 recommended — see `.nvmrc`)
- npm (comes with Node.js)

If you use [nvm](https://github.com/nvm-sh/nvm), you can switch to the correct version with:

```bash
nvm use
```

## Developer Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/BenHCalvert/ReactPortfolio.git
   cd ReactPortfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

## Running Locally

Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000) and reload automatically on file changes.

## Other Scripts

| Command | Description |
|---|---|
| `npm test` | Run the test suite in watch mode |
| `npm run build` | Create a production build in the `build/` directory |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Deployment

The site is hosted on GitHub Pages. To deploy:

```bash
npm run deploy
```

This runs `npm run build` first, then publishes the `build/` directory to the `gh-pages` branch.
