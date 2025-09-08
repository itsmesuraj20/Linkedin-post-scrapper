const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Use the same connection string from your .env
const MONGO_URI = 'mongodb+srv://test:test%40123@cluster0.9rqpzhh.mongodb.net/linkedin_scraper?retryWrites=true&w=majority&appName=Cluster0';

// User schema - simplified version
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  subscription: { type: String, enum: ['free', 'premium'], default: 'free' },
  scrapeCount: { type: Number, default: 0 },
  lastScrapeAt: { type: Date },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

async function createTestUser() {
  try {
    console.log('Connecting to MongoDB Atlas...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB Atlas');

    // Check if test user already exists
    const existingUser = await User.findOne({ email: 'test@test@gmail.com' });
    if (existingUser) {
      console.log('❌ Test user already exists in the database');
      console.log('You can login with:');
      console.log('📧 Email: test@test@gmail.com');
      console.log('🔑 Password: test@123');
      await mongoose.connection.close();
      return;
    }

    // Hash the password
    console.log('🔐 Hashing password...');
    const hashedPassword = await bcrypt.hash('test@123', 10);

    // Create test user
    console.log('👤 Creating test user...');
    const testUser = new User({
      username: 'testuser',
      email: 'test@test@gmail.com',
      password: hashedPassword
    });

    await testUser.save();
    console.log('✅ Test user created successfully!');
    console.log('');
    console.log('🎉 You can now login with:');
    console.log('📧 Email: test@test@gmail.com');
    console.log('🔑 Password: test@123');
    console.log('');
    console.log('🌐 Start your frontend and navigate to http://localhost:5174');

    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
  } catch (error) {
    console.error('❌ Error creating test user:', error.message);
    process.exit(1);
  }
}

createTestUser();
