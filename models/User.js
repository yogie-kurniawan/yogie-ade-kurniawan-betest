import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 50,
  },
  accountNumber: {
    type: String,
    unique: true,
    required: true,
  },
  emailAddress: {
    type: String,
    unique: true,
    required: true,
  },
  identityNumber: {
    type: String,
    unique: true,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);
