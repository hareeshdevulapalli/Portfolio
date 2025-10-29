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

# Clone or update the gh-pages branch
echo "📥 Cloning gh-pages branch..."
if git clone --branch gh-pages --single-branch "https://github.com/$REPO_NAME.git" ../gh-pages-repo 2>/dev/null; then
    echo "✅ Successfully cloned existing gh-pages branch"
    cd ../gh-pages-repo
    git checkout gh-pages
else
    echo "📝 Creating new gh-pages branch..."
    git clone "https://github.com/$REPO_NAME.git" ../gh-pages-repo
    cd ../gh-pages-repo
    git checkout --orphan gh-pages
    git rm -rf . || true
    # Ensure we have a proper git repository
    git add .
    git commit -m "Initial commit for gh-pages branch" || true
fi

# Clean the directory
echo "🧹 Cleaning deployment directory..."
rm -rf * .[^.]* || true

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
