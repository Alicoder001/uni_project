"use client";
import { useState } from "react";
import About from "../../components/about";
import Adventage from "../../components/adventage";
import Hero from "../../components/hero";
import PortfolioComponent from "../../components/portfolio-component";
import Preloader from "../../components/Preloader";
import ServiceComponent from "../../components/service-component";
import { useGetData } from "../../hooks/useGetData";
import { useTranslations } from "../../hooks/useTranslations";

import useLangStore, { LangStore } from "../../store/langStore";
import { ILocale } from "../../types";
import { IService } from "../../types/service";

export default function Page() {
  const locale =
    (useLangStore((state: LangStore) => state.lang) as ILocale) || "en";

  const page = "home";
  const { translations } = useTranslations(locale, page);
  const { data, loading } = useGetData("service");
  const portfolioData = useGetData("portfolio").data as PortfolioData;
  const [videoEnded, setVideoEnded] = useState(false);
  console.log(!loading && videoEnded);
  return (
    <>
      {!loading && videoEnded ? (
        <div className="h-full">
          <Hero translations={translations} />
          <About translations={translations} />
          {portfolioData.portfolio_data?.length > 0 && (
            <section
              className="py-24 min-h-[50vh]"
              style={{ background: "var(--bg-primary)" }}
            >
              <div className="container mx-auto px-4">
                <PortfolioComponent data={portfolioData} />
              </div>
            </section>
          )}

          {(data as IService).service_data?.length > 0 && (
            <section
              className="py-24"
              style={{ background: "var(--bg-primary)" }}
            >
              <div className="container">
                <ServiceComponent title="Services" data={data as IService} />
              </div>
            </section>
          )}
          <Adventage />
        </div>
      ) : (
        <Preloader setVideoEnded={setVideoEnded} />
      )}
    </>
  );
}
