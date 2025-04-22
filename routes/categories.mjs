import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { categories } from '../data/db.mjs';
const router = Router();

router.get('/', (req, res) => res.json(categories));
router.get('/:id', (req, res) => {
  const category = categories.find(c => c.id === req.params.id);
  if (!category) return res.status(404).json({ error: 'Category not found' });
  res.json(category);
});

export default router;