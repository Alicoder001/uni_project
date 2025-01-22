import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import getData from "./src/lib/getData";

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const { filename } = params;
    if (!filename) {
      return NextResponse.json(
        { error: "Missing required parameters: data." },
        { status: 400 }
      );
    }
    const data = await getData(filename);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data." },
      { status: 500 }
    );
  }
}
