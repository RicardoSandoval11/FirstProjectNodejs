import {
        displayConversationsByUser, 
        startConversation,
        replyMessages,
        displayConversationMessages} from '../controllers/messagesController.js';

import express from 'express';
import { protectRoute } from '../middlewares/protectRoute.js';

const router = express.Router();

router.get('/my-messages', protectRoute, displayConversationsByUser);
router.post('/save-message', protectRoute, startConversation);
router.post('/reply-message', protectRoute, replyMessages);
router.get('/get-conversation-messages/:conversationId', protectRoute, displayConversationMessages);
router.get

export default router;

