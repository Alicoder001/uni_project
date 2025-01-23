"use client";
import React from "react";
import ServiceComponent from "../../../components/service-component";
import useLangStorage from "../../../store/langStorage";
import { useGetData } from "../../../hooks/useGetData";
import { ILocale } from "../../../types";
import { IService } from "../../../types/service";

export default function Service() {
  const { data } = useGetData("service");
  return (
    <div>
      <section
        className="pt-32 pb-24 min-h-screen"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="container">
          <div className="flex items-center gap-[7px] mb-6">
            <p className="text-sm uppercase font-extrabold text-[var(--text-color)]">
              IS THERE A PROBLEM?
            </p>
          </div>
          {(data as IService).service_data?.length > 0 && (
            <ServiceComponent
              data={data as IService}
              title="What solution do you want?

"
            />
          )}
        </div>
      </section>
    </div>
  );
}
