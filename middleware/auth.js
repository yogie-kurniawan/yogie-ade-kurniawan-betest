import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

export const checkAuth = (req, res, next) => {
  const token = req.headers.authorizations?.split(" ")[1];
  if (!token)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ success: false, message: "Authorization token is required" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
