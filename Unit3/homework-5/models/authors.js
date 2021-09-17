import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  books: [{ type: mongoose.Types.ObjectId, ref: "Book" }],
});
authorSchema.plugin(mongooseUniqueValidator);
const Author = mongoose.model("Author", authorSchema);
export default Author;
