// import clientPromise from "../../../lib/mongodb";
import { NextResponse, NextRequest } from "next/server";
import { SimpleConsoleLogger } from "typeorm";

export const config = {
  api: {
    bodyParser: true,
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { firstName, lastName, email, password } = await req.json();

  if (!firstName || !lastName || !email || !password) {
    return NextResponse
      .json({ status: 400, message: "Please add all necessary information" });
  }

  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (!email.match(emailFormat)) {
        return NextResponse
        .json({ status: 400, message: "Incorrect email format" });
    }
      
    const existingUser = await AppDataSource.manager.findOneBy(User, {
      email,
    });

  
  return NextResponse.json({ status: 200 });
  //   if (req.method === "PUT") {
  //     console.log("great success", await req);
  //   } else {
  //     // Handle any other HTTP method
  //   }
};
