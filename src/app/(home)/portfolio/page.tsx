import React from "react";
import PortfolioComponent from "../../../components/portfolio-component";

export default function Portfolio() {
  return (
    <div>
      <section
        className="pt-32 pb-24 min-h-[50vh]"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-4">
          <PortfolioComponent />
        </div>
      </section>
    </div>
  );
}
