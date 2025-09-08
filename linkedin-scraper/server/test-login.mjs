import axios from 'axios';

async function testLogin() {
  try {
    console.log('Testing health endpoint...');
    const healthResponse = await axios.get('http://localhost:9999/api/health');
    console.log('✅ Health check:', healthResponse.data);
    
    console.log('Testing login with test user...');
    
    const response = await axios.post('http://localhost:9999/api/auth/login', {
      email: 'test@gmail.com',
      password: 'test123'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('✅ Login successful!');
    console.log('Response:', response.data);
    
  } catch (error) {
    console.log('❌ Login failed');
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Error:', error.response.data);
    } else {
      console.log('Network error:', error.message);
    }
  }
}

testLogin();
