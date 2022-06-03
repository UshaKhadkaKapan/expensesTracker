import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: [50, "Name must be less than 50 character"],
    },
    email: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      maxLength: [50, "Name must be less than 50 character"],
    },
    password: {
      type: String,
      required: true,
      minLength: [5, "Name must be less than 5 character"],
      maxLength: [50, "Name must be less than 50 character"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema); //users
