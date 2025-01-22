import { NextResponse } from "next/server";
import { NextRequest } from "next/server"; // NextApiRequest o'rniga to'g'ri import
import { getTranslations } from "../../../../../lib/i118n";

export async function GET(
  request: NextRequest,
  { params }: { params: { locale: string; page: string } }
) {
  try {
    const { locale, page } = params;

    if (!locale || !page) {
      return NextResponse.json(
        { error: "Missing required parameters: locale or page." },
        { status: 400 }
      );
    }

    const translations = await getTranslations(locale, page);

    return NextResponse.json(translations, { status: 200 });
  } catch (error) {
    console.error("Error fetching translations:", error);
    return NextResponse.json(
      { error: "Failed to fetch translations." },
      { status: 500 }
    );
  }
}
