import { NextRequest, NextResponse } from "next/server";
import { getTranslations } from "../../../../../lib/i118n";

const GET = async (req: NextRequest) => {
  try {
    const pathParts = req.nextUrl.pathname.split("/");
    const locale = pathParts[pathParts.length - 2];
    const page = pathParts[pathParts.length - 1];

    if (!locale || !page) {
      return NextResponse.json(
        { error: "Locale yoki page parametri topilmadi" },
        { status: 400 }
      );
    }

    const translations = await getTranslations(locale, page);
    return NextResponse.json(translations);
  } catch (error) {
    console.error("Tarjimalarni olishda xatolik:", error);
    return NextResponse.json(
      { error: "Tarjimalarni olishda xatolik yuz berdi" },
      { status: 500 }
    );
  }
};

export { GET };
