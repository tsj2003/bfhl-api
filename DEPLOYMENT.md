# 🚀 Deployment Guide for BFHL API

This guide will help you deploy your BFHL API to various hosting platforms.

## 📋 Prerequisites

1. **GitHub Repository**: Push your code to a public GitHub repository
2. **Node.js**: Ensure your project works locally
3. **API Key/Account**: For the hosting platform you choose

## 🌐 Hosting Options

### 1. Vercel (Recommended - Free & Easy)
YY
#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy
```bash
# Navigate to your project directory
cd your-project-folder

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: bfhl-api (or any name)
# - Directory: ./ (current directory)
# - Override settings? No
```

#### Step 3: Get Your URL
After deployment, Vercel will provide you with a URL like:
```
https://your-project-name.vercel.app
```

Your API endpoint will be:
```
https://your-project-name.vercel.app/bfhl
```

### 2. Railway

#### Step 1: Connect GitHub
1. Go to [Railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"

#### Step 2: Configure
- **Repository**: Select your GitHub repo
- **Branch**: main/master
- **Build Command**: `npm install`
- **Start Command**: `npm start`

#### Step 3: Deploy
Railway will automatically deploy your app and provide a URL.

### 3. Render

#### Step 1: Create Account
1. Go to [Render.com](https://render.com)
2. Sign up with GitHub

#### Step 2: New Web Service
1. Click "New +"
2. Select "Web Service"
3. Connect your GitHub repository

#### Step 3: Configure
- **Name**: bfhl-api
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: Free

#### Step 4: Deploy
Click "Create Web Service" and wait for deployment.

### 4. Heroku

#### Step 1: Install Heroku CLI
```bash
# macOS
brew install heroku/brew/heroku

# Windows
# Download from https://devcenter.heroku.com/articles/heroku-cli
```

#### Step 2: Login & Deploy
```bash
# Login
heroku login

# Create app
heroku create your-app-name

# Add Node.js buildpack
heroku buildpacks:set heroku/nodejs

# Deploy
git push heroku main

# Open app
heroku open
```

## 🔧 Configuration Updates

### Update Personal Information
Before deploying, update these fields in `server.js`:

```javascript
// Replace with your actual information
user_id: "your_full_name_ddmmyyyy", // e.g., "john_doe_17091999"
email: "your_email@domain.com",
roll_number: "YOUR_ROLL_NUMBER"
```

### Environment Variables
Some platforms support environment variables:

```bash
# Vercel
vercel env add PORT 3000

# Railway
# Add in Railway dashboard

# Render
# Add in Render dashboard

# Heroku
heroku config:set PORT=3000
```

## 📝 Testing Your Deployed API

### 1. Health Check
```bash
curl https://your-domain.com/
```

### 2. Test Main Endpoint
```bash
curl -X POST https://your-domain.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
```

### 3. Use the HTML Tester
1. Open `test.html` in your browser
2. Update the API URL to your deployed domain
3. Test with the example cases

## 🐛 Troubleshooting

### Common Issues

#### 1. "Cannot find module" Error
- Ensure `package.json` has all dependencies
- Check if `node_modules` is in `.gitignore`

#### 2. Port Issues
- Use `process.env.PORT` in your code
- Most platforms set this automatically

#### 3. Build Failures
- Check build logs in your hosting platform
- Ensure all dependencies are in `package.json`

#### 4. CORS Issues
- The API includes CORS middleware
- If issues persist, check your hosting platform's CORS settings

### Debug Commands

#### Check Logs
```bash
# Vercel
vercel logs

# Railway
# Check in Railway dashboard

# Render
# Check in Render dashboard

# Heroku
heroku logs --tail
```

#### Local Testing
```bash
# Test locally first
npm start

# Test with curl
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["test"]}'
```

## ✅ Final Checklist

Before submitting your API:

- [ ] API is deployed and accessible
- [ ] `/bfhl` endpoint returns correct responses
- [ ] All three example cases work correctly
- [ ] Personal information is updated
- [ ] API returns status code 200 for successful requests
- [ ] All required fields are present in response
- [ ] Numbers are returned as strings
- [ ] Error handling works properly

## 🔗 Submission

1. **Test your deployed API** with the example cases
2. **Copy your API endpoint** (e.g., `https://your-domain.com/bfhl`)
3. **Submit the form**: [https://forms.office.com/r/ZeVpUYp3zV](https://forms.office.com/r/ZeVpUYp3zV)
4. **Include your GitHub repository link**

## 🎯 Example Working URLs

- Vercel: `https://bfhl-api.vercel.app/bfhl`
- Railway: `https://bfhl-api.railway.app/bfhl`
- Render: `https://bfhl-api.onrender.com/bfhl`
- Heroku: `https://bfhl-api.herokuapp.com/bfhl`

## 📞 Support

If you encounter issues:
1. Check the hosting platform's documentation
2. Review the error logs
3. Test locally first
4. Ensure all files are committed to GitHub

Good luck with your submission! 🚀
