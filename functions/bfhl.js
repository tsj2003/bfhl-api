// Netlify Function for BFHL API
// This file should be placed in the 'functions' directory

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

exports.handler = async function(event, context) {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // Only allow POST method
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({
                is_success: false,
                error: 'Method not allowed. Only POST requests are supported.'
            })
        };
    }

    try {
        // Parse the request body
        const body = JSON.parse(event.body);
        const { data } = body;
        
        // Validate input
        if (!data || !Array.isArray(data)) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    is_success: false,
                    error: "Invalid input. 'data' must be an array."
                })
            };
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
            user_id: "Tarandeep_Singh_Juneja_22BET11026",
            email: "tarandeepjuneja11@gmail.com",
            roll_number: "22BET10026",
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: String(sum),
            concat_string: concatString
        };

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(response)
        };

    } catch (error) {
        console.error('Error processing request:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                is_success: false,
                error: "Internal server error"
            })
        };
    }
};
