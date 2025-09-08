import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from '../models/User.js';
// Load environment variables
dotenv.config();
const addTestUser = async () => {
    try {
        // Connect to MongoDB
        const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/linkedin-scraper';
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');
        // Check if test user already exists
        const existingUser = await User.findOne({ email: 'test@test@gmail.com' });
        if (existingUser) {
            console.log('Test user already exists in the database');
            await mongoose.connection.close();
            return;
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
        console.log('Test user created successfully!');
        console.log('Email: test@test@gmail.com');
        console.log('Password: test@123');
        await mongoose.connection.close();
        console.log('Database connection closed');
    }
    catch (error) {
        console.error('Error adding test user:', error);
        process.exit(1);
    }
};
addTestUser();
//# sourceMappingURL=addTestUser.js.map