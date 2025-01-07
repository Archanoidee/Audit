import { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "./jwt";

export const withAuth = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const decoded = verifyToken(token);

    
    if (!decoded) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    (req as any).user = decoded; // Attach user info to request
    return handler(req, res);
  };
};

