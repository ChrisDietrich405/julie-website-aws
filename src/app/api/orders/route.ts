import { NextResponse, NextRequest } from "next/server";

import { OrdersModel } from "@/app/models/orders/orders-schema";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { customer, deliveryAddress } = await req.json();

  if (
    !customer.firstName ||
    !customer.lastName ||
    !deliveryAddress.streetAddress ||
    !deliveryAddress.city ||
    !deliveryAddress.zipCode ||
    !customer.email ||
    !customer.phoneNumber
  ) {
    return NextResponse.json({
      status: 400,
      message: "Please add all necessary information",
    });
  }

  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!customer.email.match(emailFormat)) {
    return NextResponse.json({
      status: 400,
      message: "Incorrect email format",
    });
  }

  try {
    const newOrder = new OrdersModel({
      customer,
      deliveryAddress,
      status: "shopping cart",
      orderCode: Math.random(),
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
