import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
// import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";

export const middleware = async (req: NextRequest, res: NextResponse) => {
  const headersInstance = headers();
  let authorization = headersInstance.get("authorization");

  // if(!authorization) {
  //   return res.status(401).json({})
  // }
  const tokenNumber: any = authorization?.split(" ")[1];

  const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);

  const decodedToken = await jose.jwtVerify(tokenNumber, secret);

  NextResponse.json(decodedToken.payload.id);

  // return decodedToken.payload.id;
};

export const config = {
  matcher: "/api/user/:path*",
};
