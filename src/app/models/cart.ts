// import mongoose from "@/lib/mongoose";
// import { UsersModel } from "./users";
// import { AvailableWorksModel } from "./available-works";
// const { Schema } = mongoose;

// if (!mongoose.models.cart) {
//   const cartSchema = new Schema({
//     user: UsersModel,
//     availableWorks: Avai,
//   });
//   mongoose.model("cart", cartSchema);
// }

// export const CartModel = mongoose.models.cart;
import mongoose, { Document } from "@/lib/mongoose";
import { UsersModel, UserDocument } from "./users"; // assuming UsersModel has a UserDocument type
import {
  AvailableWorksModel,
  AvailableWorksDocument,
} from "./available-works/available-works-schema";

const { Schema } = mongoose;

interface CartDocument extends Document {
  user: UserDocument;
  availableWorks: AvailableWorksDocument[];
}

const cartSchema = new Schema<CartDocument>({
  user: {
    type: UsersModel.schema, // or type: Schema.Types.ObjectId, ref: 'User' if you are using references
    required: true,
  },
  availableWorks: {
    type: [AvailableWorksModel.schema], // or type: [{ type: Schema.Types.ObjectId, ref: 'AvailableWorks' }] if using references
    required: true,
  },
});

if (!mongoose.models.cart) {
  mongoose.model<CartDocument>("cart", cartSchema);
}

export const CartModel = mongoose.models.cart as mongoose.Model<CartDocument>;
