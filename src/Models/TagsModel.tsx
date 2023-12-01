import { model, models, Schema } from "mongoose";

const tagsSchema = new Schema({
  tag: String,
});

const Tag = models.Tag || model("Tag", tagsSchema);
export default Tag;
