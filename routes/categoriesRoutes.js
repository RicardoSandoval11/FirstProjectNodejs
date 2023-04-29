import express from 'express';

import { 
        findAllCategories, 
        findCategoriesWithMoreVacancies,
        getAllCategories } from '../controllers/categoriesController.js';
import { protectRoute } from '../middlewares/protectRoute.js';

const router = express.Router();

router.get('/get-all-categories', findAllCategories);
router.get('/get-most-popular-categories', findCategoriesWithMoreVacancies);
router.get('/get-categories', getAllCategories);

export default router;