// INIT EXPRESS + ROUTER
import express from 'express';
const router = express.Router();

import {
  createPost,
  deletePost,
  getOnePost,
  getPosts,
  updatePost
} from '../controllers/postsController.js';


// GET all posts + QUERY
router.get('/', getPosts)

// GET post by id
router.get('/:id', getOnePost)

// POST
router.post('/', createPost)

// PUT
router.put('/:id', updatePost)

// DELETE
router.delete('/:id', deletePost)

// EXPORT ROUTER
export default router;