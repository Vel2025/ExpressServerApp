import { v4 as uuidv4 } from 'uuid';

const recipes = [
  { id: uuidv4(), title: 'Chocolate Cake', ingredients: ['flour', 'sugar'], instructions: 'Bake at 350°F', categoryId: '1' },
];
const categories = [
  { id: '1', name: 'Dessert', description: 'Sweet treats' },
  { id: '2', name: 'Main Course', description: 'Hearty meals' },
];
const reviews = [
  { id: uuidv4(), recipeId: recipes[0].id, rating: 5, comment: 'Delicious!' },
];

export { recipes, categories, reviews };