
This Recipe Management Application is a Node.js and Express web application that allows users to manage recipes, categories (e.g., Dessert, Main Course), and reviews. It includes:

A RESTful API for CRUD operations (Create, Read, Update, Delete).
Custom middleware for logging and authentication simulation.
Error-handling middleware.
EJS template engine for rendering views.
A form for adding recipes.
Simple CSS styling.
Query parameters for filtering data.

GET /api/recipes: List all recipes (filter with ?categoryId=).
GET /api/recipes/:id: Get a recipe.
POST /api/recipes: Create a recipe.
PUT /api/recipes/:id: Update a recipe.
DELETE /api/recipes/:id: Delete a recipe.
Categories:
GET /api/categories: List all categories.
GET /api/categories/:id: Get a category.
Reviews:
GET /api/reviews: List all reviews (filter with ?recipeId= or ?rating=).
POST /api/reviews: Create a review.