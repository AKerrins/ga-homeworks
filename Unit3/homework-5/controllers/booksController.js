import Book from "../models/books.js";
import Author from "../models/authors.js";
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
    return res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
}
async function getBook(req, res, next) {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send({ message: "Book doesn't exist" });
    }
    return res.status(200).json(book);
  } catch (err) {
    next(err);
  }
}
async function deleteBook(req, res, next) {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).send({ message: "Book doesn't exist" });
    }
    const booksToRemove = book.authors.map((author) => author.toString());
    await Author.updateMany(
      { _id: authorsToRemove },
      { $pull: { books: book._id } }
    );
    res.send(bookToDelete);
  } catch (err) {
    next(err);
  }
}
async function updateBook(req, res, next) {
  const id = req.params.id;
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
    next(err);
  }
}

export default {
  getAllBooks,
  createBook,
  getBook,
  deleteBook,
  updateBook,
};
// export const getAllBooks = (request, response) => {
//   return response.send([
//     "The Stand",
//     "The Shining",
//     "Misery",
//     "Salem's Lot",
//     "IT",
//   ]);
// };
