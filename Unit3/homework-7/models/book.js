import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxLength: 300 },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  { timestamps: true }
);

const bookSchema = new mongoose.Schema({
  title: String,
  // author: String,
  description: String,
  releaseYear: Number,
  genre: String,
  comments: [commentSchema],
  authors: [{ type: mongoose.Types.ObjectId, ref: "Author" }],
});

bookSchema.plugin(mongooseUniqueValidator);

const Book = mongoose.model("Book", bookSchema);

export default Book;
