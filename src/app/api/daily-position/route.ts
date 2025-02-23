import { NextResponse } from "next/server";
import type { Position } from "@/types/position";

const positions: Position[] = [
  // Same as in the positions route
];

export async function GET() {
  const today = new Date();
  const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();
  const index = seed % positions.length;
  return NextResponse.json(positions[index]);
}
