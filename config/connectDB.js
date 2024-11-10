import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
