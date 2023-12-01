import mongoose from "mongoose";

export const connection = async () =>
  mongoose.connect("mongodb://localhost:27017/blog");
