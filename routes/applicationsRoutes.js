import express from 'express';

import { 
        getApplicationsByVacancy,
        newApplication,
        getApplicationsByUser,
        deleteApplication } from '../controllers/applicationsController.js';
import { protectRoute } from '../middlewares/protectRoute.js';
import upload from '../middlewares/uploadImage.js';

const router = express.Router();

router.get('/get-applications-by-vacancy/:vacancyId', protectRoute, getApplicationsByVacancy);
router.post('/new-application', upload.single('file'), protectRoute, newApplication);
router.get('/my-applications', protectRoute, getApplicationsByUser);
router.delete('/delete-application/:id', protectRoute, deleteApplication);

export default router;