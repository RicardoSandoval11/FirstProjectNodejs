import express from 'express';
import { protectRoute } from '../middlewares/protectRoute.js';
import { 
        showMyInformation,
        updateMyInformation } from '../controllers/userController.js';
import upload from '../middlewares/uploadImage.js';

const router = express.Router();

router.get('/my-information', protectRoute, showMyInformation);
router.put('/update-information', protectRoute, upload.single('photo'), updateMyInformation);

export default router;