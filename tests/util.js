import User from "../models/User.js";
import mongoose from "mongoose";

export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
};

export const createUser = async () => {
  const newUser = new User({
    userName: "john",
    accountNumber: "1292142",
    emailAddress: "john@gmail.com",
    identityNumber: "1243",
  });
  await newUser.save();
  return newUser;
};
