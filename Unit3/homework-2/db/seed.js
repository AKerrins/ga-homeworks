import Book from "../models/book.js";
import { booksSeedData } from "./booksSeedData.js";
import { connectDb, truncate, disconnectDb, truncateDb } from "./helpers.js";

async function seed() {
  try {
    await connectDb();
    console.log("Connected to database");

    await truncateDb();
    console.log("Database dropped");

    const books = await Book.creat(movieSeedData);
    console.log(`${books.length} books addd to the database`);

    console.log("Goodbye");
  } catch (err) {
    console.log("Something went wrong seeding the database", err);
  }
  disconnectDb();
}
seed();
