import express from 'express';

import { 
        createVacancy,
        getAllVacancies,
        getMyVacancies,
        getVacancyDetails,
        MostPopularCategoryVacancies,
        removeVacancy,
        updateVacancy,
        getMostRecentVacanciesAdded,
        getAllVacanciesByCategory } from '../controllers/vacancyController.js';
import { protectRoute } from '../middlewares/protectRoute.js';
import upload from '../middlewares/uploadImage.js';

const router = express.Router();

router.get('/all-vacancies',getAllVacancies);
router.post('/create-new', protectRoute, upload.single('image'), createVacancy);
router.put('/update-vacancy/:id',protectRoute, upload.single('image'), updateVacancy);
router.delete('/remove-vacancy/:id', protectRoute, removeVacancy);
router.get('/vacancy-details/:id', getVacancyDetails);
router.get('/most-popular-category-vacancy', MostPopularCategoryVacancies);
router.get('/my-vacancies', protectRoute, getMyVacancies);
router.get('/recent-vacancies', getMostRecentVacanciesAdded);
router.get('/get-vacancies-by-category/:categoryId', getAllVacanciesByCategory);

export default router;