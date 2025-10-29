#!/bin/bash

# Custom GitHub Pages Deployment Script
# This script handles the deployment of your portfolio to GitHub Pages

set -e  # Exit on any error

echo "🚀 Starting custom GitHub Pages deployment..."

# Configuration - these will be passed as environment variables
REPO_NAME="${GITHUB_REPOSITORY:-hareeshdevulapalli/Portfolio}"
COMMIT_SHA="${GITHUB_SHA:-$(git rev-parse HEAD)}"
CUSTOM_DOMAIN="hareeshd.dev"
BUILD_DIR="../Portfolio/dist"

echo "📋 Configuration:"
echo "  Repository: $REPO_NAME"
echo "  Commit: $COMMIT_SHA"
echo "  Custom Domain: $CUSTOM_DOMAIN"
echo "  Build Directory: $BUILD_DIR"

# Set up git configuration
echo "⚙️ Setting up git configuration..."
git config --global user.name "GitHub Actions Bot"
git config --global user.email "actions@github.com"

# Clone the repository
echo "📥 Cloning repository..."
git clone "https://github.com/$REPO_NAME.git" ../gh-pages-repo
cd ../gh-pages-repo

# Check if gh-pages branch exists
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "✅ Switching to existing gh-pages branch"
    git checkout gh-pages
else
    echo "📝 Creating new gh-pages branch"
    git checkout --orphan gh-pages
    git rm -rf . 2>/dev/null || true
    
    # Ensure we have a proper git repository by creating an initial commit
    echo "# GitHub Pages" > README.md
    git add README.md
    git commit -m "Initial gh-pages commit" || true
fi

# Clean the directory
echo "🧹 Cleaning deployment directory..."
rm -rf * .[^.]* 2>/dev/null || true

# Copy built files
echo "📦 Copying built files..."
if [ -d "$BUILD_DIR" ]; then
    cp -r "$BUILD_DIR"/* .
    echo "✅ Files copied successfully"
else
    echo "❌ Build directory not found: $BUILD_DIR"
    exit 1
fi

# Create CNAME file for custom domain
echo "🌐 Setting up custom domain..."
echo "$CUSTOM_DOMAIN" > CNAME
echo "✅ CNAME file created for $CUSTOM_DOMAIN"

# Add all files to git
echo "📝 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️ No changes to commit"
else
    echo "💾 Committing changes..."
    git commit -m "Deploy portfolio from commit $COMMIT_SHA

    Automated deployment from GitHub Actions
    Commit: $COMMIT_SHA
    Repository: $REPO_NAME"
    echo "✅ Changes committed"
fi

# Push to GitHub Pages
echo "🚀 Pushing to GitHub Pages..."
git push origin gh-pages --force
echo "✅ Successfully deployed to GitHub Pages!"

echo "🎉 Deployment completed successfully!"
echo "🌐 Your portfolio should be available at: https://$CUSTOM_DOMAIN"
