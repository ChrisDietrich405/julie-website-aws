import { Schema, model } from "mongoose";
import mongoose from "@/lib/mongoose";
import AvailableWorksDocument from "./available-works-document";

if (!mongoose.models.available_works) {
  const AvailableWorksSchema = new Schema<AvailableWorksDocument>({
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    measurements: {
      type: String,
      required: true,
    },
  });
  mongoose.model("available_works", AvailableWorksSchema);
}

export const AvailableWorksModel = mongoose.models.available_works;
