import { StatusCodes } from "http-status-codes";
import CustomError from "./custom-error.js";

class ConflictError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.CONFLICT;
  }
}

export default ConflictError;
