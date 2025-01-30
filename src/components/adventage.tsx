"use client";
import React from "react";

export default function Adventage({
  translations,
}: {
  translations: { [key: string]: string };
}) {
  return (
    <section
      className="pt-24 pb-10 min-h-52"
      style={{ background: "var(--bg-primary)" }}
    >
      {Object.keys(translations)?.length > 0 && (
        <div className="container px-4 ">
          <div className="flex flex-col lg:flex-row gap-9 bg-white/[0.07] pt-14 pb-16 px-6 sm:px-10 lg:px-14 rounded-xl">
            <div className="lg:max-w-[590px]">
              <h2 className="leading-[1.3] mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                {translations["home-join-title"]}
              </h2>
              <p className="text-white/60 text-base sm:text-lg">
                {translations["home-join-subtitle"]}
              </p>
            </div>
            <ul className="flex flex-col gap-6 lg:gap-8">
              <li className="flex items-center gap-3">
                <hr className="h-[2px] w-6 sm:w-7 bg-white opacity-20 rounded" />
                <p className="text-base sm:text-lg text-white">
                  {translations["strong-junior"]}
                </p>
              </li>
              <li className="flex items-center gap-3">
                <hr className="h-[2px] w-6 sm:w-7 bg-white opacity-20 rounded" />
                <p className="text-base sm:text-lg text-white">
                  {translations["middle-frontend"]}
                </p>
              </li>
              <li className="flex items-center gap-3">
                <hr className="h-[2px] w-6 sm:w-7 bg-white opacity-20 rounded" />
                <p className="text-base sm:text-lg text-white">
                  {translations["middle-designer"]}
                </p>
              </li>
              <li className="flex items-center gap-3">
                <hr className="h-[2px] w-6 sm:w-7 bg-white opacity-20 rounded" />
                <p className="text-base sm:text-lg text-white">
                  {translations["middle-backend"]}
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
