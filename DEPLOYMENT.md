# 🚀 Vercel Deployment Guide

This guide will help you deploy your portfolio to Vercel.

## 📋 Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Node.js** - Version 18 or higher

## 🛠️ Pre-Deployment Setup

### 1. Push to GitHub
Make sure your code is pushed to a GitHub repository:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Verify Build
Test the build locally to ensure everything works:

```bash
npm run vercel-build
```

## 🚀 Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Select your GitHub repository
   - Choose "Import" for the portfolio repository

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `dist/spa`
   - **Install Command**: `npm install`

4. **Environment Variables** (if needed)
   - Add any environment variables in the "Environment Variables" section
   - For this portfolio, no environment variables are required

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new one
   - Confirm settings
   - Deploy

## ⚙️ Configuration Files

The following files have been created/configured for Vercel deployment:

### `vercel.json`
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/spa"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### `package.json` Scripts
```json
{
  "scripts": {
    "vercel-build": "vite build"
  }
}
```

## 🔧 Build Configuration

The project is configured with:
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `dist/spa`
- **Framework**: Vite + React
- **Minification**: esbuild (fast and efficient)
- **Code Splitting**: Automatic vendor, router, and UI chunks

## 📁 Project Structure

```
portfolio/
├── api/                    # Vercel API routes
│   ├── hello.js
│   └── demo.js
├── client/                 # React application
├── dist/spa/              # Build output (generated)
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies and scripts
└── vite.config.ts         # Vite configuration
```

## 🌐 Post-Deployment

### 1. Custom Domain (Optional)
- Go to your project settings in Vercel
- Navigate to "Domains"
- Add your custom domain
- Configure DNS settings as instructed

### 2. Environment Variables
- Add any production environment variables in Vercel dashboard
- Redeploy if needed

### 3. Analytics (Optional)
- Enable Vercel Analytics in project settings
- Monitor performance and user behavior

## 🔄 Automatic Deployments

Vercel automatically deploys when you:
- Push to the main branch
- Create a pull request
- Merge a pull request

## 🐛 Troubleshooting

### Build Failures
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify the build command works locally

### Routing Issues
- The `vercel.json` includes SPA routing configuration
- All routes redirect to `index.html` for client-side routing

### API Issues
- API routes are in the `/api` folder
- Test with `/api/hello` and `/api/demo` endpoints

## 📊 Performance Optimization

The build includes:
- **Code Splitting**: Separate chunks for vendor, router, and UI libraries
- **Minification**: esbuild for fast, efficient minification
- **Gzip Compression**: Automatic compression by Vercel
- **CDN**: Global content delivery network

## 🎉 Success!

Once deployed, your portfolio will be available at:
- `https://your-project-name.vercel.app`
- Or your custom domain if configured

Your portfolio is now live and ready to showcase your work! 🚀
