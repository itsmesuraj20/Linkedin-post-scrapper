import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const router = express.Router();

// Admin endpoint to create test user
router.post('/create-test-user', async (req, res) => {
  try {
    // Check if test user already exists
    const existingUser = await User.findOne({ email: 'test@test@gmail.com' });
    if (existingUser) {
      return res.status(400).json({ 
        message: 'Test user already exists',
        user: {
          email: existingUser.email,
          username: existingUser.username
        }
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash('test@123', 10);

    // Create test user
    const testUser = new User({
      username: 'testuser',
      email: 'test@test@gmail.com',
      password: hashedPassword
    });

    await testUser.save();

    res.status(201).json({
      message: 'Test user created successfully!',
      user: {
        email: testUser.email,
        username: testUser.username,
        createdAt: testUser.createdAt
      },
      credentials: {
        email: 'test@test@gmail.com',
        password: 'test@123'
      }
    });

  } catch (error) {
    console.error('Error creating test user:', error);
    res.status(500).json({ 
      message: 'Error creating test user', 
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Admin endpoint to list all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); // Exclude password from response
    res.json({
      message: 'Users retrieved successfully',
      count: users.length,
      users
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ 
      message: 'Error fetching users', 
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
