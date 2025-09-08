import axios from 'axios';

async function testLogin() {
  try {
    console.log('Testing login with test user...');
    
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      email: 'test@test@gmail.com',
      password: 'test@123'
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
