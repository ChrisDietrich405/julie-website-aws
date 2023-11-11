import { NextResponse, NextRequest } from "next/server";
import { UsersModel } from "@/app/models/users";
import bcrypt from "bcryptjs";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { firstName, lastName, email, password } = await req.json();

  if (!firstName || !lastName || !email || !password) {
    return NextResponse.json({
      status: 400,
      message: "Please add all necessary information",
    });
  }

  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email.match(emailFormat)) {
    return NextResponse.json({
      status: 400,
      message: "Incorrect email format",
    });
  }

  const existingEmail = await UsersModel.findOne({ email });
  if (existingEmail) {
    return NextResponse.json({ status: 409, message: "Duplicate email" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UsersModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    console.log("user", newUser);

    return NextResponse.json({ status: 201, message: "User created" });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: error.message });
  }
};
