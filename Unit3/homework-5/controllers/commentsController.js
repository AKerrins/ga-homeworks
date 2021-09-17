import Book from "../models/books.js";

// creating a createComment function.
async function createComment(req, res, next) {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).send({ message: "Book does not exist" });
    }

    const newComment = req.body;

    book.comments.push(newComment);
    const savedBook = await book.save();

    return res.status(201).json(savedBook);
  } catch (err) {
    next(err);
  }
}

async function deleteComment(req, res, next) {
  try {
    const { id, commentId } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).send({ message: "Book does not exist" });
    }

    const comment = book.comments.id(commentId);
    if (!comment) {
      return res.status(404).send({ message: "Comment does not exist" });
    }
    comment.remove();

    const savedBook = await book.save();
    return res.status(200).send(savedBook);
  } catch (err) {
    next(err);
  }
}
async function updateComment(req, res, next) {
  try {
    const { id, commentId } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).send({ message: "Book does not exist" });
    }

    const comment = book.comments.id(commentId);
    if (!comment) {
      return res.status(404).send({ message: "Comment does not exist" });
    }
    comment.set(req.body);

    const savedBook = await book.save();
    return res.status(200).send(savedBook);
  } catch (err) {
    next(err);
  }
}
export default { createComment, deleteComment, updateComment };
