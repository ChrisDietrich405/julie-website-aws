import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import * as jose from "jose";

export const middleware = async (req: NextRequest, res: NextResponse) => {
  const headersInstance = headers();
  let authorization = headersInstance.get("authorization");

  const tokenNumber: any = authorization?.split(" ")[1];

  const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);

  const decodedToken = await jose.jwtVerify(tokenNumber, secret);
 
  NextResponse.json(decodedToken.payload.id);
};

export const config = {
  matcher: "/api/user/:path*",
};
