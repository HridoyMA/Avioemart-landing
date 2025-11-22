# Avioemart Landing Page

AI-Powered Aviation Marketplace landing page built with Vite + React + TypeScript + Tailwind CSS.

## Getting Started

### Installation

```bash
yarn install
```

### Development

```bash
yarn dev
```

### Build

```bash
yarn build
```

### Preview

```bash
yarn preview
```

## Deployment to Vercel

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
   - Vercel will auto-detect it as a Vite project

5. **Configure project settings**:
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `NextDemo/avioemart-landing` (if repo is at root) or leave blank if repo is the project itself
   - **Build Command**: `yarn build` (or `npm run build`)
   - **Output Directory**: `dist`
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

- **Vite** - Build tool
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/     # React components
├── lib/            # Utilities and constants
├── styles/         # Additional styles
└── App.tsx         # Main app component
```

## Notes

- The `vercel.json` file is configured for SPA routing (all routes redirect to index.html)
- Vercel automatically handles the build and deployment process
- Each push to your main branch will trigger a new deployment

