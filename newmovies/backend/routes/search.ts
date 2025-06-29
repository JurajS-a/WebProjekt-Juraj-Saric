import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.get('/', async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: 'Missing "title" query parameter' });
  }

  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${title}`);
    res.json(response.data);
  } catch (error: any) {
    console.error('OMDb API error:', error.message);
    if (error.response) {
      console.error('OMDb response:', error.response.data);
    }
    res.status(500).json({
      error: 'Failed to fetch data from OMDb API',
      message: error.message,
      details: error.response?.data || null
    });
  }
});

export default router;
