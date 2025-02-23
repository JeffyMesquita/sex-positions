import { NextResponse } from "next/server";
import { positions } from "@/data/positions";

export async function GET() {
  return NextResponse.json(positions);
}
