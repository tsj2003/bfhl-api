# BFHL API - VIT Full Stack Assignment

A REST API built with Node.js for VIT's Full Stack Question Paper.

## 🚀 Live API

**API Endpoint**: https://tranquil-frangipane-484c41.netlify.app/bfhl

## 📋 Features

- POST `/bfhl` endpoint that processes arrays
- Returns categorized data (odd/even numbers, alphabets, special characters)
- Calculates sum and creates concatenated strings
- Handles all edge cases with proper error handling

## 🧪 Test Cases

### Example A: `["a", "1", "334", "4", "R", "$"]`
```json
{
  "is_success": true,
  "user_id": "Tarandeep_Singh_Juneja_22BET11026",
  "email": "tarandeepjuneja11@gmail.com",
  "roll_number": "22BET10026",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### Example B: `["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]`
```json
{
  "is_success": true,
  "user_id": "Tarandeep_Singh_Juneja_22BET11026",
  "email": "tarandeepjuneja11@gmail.com",
  "roll_number": "22BET10026",
  "odd_numbers": ["5"],
  "even_numbers": ["2", "4", "92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

### Example C: `["A", "ABcD", "DOE"]`
```json
{
  "is_success": true,
  "user_id": "Tarandeep_Singh_Juneja_22BET11026",
  "email": "tarandeepjuneja11@gmail.com",
  "roll_number": "22BET10026",
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": ["A", "ABCD", "DOE"],
  "special_characters": [],
  "sum": "0",
  "concat_string": "EoDdCbAa"
}
```

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Hosting**: Netlify (Serverless Functions)
- **Language**: JavaScript

## 📁 Project Structure

```
├── functions/bfhl.js    # Netlify serverless function
├── public/index.html    # Landing page
├── netlify.toml        # Netlify configuration
└── package.json        # Dependencies
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/tsj2003/bfhl-api.git
   cd bfhl-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Test locally**
   ```bash
   npm start
   ```

4. **Test the API**
   ```bash
   curl -X POST http://localhost:3000/bfhl \
     -H "Content-Type: application/json" \
     -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
   ```

## 🌐 Deployment

The API is deployed on Netlify and automatically updates when code is pushed to the main branch.

**Live URL**: https://tranquil-frangipane-484c41.netlify.app/bfhl

## 📝 Assignment Details

- **Course**: VIT Full Stack Development
- **Student**: Tarandeep Singh Juneja
- **Roll Number**: 22BET10026
- **Email**: tarandeepjuneja11@gmail.com

## ✅ Requirements Met

- [x] POST `/bfhl` endpoint
- [x] All 10 required response fields
- [x] Proper error handling
- [x] Numbers returned as strings
- [x] Correct user_id format
- [x] Status code 200 for success
- [x] Hosted on cloud platform (Netlify)

---

**Built with ❤️ for VIT Full Stack Assignment**
