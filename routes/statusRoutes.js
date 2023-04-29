import express from 'express';

import { getAllStatus } from '../controllers/statusController.js';
import { protectRoute } from '../middlewares/protectRoute.js';

const router = express.Router();

router.get('/get-all-status', getAllStatus);


export default router;