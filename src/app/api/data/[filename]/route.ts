import { NextRequest, NextResponse } from "next/server";
import getData from "../../../../lib/getData";

const GET = async (req: NextRequest) => {
  try {
    // URL dan filename ni olish
    const filename = req.nextUrl.pathname.split("/").pop();

    if (!filename) {
      return NextResponse.json(
        { error: "Filename parametri topilmadi" },
        { status: 400 }
      );
    }

    const data = await getData(filename);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Ma'lumotlarni olishda xatolik:", error);
    return NextResponse.json(
      { error: "Ma'lumotlarni olishda xatolik yuz berdi" },
      { status: 500 }
    );
  }
};

export { GET };
