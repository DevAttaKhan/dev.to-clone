import type { NextApiRequest, NextApiResponse } from "next";

export const Router = (
  req: NextApiRequest,
  res: NextApiResponse,
  controller: any
) => {
  if (!controller) {
    return res.status(405).json({ message: "method not allowd" });
  }
  return controller(req, res);
};
