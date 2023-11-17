import mongoose from "@/lib/mongoose";
import UserDocument from "./users/user-document";
import { UsersModel } from "./users";
import AvailableWorksDocument from "./available-works/available-works-document";
import { AvailableWorksModel } from "./available-works/available-works-schema";
// import { UsersModel, UserDocument } from "./users";
// import {
//   AvailableWorksModel,
//   AvailableWorksDocument,
// } from "./available-works/available-works-schema";

const { Schema } = mongoose;

interface CartDocument extends Document {
  user: UserDocument;
  availableWorks: AvailableWorksDocument[];
}

const cartSchema = new Schema<CartDocument>({
  user: {
    type: UsersModel.schema, 
    required: true,
  },
  availableWorks: {
    type: [AvailableWorksModel.schema], 
    required: true,
  },
});

if (!mongoose.models.cart) {
  mongoose.model<CartDocument>("cart", cartSchema);
}

export const CartModel = mongoose.models.cart as mongoose.Model<CartDocument>;
