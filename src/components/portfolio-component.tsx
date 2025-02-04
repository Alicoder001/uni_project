"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import useLangStore, { LangStore } from "../store/langStore";
import { ILocale } from "../types";

export default function PortfolioComponent({ data }: { data: PortfolioData }) {
  const locale = useLangStore((state: LangStore) => state.lang) as ILocale;

  const [activeFilter, setActiveFilter] = useState("all");
  const items = (data as PortfolioData).portfolio_data;
  const filteredItems = React.useMemo(() => {
    return activeFilter === "all"
      ? items
      : items?.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header className="mb-8">
        <h1 className="text-white text-3xl font-bold mb-4">
          {data.title && data.title[locale]}
        </h1>
        <div className="flex flex-wrap gap-4 text-white/60">
          {data?.categories?.map((filter) => (
            <button
              key={filter.type}
              onClick={() => handleFilterChange(filter.type)}
              className={`capitalize cursor-pointer transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-3 py-1
                  ${
                    activeFilter === filter.type ? "text-white bg-white/10" : ""
                  }`}
            >
              {filter.label[locale]}
            </button>
          ))}
        </div>
      </header>
      <ul className={`grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4`}>
        {filteredItems?.map((item, index) => (
          <motion.li
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={animationVariants}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className={`relative overflow-hidden rounded-2xl group transform transition-all duration-500`}
          >
            <Image
              src={item.image || "/assets/images/pc.png"}
              width={564}
              height={424}
              alt={item.title[locale]}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div>
                <h4
                  className={`font-extrabold leading-[1.3] text-white opacity-80 group-hover:opacity-100`}
                >
                  {item.title[locale]}
                </h4>
                <span className="font-semibold leading-[1.5] block text-white/50 group-hover:text-white/80">
                  {item.subtitle[locale]}
                </span>
              </div>
              <ArrowUpRight
                className="text-white opacity-0 transform translate-y-4
                    transition-all duration-300 group-hover:opacity-100 
                    group-hover:translate-y-0"
                size={24}
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
