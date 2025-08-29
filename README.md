# BFHL API - VIT Full Stack Question Paper

A REST API built with Node.js that processes arrays and returns categorized data according to VIT's specifications.

## Features

- **POST /bfhl** endpoint that processes input arrays
- Categorizes data into odd numbers, even numbers, alphabets, and special characters
- Calculates sum of numbers
- Creates concatenated string with alternating caps in reverse order
- Returns user information and operation status

## API Response Structure

The API returns the following fields:
1. `is_success` - Operation status (true/false)
2. `user_id` - User identifier in format: full_name_ddmmyyyy
3. `email` - User's email address
4. `roll_number` - College roll number
5. `odd_numbers` - Array of odd numbers (as strings)
6. `even_numbers` - Array of even numbers (as strings)
7. `alphabets` - Array of alphabets (converted to uppercase)
8. `special_characters` - Array of special characters
9. `sum` - Sum of all numbers (as string)
10. `concat_string` - Concatenated alphabets in reverse order with alternating caps

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bfhl-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will start on port 3000 (or the port specified in the PORT environment variable).

## API Usage

### Endpoint
- **URL**: `POST /bfhl`
- **Base URL**: `http://localhost:3000` (local) or your hosted domain

### Example Request

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

### Example Response

```json
{
  "is_success": true,
  "user_id": "tarandeep_singh_juneja_17091999",
  "email": "tarandeep@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Test Cases

The API handles various input scenarios:

1. **Mixed data**: Numbers, alphabets, and special characters
2. **Only alphabets**: Returns empty number arrays and concatenated string
3. **Only numbers**: Returns categorized numbers and sum
4. **Empty array**: Returns empty arrays with sum 0

## Error Handling

- **400 Bad Request**: Invalid input format
- **500 Internal Server Error**: Server-side errors
- All errors include `is_success: false` and error details

## Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

### Railway
1. Connect your GitHub repository
2. Railway will auto-deploy on push

### Render
1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`

## Environment Variables

- `PORT`: Server port (default: 3000)

## Dependencies

- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **nodemon**: Development auto-reload (dev dependency)

## Project Structure

```
bfhl-api/
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
└── README.md         # This file
```

## Customization

Before deploying, update the following in `server.js`:
- `user_id`: Your full name and date of birth
- `email`: Your actual email address
- `roll_number`: Your actual college roll number

## License

MIT License
