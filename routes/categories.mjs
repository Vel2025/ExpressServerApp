import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { reviews, recipes } from '../data/db.mjs';

const router = express.Router();

// GET reviews, filter by recipeId or rating
router.get('/', (req, res) => {
  const { recipeId, rating } = req.query;
  let filteredReviews = reviews;
  if (recipeId) filteredReviews = filteredReviews.filter(r => r.recipeId === recipeId);
  if (rating) filteredReviews = filteredReviews.filter(r => r.rating === parseInt(rating));
  res.json(filteredReviews);
});

router.post('/', (req, res) => {
  const { recipeId, rating, comment } = req.body;
  if (!recipeId || !rating) return res.status(400).json({ error: 'Missing required fields' });
  if (!recipes.find(r => r.id === recipeId)) {
    return res.status(400).json({ error: 'Invalid recipe' });
  }
  const newReview = { id: uuidv4(), recipeId, rating, comment };
  reviews.push(newReview);
  res.status(201).json(newReview);
});

export default router;




