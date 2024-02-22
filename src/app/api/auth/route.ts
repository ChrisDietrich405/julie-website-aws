import { NextResponse, NextRequest } from "next/server";
import { UsersModel } from "@/app/models/users/user-schema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      {
        status: 400,
        message: "Please add all necessary information",
      },
      {
        status: 400,
      }
    );
  }

  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email.match(emailFormat)) {
    return NextResponse.json(
      {
        status: 400,
        message: "Incorrect email format",
      },
      {
        status: 400,
      }
    );
  }

  const existingAccount = await UsersModel.findOne({ email });
  if (!existingAccount) {
    return NextResponse.json(
      { status: 401, message: "Incorrect credentials" },
      {
        status: 401,
      }
    );
  }

  const matchedPassword = await bcrypt.compare(
    password,
    existingAccount.password
  );
  if (!matchedPassword) {
    return NextResponse.json(
      { status: 401, message: "Incorrect credentials" },
      {
        status: 401,
      }
    );
  }

  const token = jwt.sign(
    { id: existingAccount._id },
    process.env.JWT_SECRET as string,
    { expiresIn: "2d" }
  );

  return NextResponse.json({
    userId: existingAccount._id,
    token,
    status: 200,
    message: "User logged in",
  });
};
