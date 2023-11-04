import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
  const client = await clientPromise;
  const db = client.db("julie_website_mongo");
  try {
    const works = await db.collection("available_works").find({}).toArray();
    return NextResponse.json(works, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
