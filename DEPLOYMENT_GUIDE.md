# GitHub Pages Deployment Guide

## 🚀 **Complete Steps to Deploy Your Portfolio**

### **Step 1: Prepare Your Repository**

1. **Commit and push your code:**

   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Ensure your repository is public** (required for free GitHub Pages)

### **Step 2: Enable GitHub Pages**

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy when you push to main

### **Step 3: Set Up Custom Domain**

#### **Option A: Using a Subdomain (e.g., portfolio.yourdomain.com)**

1. **In your domain registrar/DNS provider:**
   - Add a CNAME record:
     - **Name**: `portfolio` (or any subdomain you want)
     - **Value**: `yourusername.github.io`
     - **TTL**: 300 (or default)

2. **In your GitHub repository:**
   - Go to Settings → Pages
   - Under **Custom domain**, enter: `portfolio.yourdomain.com`
   - Check **Enforce HTTPS**

#### **Option B: Using Root Domain (e.g., yourdomain.com)**

1. **In your domain registrar/DNS provider:**
   - Add A records pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

2. **In your GitHub repository:**
   - Go to Settings → Pages
   - Under **Custom domain**, enter: `yourdomain.com`
   - Check **Enforce HTTPS**

### **Step 4: Configure Environment Variables for Production**

Create a `.env.production` file for production-specific values:

```env
# Production Environment Variables
VITE_PERSONAL_NAME="Hareesh Devulapalli"
VITE_PERSONAL_TITLE="Software Engineer II"
VITE_PERSONAL_BIO="6+ years of experience as a Senior Full-Stack Software Engineer specializing in React, Angular, Node.js, and NestJS. Expert in building scalable, accessible applications and real-time collaboration tools with proven track record of reducing complexity by 40% and improving performance by 70%."
VITE_PERSONAL_LOCATION="San Jose, CA"

VITE_CONTACT_EMAIL="hareeshdevulapalli777@gmail.com"
VITE_CONTACT_LINKEDIN="https://linkedin.com/in/hareesh-devulapalli"
VITE_CONTACT_GITHUB="https://github.com/hareeshd"
VITE_CONTACT_PHONE="219-804-2554"

VITE_APP_NAME="Hareesh Devulapalli - Software Engineer"
VITE_APP_VERSION="1.0.0"

VITE_FEATURE_AI_ASSISTANT="true"
VITE_FEATURE_ANALYTICS="true"
VITE_FEATURE_DARK_MODE="true"

VITE_API_BASE_URL="https://your-api-domain.com"
VITE_API_TIMEOUT="5000"

VITE_ANALYTICS_ENABLED="true"
VITE_ANALYTICS_TRACKING_ID="your-analytics-id"
```

### **Step 5: Update GitHub Actions Workflow**

The workflow is already created, but you can enhance it:

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### **Step 6: DNS Propagation and Testing**

1. **Wait for DNS propagation** (can take up to 48 hours)
2. **Test your domain:**
   ```bash
   nslookup yourdomain.com
   ```
3. **Check GitHub Pages status** in repository Settings → Pages

### **Step 7: SSL Certificate**

GitHub Pages automatically provides SSL certificates for custom domains. After DNS propagation:

1. Go to Settings → Pages
2. Check **Enforce HTTPS**
3. Wait for certificate to be issued

## 🔧 **Troubleshooting**

### **Common Issues:**

1. **404 Error:**
   - Check if `dist` folder is being deployed
   - Verify GitHub Actions workflow is running

2. **DNS Not Working:**
   - Wait for propagation (up to 48 hours)
   - Check DNS records are correct
   - Use `dig` or `nslookup` to verify

3. **HTTPS Issues:**
   - Wait for SSL certificate (can take up to 24 hours)
   - Ensure DNS is pointing correctly first

4. **Environment Variables Not Working:**
   - Check `.env.production` file exists
   - Verify all required variables are set

## 📋 **Checklist**

- [ ] Repository is public
- [ ] GitHub Pages is enabled with GitHub Actions
- [ ] DNS records are configured
- [ ] Custom domain is set in GitHub Pages settings
- [ ] HTTPS is enforced
- [ ] Environment variables are configured
- [ ] GitHub Actions workflow is working
- [ ] Site is accessible at custom domain

## 🌐 **Your Portfolio URLs**

After deployment, your portfolio will be available at:

- **GitHub Pages**: `https://yourusername.github.io/repository-name`
- **Custom Domain**: `https://yourdomain.com` (or subdomain)

## 📱 **Performance Tips**

1. **Enable GitHub Pages caching**
2. **Use CDN** (GitHub Pages includes this)
3. **Optimize images** before deployment
4. **Enable gzip compression** (automatic with GitHub Pages)

Your portfolio is now ready for professional deployment! 🎉
