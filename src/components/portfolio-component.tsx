"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import readJsonFile from "../lib/getData";

interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  type: string;
  image: string;
  large: boolean;
  gridPosition?: string;
}

const items: PortfolioItem[] = [
  {
    id: 1,
    title: "O'zbekiston",
    subtitle: "TV Show Website",
    type: "website",
    image: "/assets/images/pc.png",
    large: true,
    gridPosition: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
  {
    id: 2,
    title: "Toshkent Parfum",
    subtitle: "E-commerce Mobile App",
    type: "mobile",
    image: "/assets/images/toshkent-parfum.png",
    large: true,
    gridPosition: "lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-5",
  },
  {
    id: 3,
    title: "Anatomica",
    subtitle: "Healthcare Platform",
    type: "website",
    image: "/assets/images/anatomica-web.png",
    large: false,
  },
  {
    id: 4,
    title: "Ricomel",
    subtitle: "Beverage Brand",
    type: "branding",
    image: "/assets/images/ricomel.png",
    large: false,
  },
  {
    id: 5,
    title: "Express 24",
    subtitle: "Delivery App",
    type: "mobile",
    image: "/assets/images/express.png",
    large: false,
  },
  {
    id: 6,
    title: "Anatomica",
    subtitle: "Mobile App",
    type: "mobile",
    image: "/assets/images/anatomica-app.png",
    large: false,
  },
  {
    id: 7,
    title: "Toshkent Parfum",
    subtitle: "E-commerce Website",
    type: "website",
    image: "/assets/images/toshkent-parfum-web.png",
    large: false,
  },
  {
    id: 8,
    title: "Infomax Systems",
    subtitle: "CRM Platform",
    type: "crm",
    image: "/assets/images/infomax.png",
    large: false,
  },
  {
    id: 9,
    title: "Wayu Group",
    subtitle: "Corporate Website",
    type: "website",
    image: "/assets/images/flag.png",
    large: false,
  },
  {
    id: 10,
    title: "Uzbekistan's Club",
    subtitle: "Brand Identity",
    type: "branding",
    image: "/assets/images/uzbekistan-club.png",
    large: false,
  },
];

const filters = ["all", "branding", "mobile", "crm", "website"];

export default function PortfolioComponent() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const filteredItems = React.useMemo(() => {
    return activeFilter === "all"
      ? items
      : items.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleItems(new Set());
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.id);
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(id));
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((item) => item && observer.observe(item));

    return () => {
      itemRefs.current.forEach((item) => item && observer.unobserve(item));
    };
  }, [filteredItems]);

  return (
    <>
      <header className="mb-8">
        <h1 className="text-white text-3xl font-bold mb-4">Portfolio</h1>
        <div className="flex flex-wrap gap-4 text-white/60">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`capitalize cursor-pointer transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-3 py-1
                  ${activeFilter === filter ? "text-white bg-white/10" : ""}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>
      <ul className={`grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4`}>
        {filteredItems.map((item, index) => (
          <li
            key={item.id}
            id={item.id.toString()}
            ref={(el) => {
              if (el) itemRefs.current[index] = el;
            }}
            className={`relative overflow-hidden rounded-2xl group transition-all duration-500 ease-out transform 
                ${
                  visibleItems.has(item.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
          >
            <Image
              src={item.image || "/assets/images/pc.png"}
              width={564}
              height={424}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div>
                <h4
                  className={`font-extrabold leading-[1.3] text-white opacity-80 group-hover:opacity-100`}
                >
                  {item.title}
                </h4>
                <span className="font-semibold leading-[1.5] block text-white/50 group-hover:text-white/80">
                  {item.subtitle}
                </span>
              </div>
              <ArrowUpRight
                className="text-white opacity-0 transform translate-y-4
                    transition-all duration-300 group-hover:opacity-100 
                    group-hover:translate-y-0"
                size={24}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
