import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { recipes, categories } from '../data/db.mjs';

const router = express.Router();

// GET all recipes or filter by category
router.get('/', (req, res) => {
  const { categoryId } = req.query;
  let filteredRecipes = recipes;
  if (categoryId) {
    filteredRecipes = recipes.filter(r => r.categoryId === categoryId);
  }
  res.json(filteredRecipes);
});

// GET recipe by ID
router.get('/:id', (req, res) => {
  const recipe = recipes.find(r => r.id === req.params.id);
  if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
  res.json(recipe);
});

// POST new recipe
router.post('/', (req, res) => {
  const { title, ingredients, instructions, categoryId } = req.body;
  if (!title || !ingredients || !instructions || !categoryId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!categories.find(c => c.id === categoryId)) {
    return res.status(400).json({ error: 'Invalid category' });
  }
  const newRecipe = { id: uuidv4(), title, ingredients, instructions, categoryId };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

// PUT update recipe
router.put('/:id', (req, res) => {
  const recipe = recipes.find(r => r.id === req.params.id);
  if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
  const { title, ingredients, instructions, categoryId } = req.body;
  recipe.title = title || recipe.title;
  recipe.ingredients = ingredients || recipe.ingredients;
  recipe.instructions = instructions || recipe.instructions;
  recipe.categoryId = categoryId || recipe.categoryId;
  res.json(recipe);
});

// DELETE recipe
router.delete('/:id', (req, res) => {
  const index = recipes.findIndex(r => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Recipe not found' });
  recipes.splice(index, 1);
  res.status(204).send();
});

// Render recipes view
router.get('/', (req, res) => {
  res.render('recipes', { recipes, categories });
});

export default router;