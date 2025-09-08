import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const MONGO_URI = 'mongodb+srv://test:test%40123@cluster0.9rqpzhh.mongodb.net/linkedin_scraper?retryWrites=true&w=majority&appName=Cluster0';

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

async function createSimpleUser() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected');

    // Delete existing test users
    await User.deleteMany({ email: { $in: ['test@test@gmail.com', 'test@gmail.com'] } });
    console.log('🗑️  Deleted existing test users');

    // Create new simple test user
    const hashedPassword = await bcrypt.hash('test123', 10);
    const newUser = new User({
      username: 'testuser',
      email: 'test@gmail.com',
      password: hashedPassword
    });

    await newUser.save();
    console.log('✅ New test user created!');
    console.log('📧 Email: test@gmail.com');
    console.log('🔑 Password: test123');

    await mongoose.connection.close();
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

createSimpleUser();
