const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to check if a string is a number
function isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

// Helper function to check if a string is an alphabet
function isAlphabet(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// Helper function to check if a string is a special character
function isSpecialCharacter(str) {
    return /^[^a-zA-Z0-9\s]+$/.test(str);
}

// Helper function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// Helper function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// Helper function to create concatenated string with alternating caps
function createAlternatingCapsString(alphabets) {
    let result = '';
    for (let i = 0; i < alphabets.length; i++) {
        const char = alphabets[i];
        if (i % 2 === 0) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }
    return result;
}

// Main endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input. 'data' must be an array."
            });
        }

        // Initialize arrays and variables
        const oddNumbers = [];
        const evenNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let sum = 0;
        let allAlphabets = '';

        // Process each element in the data array
        data.forEach(item => {
            const str = String(item);
            
            if (isNumber(str)) {
                const num = parseFloat(str);
                if (isEven(num)) {
                    evenNumbers.push(str);
                } else {
                    oddNumbers.push(str);
                }
                sum += num;
            } else if (isAlphabet(str)) {
                alphabets.push(str.toUpperCase());
                allAlphabets += str;
            } else if (isSpecialCharacter(str)) {
                specialCharacters.push(str);
            }
        });

        // Create concatenated string with alternating caps (reverse order)
        const reversedAlphabets = allAlphabets.split('').reverse().join('');
        const concatString = createAlternatingCapsString(reversedAlphabets);

        // Create response
        const response = {
            is_success: true,
            user_id: "Tarandeep_Singh_Juneja_22BET11026", // Replace with your actual name and DOB
            email: "tarandeepjuneja11@gmail.com", // Replace with your actual email
            roll_number: "22BET10026", // Replace with your actual roll number
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: String(sum),
            concat_string: concatString
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        message: "BFHL API is running",
        endpoint: "/bfhl",
        method: "POST"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/bfhl`);
});

module.exports = app;
