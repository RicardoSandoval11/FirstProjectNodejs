import express from 'express';
import { getAllSalaries } from '../controllers/salaryController.js';
import { protectRoute } from '../middlewares/protectRoute.js';

const router = express.Router();

router.get('/get-all-salaries', getAllSalaries);

export default router;