import bcrypt from "bcrypt";
import { Schema, model, models, Document, Model } from "mongoose";

interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  profileImage?: string;
  joinDate?: Date;
  following?: IUser["_id"][];
  followers?: IUser["_id"][];
}

interface IUserModel extends Model<IUser> {
  comparePassword(plainPassword: string, hash: string): Promise<boolean>;
}

const userSchema = new Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  profileImage: String,
  joinDate: Date,
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (plainPassword: string) {
  return await bcrypt.compare(plainPassword, this.password);
};

const User: any = models.User || model("User", userSchema);

export default User;
