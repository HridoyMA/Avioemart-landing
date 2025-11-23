# Avioemart Landing Page

AI-Powered Aviation Marketplace landing page built with Next.js 14 (App Router) + React + TypeScript + Tailwind CSS.

## Getting Started

### Installation

```bash
yarn install
```

### Setup Git Hooks (Pre-commit)

After installation, set up Husky for pre-commit hooks:

```bash
yarn prepare
```

This will set up Git hooks that automatically:

- Format code with Prettier
- Fix linting errors
- Run TypeScript type checking
- Run build check

**Note:** If you skip this step, pre-commit hooks won't work, but you can still commit manually.

### Development

```bash
yarn dev
```

### Build

```bash
yarn build
```

### Start Production Server

```bash
yarn start
```

### Code Quality

```bash
# Format code
yarn format

# Check formatting
yarn format:check

# Lint code
yarn lint

# Fix linting errors
yarn lint:fix

# Type check
yarn type-check
```

## Deployment to Vercel

Next.js projects are optimized for Vercel deployment. The project includes a `vercel.json` configuration file.

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy from project directory**:

   ```bash
   cd NextDemo/avioemart-landing
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No** (for first deployment)
   - Project name? (Press Enter for default or enter custom name)
   - Directory? (Press Enter - it will use current directory)
   - Override settings? **No**

5. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard (Git Integration)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Go to [vercel.com](https://vercel.com)** and sign in

3. **Click "Add New Project"**

4. **Import your repository**:
   - Select the repository containing this project
   - Vercel will auto-detect it as a Next.js project

5. **Configure project settings** (usually auto-detected):
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `NextDemo/avioemart-landing` (if repo is at root) or leave blank if repo is the project itself
   - **Build Command**: `yarn build` (or `npm run build`)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `yarn install` (or `npm install`)

6. **Click "Deploy"**

7. **Your site will be live** at `https://your-project-name.vercel.app`

### Environment Variables

If you need environment variables:

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Project Structure

```
app/
├── layout.tsx      # Root layout with metadata
├── page.tsx        # Home page
└── globals.css     # Global styles

src/
├── components/     # React components
│   ├── layout/    # Header, Footer, MobileMenu
│   ├── sections/  # Page sections
│   ├── ui/        # UI components
│   └── icons/     # Icon components
└── lib/           # Utilities, constants, hooks, types
```

## Migration Notes

This project has been migrated from Vite to Next.js App Router. Key changes:

- **App Router**: Uses Next.js 14 App Router architecture with `app/` directory
- **Server Components**: Most components are server components by default
- **Client Components**: Components using hooks (`useState`, `useEffect`, etc.) are marked with `'use client'`
- **Routing**: Uses Next.js file-based routing
- **Metadata**: SEO metadata is handled via Next.js metadata API
- **Link Component**: Uses Next.js `Link` component for client-side navigation
