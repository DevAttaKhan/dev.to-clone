import { model, models, Schema } from "mongoose";

const commentSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: [true, "an id is reqired for the comment"],
  },
  body: {
    type: String,
    required: [true, "Comment cannot be empty"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
  },
});

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
