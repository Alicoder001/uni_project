"use client";
import React, { ReactNode, useEffect } from "react";
import useLangStorage from "../../store/langStorage";

export default function RootProvider({ children }: { children: ReactNode }) {
  const setLang = useLangStorage((state: any) => state.setLang);
  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    setLang(lang);
  }, []);
  return <div>{children}</div>;
}
