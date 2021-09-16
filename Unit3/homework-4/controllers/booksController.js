import Book from "../models/books.js";

async function getAllBooks(req, res, next) {
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
    return res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
}
async function getBook(req, res, next) {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (err) {
    next(err);
  }
}
async function deleteBook(req, res, next) {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndDelete(id);
    return res.status(200).json(book);
  } catch (err) {
    next(err);
  }
}
async function updateBook(req, res, next) {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndUpdate(id, req.body);
    book.set(req.body);
    book.save();
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
