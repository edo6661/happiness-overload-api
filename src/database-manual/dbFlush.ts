import connectDb from "../config/dbConfig";
import mongoose from "mongoose";
import User from "../models/User";
import Post from "../models/Post";
import Tag from "../models/Tag";
import Comment from "../models/Comment";
import "dotenv/config";

async function dbFlush() {
  try {
    await connectDb();
    await User.deleteMany({ username: { $nin: ["rinn", "rizz"] } });
    await Post.deleteMany({});
    await Tag.deleteMany({});
    await Comment.deleteMany({});

    console.log("Operation successful");
  } catch (error) {
    console.log(error);
  }
}

dbFlush().then(async () =>
  mongoose.connection.readyState
    ? await mongoose.connection.close()
    : console.log("Alredy closed miaw")
);
