import { NextResponse, NextRequest } from "next/server";

import { Params } from "@/app/types/params";
import { OrdersModel } from "@/app/models/orders/orders-schema";

export const PUT = async (req: NextRequest, { params }: Params) => {
  const payment = await req.json();

  try {
    const order = await OrdersModel.findOne({ orderCode: params.id });

    if (!order) {
      return NextResponse.json({ status: 404, message: "Not found" });
    }

    await order.updateOne({
      payment,
      status: "new",
    });

    return NextResponse.json({ status: 200, message: "User updated" });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ status: 500, message: error.message });
  }
};

export const GET = async (req: NextRequest, { params }: Params) => {
  const requestHeaders = new Headers(req.headers);

  try {
    const order = await OrdersModel.findOne({ orderCode: params.id });

    if (!order) {
      return NextResponse.json({ status: 404, message: "Not found" });
    }

    return NextResponse.json({
      status: 200,
      data: order,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Server failed" });
  }
};
