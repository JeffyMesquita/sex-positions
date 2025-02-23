import { positions } from "@/data/positions";
import { NextResponse } from "next/server";

export async function GET() {
  const today = new Date();
  const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();
  const index = seed % positions.length;
  return NextResponse.json(positions[index]);
}
