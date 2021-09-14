import express from "express";
import booksController from "../controllers/booksController.js";

const router = express.Router();

router
  .route("/books")
  .get(booksController.getAllBooks)
  .post(booksController.createBook);

router
  .route("/books/:id")
  .get(booksController.getBook)
  .delete(booksController.deleteBook)
  .put(booksController.updateBook);
export default router;
