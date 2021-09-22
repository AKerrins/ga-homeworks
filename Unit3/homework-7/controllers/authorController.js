import Author from "../models/author.js";
import Book from "../models/book.js";
import { removedAdded } from "./helpers.js";

async function getAllAuthors(_req, res, next) {
  try {
    const authors = await Author.find();
    return res.status(200).json(authors);
  } catch (err) {
    next(err);
  }
}

async function getAllBooksByAuthor(req, res, next) {
  try {
    const { id } = req.parms;
    const author = await Author.findById(id).populate("books");
    return res.status(200).json(author.books);
  } catch (err) {
    next(err);
  }
}

async function createAuthor(req, res, next) {
  try {
    const newAuthor = await Author.create(req.body);

    await Book.updateMany(
      ({ _id: newAuthor.books }, { $push: { authors: newAuthor._id } })
    );
    return res.status(201).json(newAuthor);
  } catch (err) {
    next(err);
  }
}

async function getAuthor(req, res, next) {
  const id = req.params.id;

  try {
    const author = await Author.findById(id);

    if (!author) {
      return res.status(404).send({ message: "Author does not exist" });
    }
    return res.status(200).json(author);
  } catch (err) {
    next(err);
  }
}

async function deleteAuthor(req, res, next) {
  const { id } = req.params;

  try {
    const author = await Author.findByIdAndDelete(id);

    if (!author) {
      return res.status(404).send({ message: "Author does not exist" });
    }

    const booksToRemove = author.books.map((book) => book.toString());

    await Book.updateMany(
      ({ _id: booksToRemove }, { $pull: { authors: author._id } })
    );

    return res.status(204).json(author);
  } catch (err) {
    next(err);
  }
}

async function updateAuthor(req, res, next) {
  const id = req.params.id;

  try {
    const author = await Author.findById(id);

    if (!author) {
      return res.status(404).send({ message: "Author does not exist" });
    }

    const [removedBooks, addedBooks] = removedAdded(
      author.books.map((book) => book.toString()),
      req.body.books
    );

    author.set(req.body);

    const savedAuthor = await author.save();

    await Book.updateMany(
      ({ _id: removedBooks }, { $pull: { authors: author._id } })
    );

    await Book.updateMany(
      ({ _id: addedBooks }, { $push: { authors: savedAuthor._id } })
    );
    return res.status(200).json(author);
  } catch (err) {
    next(err);
  }
}
export default {
  getAllAuthors,
  getAllBooksByAuthor,
  createAuthor,
  getAuthor,
  deleteAuthor,
  updateAuthor,
};
