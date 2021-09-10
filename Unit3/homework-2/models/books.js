import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxLength: 250 },
    rating: { type: Number, required: true, min: 1, max: 10 },
  },
  { timestamps: true }
);
const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  releaseYear: Number,
  comments: [commentSchema],
});

bookSchema.plugin(mongooseUniqueValidator);
const Book = mongoose.model("Book", bookSchema);
export default Book;
