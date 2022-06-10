import mongoose from "mongoose";

const transaction = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      maxLength: [10, "Name must be less than 50 character"],
    },
    title: {
      type: String,
      required: true,
      maxLength: [50, "Name must be less than 50 character"],
    },
    amount: {
      type: Number,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Transaction", Transaction); //transactions
