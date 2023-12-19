import express from 'express';
import {register, login, addSubjects, getUser, searchUser} from '../controllers/user.js';
import {auth} from '../middleware/auth.js';

const router = express.Router();

router.post('/register',register);
router.post('/login', login);
router.patch('/addInfo', [auth], addSubjects);
router.get('/getUser/:id', getUser);
router.get('/search', [auth], searchUser);

export default router;