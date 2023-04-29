import express from 'express';
import { 
        Login, 
        registerUser,
        activateAccount,
        recoverPasswordRequest,
        validateCode,
        updatePassword } from '../controllers/authenticationController.js';

const router = express.Router();

router.post('/login', Login);
router.post('/register', registerUser);
router.post('/activate-account', activateAccount);
router.post('/recover-password-request', recoverPasswordRequest);
router.post('/validate-code', validateCode);
router.post('/update-password', updatePassword);

export default router;