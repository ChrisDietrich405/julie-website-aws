import clientPromise from "../../lib/mongodb";
import { NextResponse, NextRequest } from "next/server";

export const GET = async () => {
  const client = await clientPromise;
  const db = client.db("julie_website_mongo");
  try {
    const testimonials = await db
      .collection("available_works")
      .find({})
      .toArray();
    return NextResponse.json(testimonials, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
