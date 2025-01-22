"use client";
import React, { ReactNode } from "react";
import useLangStorage from "../../store/langStorage";

export default function RootProvider({ children }: { children: ReactNode }) {
  const lang = localStorage.getItem("lang") || "en";
  const setLang = useLangStorage((state: any) => state.setLang);
  setLang(lang);

  return <div>{children}</div>;
}
