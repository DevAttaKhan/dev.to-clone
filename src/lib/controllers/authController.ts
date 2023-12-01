import type { NextApiRequest, NextApiResponse } from "next";
import User from "@/Models/UserModel";
import { parseForm, saveFile } from "@/utils/file";

export const registerUser = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const [fields, { profileImage }] = (await parseForm(req)) as any;
    const imageName = profileImage && (await saveFile(profileImage));

    if (imageName) fields.profileImage = imageName;

    const user = await User.create({ ...fields });
    return res.json({ ok: true, data: user });
  } catch (error) {
    return res.json({ message: error });
  }
};
