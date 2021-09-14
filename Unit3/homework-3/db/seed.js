import Book from "../models/books.js";
import { booksSeedData } from "./booksSeedData.js";
import { connectDb, truncateDb, disconnectDb } from "./helpers.js";

async function seed() {
  try {
    await connectDb();
    console.log("Connected to database");

    await truncateDb();
    console.log("Database dropped");

    const books = await Book.create(booksSeedData);
    console.log(`${books.length} books addd to the database`);

    console.log("Goodbye");
  } catch (err) {
    console.log("Something went wrong seeding the database", err);
  }
  disconnectDb();
}
seed();
