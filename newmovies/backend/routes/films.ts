import express from 'express';
import Film from '../models/Film';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Get all films
router.get('/', async (req, res) => {
  try {
    const films = await Film.find();
    res.json(films);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch films' });
  }
});

// Add a new film
router.post('/', async (req, res) => {
  try {
    const { title, description, rating, addedBy } = req.body;
    const newFilm = new Film({ title, description, rating, addedBy });
    await newFilm.save();
    res.status(201).json(newFilm);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add film' });
  }
});

// Update a film
router.put('/:id', async (req, res) => {
  try {
    const updated = await Film.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update film' });
  }
});

// Delete a film
router.delete('/:id', async (req, res) => {
  try {
    await Film.findByIdAndDelete(req.params.id);
    res.json({ message: 'Film deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete film' });
  }
});

// Fetch film info from OMDb API
router.get('/omdb/:title', async (req, res) => {
  try {
    const apiKey = process.env.OMDB_API_KEY;
    const title = req.params.title;
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch OMDb data' });
  }
});

export default router;
