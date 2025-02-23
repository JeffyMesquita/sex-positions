import { NextResponse } from "next/server";
import { positions } from "@/data/positions";

export async function GET() {
  const randomIndex = Math.floor(Math.random() * positions.length);
  return NextResponse.json(positions[randomIndex]);
}
