import { connection } from "@/lib/connection";
import { registerUser } from "@/lib/controllers";
import { Router } from "@/lib/router";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

const controller: Record<string, any> = {
  POST: registerUser,
};

export default async function handeler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connection();

  return Router(req, res, controller[req.method as string]);
}
