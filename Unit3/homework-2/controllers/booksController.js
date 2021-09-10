import Book from "../models.book.js";
export const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (err) {
    next(err);
  }
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
