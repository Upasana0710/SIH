import express from 'express';
import {
  createPost,
  downloadResource,
  getPostsByCategory,
  uploadFile,
} from '../controllers/post.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/create', [auth], uploadFile, createPost);
router.get('/:category', [auth], getPostsByCategory);
router.get('/download/:id', [auth], downloadResource);
// router.post('/createImg', [auth], uploadFile, imageUpload);
export default router;
