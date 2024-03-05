import { NextResponse, NextRequest } from "next/server";
import mongoose from "@/lib/mongoose";
import { UsersModel } from "@/app/models/users/user-schema";
import { OrdersModel } from "@/app/models/orders/orders-schema";
import CreateAccount from "@/app/create-account/page";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const requestHeaders = new Headers(req.headers);
  const { customer, deliveryAddress } = await req.json();

  const userId = requestHeaders.get("x-decoded-id");

  if (!userId) {
    return NextResponse.json({ status: 401, message: "Unauthorized user" });
  }

  const id = new mongoose.Types.ObjectId(userId);

  const user = await UsersModel.findById(id);

  if (
    !customer.firstName ||
    !customer.lastName ||
    !deliveryAddress.streetAddress ||
    !deliveryAddress.city ||
    !deliveryAddress.zipCode ||
    !customer.phoneNumber
  ) {
    return NextResponse.json({
      status: 400,
      message: "Please add all necessary information",
    });
  }

  customer.email = user.email;

  try {
    const newOrder = new OrdersModel({
      customer,
      deliveryAddress,
      status: "shopping cart",
      orderCode: "2",
    });

    await newOrder.save();

    return NextResponse.json({
      status: 201,
      message: "Order created",
      orderCode: newOrder.orderCode,
    });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: error.message });
  }
};
