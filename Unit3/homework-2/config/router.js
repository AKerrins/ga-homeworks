import express from "express";
import {getAllBooks} from '../controllers/booksController.js'

const router = express.Router();

router.route('/books').get(getAllBooks)
export default router