import express from "express";
import commentsController from "../controllers/commentsController.js";
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

router.route("/books/:id/comments").post(commentsController.createComment);
router
  .route("/books/:id/comments/:commentId")
  .delete(commentsController.deleteComment)
  .put(commentsController.updateComment);
export default router;
