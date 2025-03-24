import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ message: "CORS Test" });
  response.headers.set("Access-Control-Allow-Origin", "https://localhost:3000");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return response;
}
