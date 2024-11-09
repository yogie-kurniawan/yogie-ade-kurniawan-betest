import { CustomError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res
      .status(err.statusCode)
      .json({ success: err.success, message: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ success: false, message: err.message });
};

export default errorHandler;
