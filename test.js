// Test file to demonstrate the API functionality
// Run this after starting the server: node test.js

const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Test cases from the question paper
const testCases = [
    {
        name: "Example A",
        data: ["a", "1", "334", "4", "R", "$"]
    },
    {
        name: "Example B", 
        data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
    },
    {
        name: "Example C",
        data: ["A", "ABcD", "DOE"]
    }
];

async function testAPI() {
    console.log('🚀 Testing BFHL API...\n');
    
    for (const testCase of testCases) {
        try {
            console.log(`📝 Testing: ${testCase.name}`);
            console.log(`Input: ${JSON.stringify(testCase.data)}`);
            
            const response = await axios.post(`${BASE_URL}/bfhl`, {
                data: testCase.data
            });
            
            console.log(`✅ Response Status: ${response.status}`);
            console.log(`Response Body:`);
            console.log(JSON.stringify(response.data, null, 2));
            console.log('\n' + '='.repeat(50) + '\n');
            
        } catch (error) {
            console.error(`❌ Error testing ${testCase.name}:`, error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            console.log('\n' + '='.repeat(50) + '\n');
        }
    }
}

// Health check
async function healthCheck() {
    try {
        const response = await axios.get(BASE_URL);
        console.log('🏥 Health Check:', response.data);
        console.log('\n' + '='.repeat(50) + '\n');
    } catch (error) {
        console.error('❌ Health check failed:', error.message);
        console.log('\n' + '='.repeat(50) + '\n');
    }
}

// Run tests
async function runTests() {
    await healthCheck();
    await testAPI();
}

// Only run if this file is executed directly
if (require.main === module) {
    runTests().catch(console.error);
}

module.exports = { testAPI, healthCheck };
