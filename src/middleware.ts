import { NextRequest, NextResponse } from "next/server";
import { Params } from "./app/types/params";

export function middleware(request:NextRequest, {params}: Params) {
    console.log("middleware", request.url)
    return NextResponse.next()
}



export const config = {
    matcher: '/api/user/:path*',
  }