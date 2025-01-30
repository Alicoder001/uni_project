"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useLangStore, { LangStore } from "../store/langStore";
import { ILocale } from "../types";
import { useTranslations } from "../hooks/useTranslations";
import { useGetData } from "../hooks/useGetData";
import { INavbarTypes } from "../types/navbar";

const SOCIAL_ICONS = ["facebook", "x", "instagram", "telegram", "linkedin"];

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  const locale =
    (useLangStore((state: LangStore) => state.lang) as ILocale) || "en";
  const page = "common";
  const { data } = useGetData("navbar");
  const nav_links = (data as INavbarTypes).links;
  const { translations }: { translations: { [keys: string]: string } } =
    useTranslations(locale, page);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const latitude = "41°00'07\"N";
  const longitude = "71°39'32\"E";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}`;

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible = footerRect.top < window.innerHeight;
        setShowButton(isFooterVisible && window.scrollY > 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="flex-grow-0 bg-gray-900 pt-10 pb-6">
      <div className="container mx-auto px-4">
        {Object.keys(translations).length > 0 && nav_links?.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
                {nav_links?.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm sm:text-base duration-300 font-inter tracking-[0.5px] font-medium text-white/60 hover:text-white"
                    >
                      {label[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-6 lg:gap-4 items-center justify-between mb-12"
            >
              <ul className="flex gap-3">
                {SOCIAL_ICONS.map((icon) => (
                  <motion.li
                    key={icon}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-[38px] h-[38px] rounded-full border-[#6A6A6C] border-[1px] flex items-center justify-center hover:bg-[var(--hover-bg)] hover:border-[var(--hover-bg)] duration-300 cursor-pointer"
                  >
                    <Link
                      href={`https://${icon}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={`/assets/icons/${icon}.svg`}
                        width={38}
                        height={38}
                        alt={`${icon} icon`}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/icons/mail.svg"
                    width={24}
                    height={24}
                    alt="Email icon"
                  />
                  <a
                    href="mailto:info@upt.group"
                    className="text-sm sm:text-base text-white/60 hover:text-white transition-colors"
                  >
                    info@upt.group
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/icons/call.svg"
                    width={24}
                    height={24}
                    alt="Phone icon"
                  />
                  <a
                    href="tel:+998712007007"
                    className="text-sm sm:text-base text-white/60 hover:text-white transition-colors"
                  >
                    +998 71 200 70 07
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <p className="opacity-60 text-sm text-white">
                © UPT Project Tech {new Date().getFullYear()}
              </p>
              <Image
                src="/assets/icons/logo.png"
                width={60}
                height={32}
                alt="UPT GROUP logo"
              />
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 py-3 px-4 border-[1px] border-white/60 rounded-lg">
                <Image
                  src="/assets/icons/street.svg"
                  width={24}
                  height={24}
                  alt="Location icon"
                />
                <p className="opacity-60 text-sm font-medium text-white text-center sm:text-left">
                  {translations["adress"]}
                </p>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={mapUrl}
                  className="px-3 py-2 bg-white/[0.16] rounded-[6px] text-white hover:bg-white/[0.24] transition-colors"
                >
                  {translations["map"]}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </div>
      {showButton && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-52 right-6 border-[#A5A5A6] border-[1px] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <Image
            src="/assets/icons/arrow-top.svg"
            width={11}
            height={23}
            alt="Scroll to top"
          />
        </motion.button>
      )}
    </footer>
  );
}
