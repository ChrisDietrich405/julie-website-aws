
// import { Params } from "./app/types/params";

// interface IAuth extends Headers {}

// export function middleware(req: NextRequest, { params }: Params) {

//   let token: IAuth = req.headers;

//   let anothername = token.values;
//   console.log("anothername", anothername);
//   // let tokenHeaders: IAuthorization = new Headers(req.headers.authorization);

//   //   tokenHeaders: IHeadersAuthorization = tokenHeaders.authorization?.split(" ")[1]

//   // if(!token) {
//   //     NextResponse.json({status: 401, message: "Unauthorized"})
//   // }

//   return NextResponse.next();
// }
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken"

export function middleware(req: NextRequest, res: NextResponse) {
  const headersInstance = headers();
  let authorization = headersInstance.get("authorization");

  // if(!authorization) {
  //   return res.status(401).json({})
  // }

  const tokenNumber = authorization?.split(" ")[1];

  const decodedToken = jwt.verify(tokenNumber, process.env.JWT_SECRET as string)


  console.log("auth", authorization);
  


}

export const config = {
  matcher: "/api/user/:path*",
};
