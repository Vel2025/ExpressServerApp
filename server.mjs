import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import logger from './middleware/logger.mjs';
import auth from './middleware/auth.mjs';
import errorHandler from './middleware/errorHandler.mjs';
import recipeRoutes from './routes/recipes.mjs';
import categoryRoutes from './routes/categories.mjs';
import reviewRoutes from './routes/reviews.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger);
app.use(auth);

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/views/recipes', recipeRoutes);

// View routes
app.get('/', (req, res) => res.render('index', { title: 'Recipe App' }));
app.get('/recipes', recipeRoutes);

// Error-handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));