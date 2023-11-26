import { Schema, model } from "mongoose";
import mongoose from "@/lib/mongoose";
import OrdersDocument from "./orders-document";

if (!mongoose.models.orders) {
  const ordersSchema = new Schema<OrdersDocument>({
    customer: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: Number,
        required: true,
      },
    },

    deliveryAddress: {
      streetAddress: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      zipCode: {
        type: Number,
        required: true,
      },
    },

    status: {
      type: String,
      required: true,
    },

    orderCode: {
      type: String,
      required: true,
    },

    payment: {
      type: {
        type: String,
      },
    },
  });
  mongoose.model("orders", ordersSchema);
}

export const OrdersModel = mongoose.models.orders;
