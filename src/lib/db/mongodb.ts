import mongoose from "mongoose";
import { env } from "@/config/env";

const MONGODB_URI = env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Mongo URI:", MONGODB_URI);
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;

  return cached.conn;
}