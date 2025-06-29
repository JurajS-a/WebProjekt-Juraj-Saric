import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import filmRoutes from './routes/films';
import userRoutes from './routes/users';
import searchRoutes from './routes/search';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/search', searchRoutes);
app.use('/api/users', userRoutes);
mongoose
  .connect(process.env.MONGO_URI || '', { dbName: 'movieapp' })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/films', filmRoutes);

app.get('/', (req, res) => {
  res.send('MovieApp API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
