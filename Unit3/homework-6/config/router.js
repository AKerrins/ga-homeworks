import express from "express";
import booksController from "../controllers/booksController.js";
import commentsController from "../controllers/commentsController.js";
import authorController from "../controllers/authorController.js";
import userController from "../controllers/userController.js";
import User from "../models/user.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router
  .route("/books")
  .get(booksController.getAllBooks)
  .post(secureRoute, booksController.createBook);

router
  .route("/books/:id")
  .get(booksController.getBook)
  .delete(secureRoute, booksController.deleteBook)
  .put(secureRoute, booksController.updateBook);

router
  .route("/books/:id/comment")
  .post(secureRoute, commentsController.createComment);

router
  .route("/books/:id/comment/:commentId")
  .delete(secureRoute, commentsController.deleteComment)
  .put(secureRoute, commentsController.updateComment);

router
  .route("/authors")
  .get(authorController.getAllAuthors)
  .post(authorController.createAuthor);

router
  .route("/authors/:id")
  .get(authorController.getAuthor)
  .put(authorController.updateAuthor)
  .delete(authorController.deleteAuthor);

router.route("/authors/:id/books").get(authorController.getAllBooksByAuthor);
router.route("/books/:id/authors").get(booksController.getAllAuthorsForBook);
router.route("/register").post(userController.registerUser);
router.route("/login").post(userController.loginUser);

export default router;
