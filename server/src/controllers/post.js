import Post from '../models/post.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Ensure that the pdf_uploads directory exists

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pdfUploadsDir = path.join(__dirname, '../pdf_uploads');
if (!fs.existsSync(pdfUploadsDir)) {
  fs.mkdirSync(pdfUploadsDir);
}

const pdfStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, pdfUploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const pdfUpload = multer({ storage: pdfStorage });

export const uploadFile = pdfUpload.single('file');

export const createPost = async (req, res) => {
  try {
    const { title, category } = req.body;
    if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });

    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'No PDF file uploaded' });
    }

    const pdfLink = `http://localhost:3300/pdfs/${req.file.filename}`;

    // Create a new Post document in the database
    const post = new Post({
      creator: req.user,
      title,
      category,
      file: pdfLink,
    });

    await post.save();

    // Return a success message or the created post
    return res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getPostsByCategory = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });

    const { category } = req.params;

    // Check if category is provided
    if (!category) {
      return res.status(400).json({ message: 'Category parameter is required' });
    }

    // Fetch posts by category from the database
    const posts = await Post.find({ category });

    // Return the posts in the response
    return res.status(200).json({ message: 'Posts fetched successfully', posts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const downloadResource = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });

    const { id } = req.params;
    // Fetch post information by ID
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Extract filename from the file URL
    const filename = path.basename(post.file);

    // Assuming the PDFs are stored in the 'pdf_uploads' directory
    const filePath = path.join(__dirname, '../pdf_uploads', filename);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Set the Content-Disposition header to trigger download
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-Type', 'application/pdf');

    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}