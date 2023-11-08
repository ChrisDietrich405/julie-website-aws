import mongoose from "@/lib/mongoose";
import { AvailableWorksModel } from "@/app/models/available-works";
import { NextResponse, NextRequest } from "next/server";

export const GET = async () => {
  try {
    const allWorks = await AvailableWorksModel.find();
    return NextResponse.json(allWorks, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
