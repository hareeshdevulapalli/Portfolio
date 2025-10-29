#!/bin/bash

# Environment Setup Script for Portfolio
# This script helps set up environment variables for the portfolio

echo "🚀 Setting up environment variables for Portfolio..."

# Check if .env already exists
if [ -f ".env" ]; then
    echo "⚠️  .env file already exists. Backing up to .env.backup"
    cp .env .env.backup
fi

# Create .env file from example
if [ -f "env.example" ]; then
    cp env.example .env
    echo "✅ Created .env file from env.example"
else
    echo "❌ env.example file not found!"
    exit 1
fi

echo ""
echo "📝 Please edit the .env file with your personal information:"
echo "   - VITE_PERSONAL_NAME"
echo "   - VITE_PERSONAL_TITLE" 
echo "   - VITE_PERSONAL_BIO"
echo "   - VITE_CONTACT_EMAIL"
echo "   - VITE_CONTACT_LINKEDIN"
echo "   - VITE_CONTACT_GITHUB"
echo ""
echo "🔧 You can edit it with: nano .env or your preferred editor"
echo ""
echo "🚀 After editing, run: npm run dev"
