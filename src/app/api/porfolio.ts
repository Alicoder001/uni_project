// app/api/portfolio/route.js
import { NextApiRequest, NextApiResponse } from "next";
import readJsonFile from "../../lib/getData";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const portfolioData = await readJsonFile("portfolio.json"); // Serverda bajariladi
  return new Response(JSON.stringify(portfolioData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
