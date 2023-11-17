

import { Schema, model } from "mongoose";
import mongoose from "@/lib/mongoose";
import UserDocument from "./user-document";

if (!mongoose.models.users) {
  const userSchema = new Schema<UserDocument>({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  });
  mongoose.model("users", userSchema);
}

export const UsersModel = mongoose.models.users;
