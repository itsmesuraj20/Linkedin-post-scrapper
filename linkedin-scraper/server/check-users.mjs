import mongoose from 'mongoose';

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

async function checkUsers() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected');

    const users = await User.find({}, { password: 0 });
    console.log('📋 Users in database:');
    users.forEach(user => {
      console.log(`- Email: ${user.email}, Username: ${user.username}`);
    });

    if (users.length === 0) {
      console.log('❌ No users found in database');
    }

    await mongoose.connection.close();
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

checkUsers();
