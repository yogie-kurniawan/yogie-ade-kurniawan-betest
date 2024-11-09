import User from "../models/User.js";
import mongoose from "mongoose";
import {
  NotFoundError,
  BadRequestError,
  ConflictError,
} from "../errors/index.js";
import { generateToken } from "../utils/token.js";
import { StatusCodes } from "http-status-codes";

export const authenticateUser = async (req, res, next) => {
  const { userName, accountNumber } = req.body;
  if (!userName || !accountNumber)
    return next(
      new BadRequestError("Username and Account Number are required!")
    );
  try {
    const user = await User.findOne({ userName, accountNumber });
    if (!user) return next(new BadRequestError("User not found!"));
    const token = generateToken(user);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Authentication is successful!",
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fetching users succeeded!",
      users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new BadRequestError("Please provide an ID!"));
  if (!mongoose.Types.ObjectId.isValid(id))
    return next(new BadRequestError("Invalid ID format"));
  try {
    const user = await User.findById(id);
    if (!user) return next(new NotFoundError("User Not Found"));
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fetching users succeeded!",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserByAccountNumber = async (req, res, next) => {
  const { accountNumber } = req.params;
  if (!accountNumber)
    return next(new BadRequestError("Account Number is required!"));
  try {
    const user = await User.findOne({ accountNumber });
    if (!user)
      return next(
        new BadRequestError("User not found with this account number!")
      );
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fetching user succeeded!",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserByIdentityNumber = async (req, res, next) => {
  const { identityNumber } = req.params;
  if (!identityNumber)
    return next(new BadRequestError("Identity Number is required!"));
  try {
    const user = await User.findOne({ identityNumber });
    if (!user)
      return next(
        new BadRequestError("User not found with this identity number!")
      );
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Fetching user succeeded!",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  const { userName, accountNumber, emailAddress, identityNumber } = req.body;
  if (!userName || !accountNumber || !emailAddress || !identityNumber)
    return next(
      BadRequestError(
        "Username, Account Number, Email Address, and Identity Number are required"
      )
    );

  try {
    const newUser = new User({
      userName,
      accountNumber,
      emailAddress,
      identityNumber,
    });
    await newUser.save();
    return res.status(201).json({
      success: true,
      message: "Saving new user succeded!",
      user: newUser,
    });
  } catch (error) {
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyValue).join(", ");
      return next(
        new ConflictError(
          `Duplicate entry detected for field(s): ${duplicateField}`
        )
      );
    }
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new BadRequestError("Please provide an ID!"));
  if (!mongoose.Types.ObjectId.isValid(id))
    return next(new BadRequestError("Invalid ID format"));
  const { userName, accountNumber, emailAddress, identityNumber } = req.body;
  if (!userName || !accountNumber || !emailAddress || !identityNumber)
    return next(
      new BadRequestError(
        "Username, Account Number, Email Address, and Identity Number are required"
      )
    );

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        userName,
        accountNumber,
        emailAddress,
        identityNumber,
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) return next(new NotFoundError("User not found"));
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "User updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return next(
        new ConflictError(
          "Duplicate entry detected: a user with the same account number or email already exists."
        )
      );
    }
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  if (!id) throw new BadRequestError("Please provide an ID!");
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new BadRequestError("Invalid ID format");
  }

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      next(new NotFoundError("User not found!"));
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "User deleted successfully!",
      userId: id,
    });
  } catch (error) {
    next(error);
  }
};
