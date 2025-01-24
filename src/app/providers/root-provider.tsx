"use client";
import React, { ReactNode, useEffect } from "react";
import useLangStore, { LangStore } from "../../store/langStore";

export default function RootProvider({ children }: { children: ReactNode }) {
  const setLang = useLangStore((state: LangStore) => state.setLang);
  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    setLang(lang);
  }, []);
  return <div className="h-full">{children}</div>;
}
