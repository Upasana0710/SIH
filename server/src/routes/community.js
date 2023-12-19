import express from 'express';
import { auth } from '../middleware/auth.js';
import { createCommunity, getCommunities, getCommunity, joinCommunity } from '../controllers/community.js';

const router = express.Router();

router.post('/create', [auth], createCommunity);
router.get('/getAll', [auth], getCommunities);
router.patch('/join', [auth], joinCommunity);
router.get('/get/:id', [auth], getCommunity);

export default router;