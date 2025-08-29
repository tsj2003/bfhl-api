# 🚀 Netlify Deployment Guide for BFHL API

This guide will help you deploy your BFHL API to Netlify using serverless functions.

## 📋 Prerequisites

1. **GitHub Repository**: Your code must be in a public GitHub repository
2. **Netlify Account**: Sign up at [netlify.com](https://netlify.com)
3. **Node.js**: Ensure your project works locally

## 🏗️ Project Structure for Netlify

Your project now has the correct structure for Netlify:

```
bfhl-api/
├── functions/
│   └── bfhl.js          # Netlify serverless function
├── public/
│   └── index.html       # Landing page
├── netlify.toml         # Netlify configuration
├── package.json         # Dependencies
└── README.md           # Documentation
```

## 🌐 Deploy to Netlify

### **Step 1: Push to GitHub**

First, commit and push your code to GitHub:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Add Netlify deployment configuration"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### **Step 2: Deploy on Netlify**

1. **Go to [netlify.com](https://netlify.com)** and sign in
2. **Click "New site from Git"**
3. **Choose GitHub** and authorize Netlify
4. **Select your repository**
5. **Configure build settings**:
   - **Build command**: Leave empty (not needed for functions)
   - **Publish directory**: `public`
   - **Functions directory**: `functions`
6. **Click "Deploy site"**

### **Step 3: Get Your API URL**

After deployment, Netlify will provide you with a URL like:
```
https://your-site-name.netlify.app
```

Your API endpoint will be:
```
https://your-site-name.netlify.app/bfhl
```

## 🧪 Test Your Deployed API

### **Method 1: Use the Web Interface**
1. Visit your Netlify site URL
2. Use the built-in test form
3. Test with the example cases

### **Method 2: Use curl**
```bash
# Test Example A
curl -X POST https://your-site-name.netlify.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'

# Test Example B
curl -X POST https://your-site-name.netlify.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]}'

# Test Example C
curl -X POST https://your-site-name.netlify.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A", "ABcD", "DOE"]}'
```

### **Method 3: Use the HTML Tester**
1. Open `test.html` in your browser
2. Update the API URL to your Netlify domain
3. Test with the example cases

## 🔧 How Netlify Functions Work

### **Serverless Architecture**
- **No server management** - Netlify handles everything
- **Automatic scaling** - Functions scale based on demand
- **Pay-per-use** - Free tier includes generous limits

### **Function Structure**
```javascript
exports.handler = async function(event, context) {
    // Your API logic here
    return {
        statusCode: 200,
        headers: { /* CORS headers */ },
        body: JSON.stringify(response)
    };
};
```

### **Request/Response Format**
- **event.body**: Contains the request body
- **event.httpMethod**: HTTP method (GET, POST, etc.)
- **Return format**: Must include statusCode, headers, and body

## 📊 Netlify Free Tier Limits

- **Build minutes**: 300 minutes/month
- **Function invocations**: 125,000/month
- **Bandwidth**: 100GB/month
- **Function execution time**: 10 seconds max

## 🚨 Important Notes

### **1. Cold Starts**
- First request might be slower (cold start)
- Subsequent requests are faster
- Functions stay warm for a few minutes

### **2. Timeout Limits**
- Functions have a 10-second timeout
- Your API should complete well within this limit

### **3. Environment Variables**
- Set environment variables in Netlify dashboard
- Access via `process.env.VARIABLE_NAME`

## 🐛 Troubleshooting

### **Common Issues**

#### **1. Function Not Found (404)**
- Ensure `functions/bfhl.js` exists
- Check `netlify.toml` configuration
- Verify function name matches file name

#### **2. CORS Issues**
- Functions include CORS headers
- If issues persist, check browser console

#### **3. Build Failures**
- Check Netlify build logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### **Debug Commands**

#### **Check Function Logs**
1. Go to Netlify dashboard
2. Click on your site
3. Go to "Functions" tab
4. Check function logs for errors

#### **Local Testing**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Test locally
netlify dev
```

## ✅ Final Checklist

Before submitting your API:

- [ ] Code is pushed to GitHub
- [ ] Netlify deployment is successful
- [ ] `/bfhl` endpoint returns correct responses
- [ ] All three example cases work correctly
- [ ] Personal information is updated
- [ ] API returns status code 200 for successful requests
- [ ] All required fields are present in response
- [ ] Numbers are returned as strings
- [ ] Error handling works properly

## 🔗 Submission

1. **Test your deployed API** with the example cases
2. **Copy your API endpoint** (e.g., `https://your-site.netlify.app/bfhl`)
3. **Submit the form**: [https://forms.office.com/r/ZeVpUYp3zV](https://forms.office.com/r/ZeVpUYp3zV)
4. **Include your GitHub repository link**

## 🎯 Example Working URLs

- Netlify: `https://bfhl-api.netlify.app/bfhl`
- Netlify: `https://your-project-name.netlify.app/bfhl`

## 📞 Support

If you encounter issues:
1. Check Netlify build logs
2. Verify function configuration
3. Test locally with `netlify dev`
4. Check function logs in Netlify dashboard

## 🎉 Benefits of Netlify

- ✅ **Free hosting** with generous limits
- ✅ **Automatic deployments** from GitHub
- ✅ **Global CDN** for fast responses
- ✅ **No server management** required
- ✅ **Built-in analytics** and monitoring
- ✅ **Easy rollbacks** if needed

**Good luck with your VIT Full Stack submission! 🚀**
