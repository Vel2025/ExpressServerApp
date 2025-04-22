import { v4 as uuidv4 } from 'uuid';

export const categories = [
  { id: '1', name: 'Dessert', description: 'Sweet treats' },
  { id: '2', name: 'Main Course', description: 'Hearty meals' },
];

export const recipes = [
  {
    id: uuidv4(),
    title: 'Chocolate Cake',
    ingredients: ['flour', 'sugar', 'cocoa'],
    instructions: 'Bake at 350°F for 30 minutes',
    categoryId: '1',
  },
  {
    id: uuidv4(),
    title: 'Pasta',
    ingredients: ['pasta', 'sauce', 'cheese'],
    instructions: 'Boil pasta, add sauce',
    categoryId: '2',
  },
];

export const reviews = [];