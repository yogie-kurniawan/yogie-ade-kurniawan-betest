import { StatusCodes } from "http-status-codes";

const notFound = (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "Not Found!",
  });
};

export default notFound;
