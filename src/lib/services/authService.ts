import User from "@/Models/UserModel";

export class AuthService {
  static async login(email?: string, password?: string) {
    // find user with email
    const user = await User.findOne({ email });
    if (!user) return null;

    // match password
    const matched = await user.comparePassword(password);
    if (!matched) return null;

    return user;
  }
}
