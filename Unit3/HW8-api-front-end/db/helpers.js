import mongoose from "mongoose";
import { dbUri } from "../config/environment.js";

export function connectDb() {
  const options = {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useCreateIndex: true,
  };
  return mongoose.connect(dbUri, options);
}

export function truncateDb() {
  if (mongoose.connection.readyState !== 0) {
    const { collections } = mongoose.connection;

    const promises = Object.keys(collections).map((collection) =>
      mongoose.connection.collection(collection).deleteMany({})
    );
    return Promise.all(promises);
  }
}
export function disconnectDb() {
  if (mongoose.connection.readyState !== 0) {
    return mongoose.disconnect();
  }
}
