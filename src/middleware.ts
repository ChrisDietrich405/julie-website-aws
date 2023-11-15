import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import * as jose from "jose";

export const middleware = async (req: NextRequest, res: NextResponse) => {
  const pathArray = ["/api/user", "/api/auth"];

  const pathName = req.nextUrl.pathname;

  for (let item of pathArray) {
    if (pathName === item) {
      return NextResponse.next();
    }
  }

  try {
    if (pathName.startsWith("/api")) {
      const headersInstance = headers();

      let authorization = headersInstance.get("authorization");

      const tokenNumber: any = authorization?.split(" ")[1];

      const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);

      const decodedToken = await jose.jwtVerify(tokenNumber, secret);

      if(!decodedToken.payload.id) {
        return NextResponse.json("Unauthorized user", {status: 401})
      }

      const requestHeaders = new Headers(req.headers);


      requestHeaders.set("x-decoded-id", `${decodedToken.payload.id}`);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }
  } catch (error) {
    return NextResponse.json("Server failed", { status: 500 });
  }
};
