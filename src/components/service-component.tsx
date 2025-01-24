"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useGetData } from "../hooks/useGetData";
import useLangStore, { LangStore } from "../store/langStore";
import { ILocale } from "../types";
import { IService } from "../types/service";
import Link from "next/link";

interface ServiceProps {
  title: string;
  type?: "primary" | "secondary";
  data: IService;
}

export default function ServiceComponent({
  title,
  type = "primary",
  data,
}: ServiceProps) {
  const locale =
    (useLangStore((state: LangStore) => state.lang) as ILocale) || "en";
  const serviceItems = (data as IService)?.["service_data"];
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = useCallback((node: HTMLLIElement | null) => {
    if (node !== null) {
      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const id = Number(entry.target.id);
              if (entry.isIntersecting) {
                setVisibleItems((prev) => new Set(prev).add(id));
              }
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
        );
      }
      observerRef.current.observe(node);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="py-16 bg-[var(--bg-secondary)] rounded-xl">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
        >
          {title}
        </motion.h2>

        <ul
          className={`grid grid-cols-1 md:grid-cols-2 ${
            type === "secondary" ? "lg:grid-cols-3" : ""
          } gap-6`}
        >
          {serviceItems?.map((item, index) => (
            <motion.li
              key={item.id}
              id={item.id.toString()}
              ref={observe}
              initial={{ opacity: 0, y: 50 }}
              animate={visibleItems.has(item.id) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--item-bg)] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 "
            >
              <Link href={`/contact/${item.type}`}>
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {item.title[locale]}
                </h4>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {item.description[locale]}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
