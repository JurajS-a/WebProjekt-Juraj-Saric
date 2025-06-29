import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Film from './models/Film';

dotenv.config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI || '', { dbName: 'movieapp' });

  await Film.deleteMany(); // Optional: clear existing films

  await Film.insertMany([
    {
      title: 'Inception',
      description: 'A skilled thief leads a team into people\'s dreams.',
      rating: 9,
      addedBy: 'john_doe',
    },
    {
      title: 'The Godfather',
      description: 'Mafia family legacy and power struggle.',
      rating: 10,
      addedBy: 'jane_smith',
    },
    {
      title: 'Interstellar',
      description: 'A team travels through a wormhole in space.',
      rating: 8,
      addedBy: 'john_doe',
    }
  ]);

  console.log('🎉 Seed completed');
  mongoose.disconnect();
}

seed();
