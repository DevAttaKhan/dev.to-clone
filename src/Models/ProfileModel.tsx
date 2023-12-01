import { model, models, Schema } from "mongoose";

const profileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
    message: "userId is required",
  },
  websiteUrl: String,
  location: String,
  availableFor: String,
  skils: String,
  currentProjects: String,
  pronouns: String,
  work: String,
  education: String,
  brandingColor: String,
});

const Profile = models.Profile || model("Profile", profileSchema);

export default Profile;
