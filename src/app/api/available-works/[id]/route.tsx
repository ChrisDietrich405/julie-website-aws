import mongoose from "@/lib/mongoose";
import { AvailableWorksModel } from "@/app/models/available-works";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = new mongoose.Types.ObjectId(params.id);
    const individualWork = await AvailableWorksModel.findById(id);

    if (individualWork) {
      console.log(individualWork, id);
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
