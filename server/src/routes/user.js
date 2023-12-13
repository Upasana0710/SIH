import express from 'express';
import {register, login, addSubjects} from '../controllers/user.js';
import {auth} from '../middleware/auth.js';

const router = express.Router();

router.post('/register',register);
router.post('/login', login);
router.patch('/addInfo', [auth], addSubjects);

export default router;