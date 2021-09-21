import Book from "../models/book.js";
import Author from "../models/author.js";
import { removedAdded } from "./helpers.js";

async function getAllBooks(_req, res, next) {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (err) {
    next(err);
  }
}

async function createBook(req, res, next) {
  try {
    const newBook = await Book.create(req.body);
    await Book.updateMany(
      { _id: newBook.books },
      { $push: { books: newBook._id } }
    );
    return res.status(201).send(newBook);
  } catch (err) {
    next(err);
  }
}
async function getBook(req, res, next) {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    res.send(movie);
  } catch (err) {
    next(err);
  }
}

async function deleteBook(req, res, next) {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).send({ message: "This book doesn't exist" });
    }
    const booksToRemove = book.authors.map((author) => author.toString());

    await Author.updateMany(
      { _id: authorsToRemove },
      { $pull: { books: book._id } }
    );
    return res.status(200).json(book);
  } catch (err) {
    next(err);
  }
}

async function updateBook(req, res, next) {
  const { id } = req.params;
  const { body } = req;

  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.send({ message: "No book found" });
    }

    const [removedAuthors, addedAuthors] = removedAdded(
      book.authors.map((author) => author.toString()),
      req.body.authors
    );

    book.set(req.body);
    const savedBook = book.save();

    await Author.updateMany(
      { _id: addedAuthors },
      { $pull: { books: savedBook._id } }
    );

    await Author.updateMany(
      { _id: addedAuthors },
      { $pull: { books: savedBook._id } }
    );

    return res.status(200).json(book);
  } catch (err) {
    next();
  }
}
async function getAllAuthorsForBook(req, res, next) {
  try {
    const { id } = req.params;
    const book = await Book.findById(id).populate("authors");
    return res.status(200).json(book.authors);
  } catch (err) {
    next();
  }
}

export default {
  getAllBooks,
  createBook,
  getBook,
  deleteBook,
  updateBook,
  getAllAuthorsForBook,
};
