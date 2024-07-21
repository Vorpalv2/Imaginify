import mongoose, { Mongoose } from "mongoose";

const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL);
interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cache: MongooseConnection = (global as any).mongoose;

if (!cache) {
  cache = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectToDB() {
  console.log(MONGO_URL);
  if (cache.conn) return cache.conn;

  if (!MONGO_URL) throw new Error("missing MONGODB URL");

  cache.promise =
    cache.promise ||
    mongoose.connect(MONGO_URL, {
      dbName: "imaginify",
      bufferCommands: false,
    });

  cache.conn = await cache.promise;

  return cache.conn;
}
