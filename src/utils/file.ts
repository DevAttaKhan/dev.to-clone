import { v4 as uuid } from "uuid";
import formidable from "formidable";
import { NextApiRequest } from "next";
import path from "path";
import fs from "fs";

export const nameContructor = (name: string) => {
  const ext = name.split(".").splice(-1);
  return `${uuid()}.${ext}`;
};

export const parseForm = (req: NextApiRequest) => {
  const form = new formidable.IncomingForm();

  return new Promise((resolve, reject) => {
    try {
      form.parse(req, function (err, fields, files) {
        resolve([fields as Record<string, any>, files as any]);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const saveFile = async (file: any) => {
  const name = nameContructor(file.name);
  const folder = path.join(process.cwd(), "/public/uploads", name);
  console.log(fs.statSync(file.path));
  const data = fs.readFileSync(file.path);
  fs.writeFileSync(folder, data);
  await fs.unlinkSync(file.path);
  return name;
};
