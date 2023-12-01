import { model, models, Schema } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title field is required"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  slug: {
    type: String,
    required: [true, "Slug is required"],
  },
  body: {
    type: String,
    required: [true, "Body cannot be empty"],
  },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  status: {
    type: String,
    required: [true, "Status is required"],
    enum: ["active", "draft"],
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  reactions: [
    {
      _id: Schema.Types.ObjectId,
      author: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      type: {
        type: String,
        enum: ["like", "unicorn", "exploding-head", "fire"],
        required: true,
      },
    },
  ],
  coverImage: {
    fileId: Schema.Types.ObjectId,
    filename: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  publishedDate: Date,
});

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
