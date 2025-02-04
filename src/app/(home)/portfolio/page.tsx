"use client";
import React from "react";
import PortfolioComponent from "../../../components/portfolio-component";
import { useGetData } from "../../../hooks/useGetData";

export default function Portfolio() {
  const portfolioData = useGetData("portfolio").data as PortfolioData;
  return (
    <div className="h-full min-h-screen">
      {Object.keys(portfolioData).length > 0 && (
        <section
          className="py-24  "
          style={{ background: "var(--bg-primary)" }}
        >
          <div className="container mx-auto px-4">
            <PortfolioComponent data={portfolioData} />
          </div>
        </section>
      )}
    </div>
  );
}
