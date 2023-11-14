import mongoose from "@/lib/mongoose";
import { AvailableWorksModel } from "@/app/models/available-works";
import { NextRequest, NextResponse } from "next/server";
import { Params } from "@/app/types/params";

export const GET = async (req: NextRequest, { params }: Params) => {
  try {
    const id = new mongoose.Types.ObjectId(params.id);

    const individualWork = await AvailableWorksModel.findById(id);
    console.log("INDIVIDUAL ", individualWork);

    if (individualWork) {
      return NextResponse.json(individualWork, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Individual work not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
