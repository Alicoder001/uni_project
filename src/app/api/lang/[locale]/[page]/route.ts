import { NextResponse } from "next/server";
import { getTranslations } from "../../../../../lib/i118n";
import { NextApiRequest } from "next";

export async function GET(
  request: NextApiRequest,
  { params }: { params: { locale: string; page: string } }
) {
  try {
    const { locale, page } = params;
    console.log(page);
    if (!locale || !page) {
      return NextResponse.json(
        { error: "Missing required parameters: locale or page." },
        { status: 400 }
      );
    }

    const translations = getTranslations(locale, page);

    return NextResponse.json(translations, { status: 200 });
  } catch (error) {
    console.error("Error fetching translations:", error);
    return NextResponse.json(
      { error: "Failed to fetch translations." },
      { status: 500 }
    );
  }
}
