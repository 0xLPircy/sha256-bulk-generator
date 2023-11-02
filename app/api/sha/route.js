import { NextResponse } from "next/server";

const BASE_URL =
  "https://emn178.github.io/online-tools/sha256.html?input_type=utf-8";
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const input = searchParams.get("input");
  const res = await fetch(
    BASE_URL +
      "&input=" +
      input +
      "&hmac_input_type=utf-8" +
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
  );
  const product = await res.json();
  return NextResponse.json({ product });
}
