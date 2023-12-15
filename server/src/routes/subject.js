import express from 'express';
import { createSubject, getSubjects } from '../controllers/subject.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/create', [auth], createSubject);
router.get('/list', [auth], getSubjects);

export default router;