#!/bin/bash

# BFHL API Deployment Script
# This script helps you deploy your API to various platforms

echo "🚀 BFHL API Deployment Script"
echo "=============================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"
echo ""

# Test locally
echo "🧪 Testing API locally..."
echo "Starting server in background..."
npm start &
SERVER_PID=$!

# Wait for server to start
sleep 5

# Test health endpoint
echo "Testing health endpoint..."
if curl -s http://localhost:3000/ > /dev/null; then
    echo "✅ Local server is running"
else
    echo "❌ Local server failed to start"
    kill $SERVER_PID 2>/dev/null
    exit 1
fi

# Test main endpoint
echo "Testing main endpoint..."
TEST_RESPONSE=$(curl -s -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}')

if echo "$TEST_RESPONSE" | grep -q "is_success.*true"; then
    echo "✅ API endpoint is working correctly"
else
    echo "❌ API endpoint test failed"
    echo "Response: $TEST_RESPONSE"
    kill $SERVER_PID 2>/dev/null
    exit 1
fi

# Stop local server
echo "Stopping local server..."
kill $SERVER_PID 2>/dev/null

echo ""
echo "🎉 Local testing completed successfully!"
echo ""

# Deployment options
echo "🌐 Choose your deployment platform:"
echo "1. Vercel (Recommended - Free & Easy)"
echo "2. Railway"
echo "3. Render"
echo "4. Heroku"
echo "5. Manual deployment"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Deploying to Vercel..."
        echo "Installing Vercel CLI..."
        npm install -g vercel
        
        if [ $? -eq 0 ]; then
            echo "✅ Vercel CLI installed"
            echo "Starting deployment..."
            vercel
        else
            echo "❌ Failed to install Vercel CLI"
            echo "Please install manually: npm install -g vercel"
        fi
        ;;
    2)
        echo ""
        echo "🚂 Deploying to Railway..."
        echo "Please follow these steps:"
        echo "1. Go to https://railway.app"
        echo "2. Sign in with GitHub"
        echo "3. Click 'New Project'"
        echo "4. Select 'Deploy from GitHub repo'"
        echo "5. Select your repository"
        echo "6. Set Build Command: npm install"
        echo "7. Set Start Command: npm start"
        ;;
    3)
        echo ""
        echo "🎨 Deploying to Render..."
        echo "Please follow these steps:"
        echo "1. Go to https://render.com"
        echo "2. Sign up with GitHub"
        echo "3. Click 'New +' and select 'Web Service'"
        echo "4. Connect your GitHub repository"
        echo "5. Set Build Command: npm install"
        echo "6. Set Start Command: npm start"
        ;;
    4)
        echo ""
        echo "🦸 Deploying to Heroku..."
        echo "Please follow these steps:"
        echo "1. Install Heroku CLI: brew install heroku/brew/heroku"
        echo "2. Login: heroku login"
        echo "3. Create app: heroku create your-app-name"
        echo "4. Deploy: git push heroku main"
        ;;
    5)
        echo ""
        echo "📋 Manual Deployment Steps:"
        echo "1. Push your code to GitHub:"
        echo "   git add ."
        echo "   git commit -m 'Initial commit'"
        echo "   git push origin main"
        echo ""
        echo "2. Choose a hosting platform from the list above"
        echo "3. Follow their deployment instructions"
        echo "4. Test your deployed API"
        echo "5. Submit the form with your API endpoint"
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "📝 Next Steps:"
echo "1. Complete the deployment process"
echo "2. Test your deployed API with the example cases"
echo "3. Update personal information in server.js if needed"
echo "4. Submit the form: https://forms.office.com/r/ZeVpUYp3zV"
echo ""
echo "🎯 Good luck with your submission!"
