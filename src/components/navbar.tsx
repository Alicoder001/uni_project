"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useGetData } from "../hooks/useGetData";
import { INavbarTypes } from "../types/navbar";
import { ILocale } from "../types";
import { ILanguage } from "../types/navbar";
import { useRouter } from "next/navigation";
import useLangStore, { LangStore } from "../store/langStore";

export default function AnimatedNavbar() {
  const locale =
    (useLangStore((state: LangStore) => state.lang) as ILocale) || "en";
  const { data } = useGetData("navbar");
  const nav_links = (data as INavbarTypes).links;
  const langs = (data as INavbarTypes).LANGUAGES;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 100], ["96px", "80px"]);
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (nav_links?.length > 0) {
    return (
      <motion.header
        className="fixed top-0 left-0 w-full z-50"
        style={{ height, background }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex items-center justify-between h-full ">
          <div
            className="lg:hidden cursor-pointer hover:bg-blue-800 duration-300 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              className="w-[38px] h-auto"
              src={"/assets/icons/hamburger.svg"}
              alt="Menu Toggle"
              width={38}
              height={38}
              priority
            />
          </div>
          <Link href="/">
            <Image
              className={`cursor-pointer  ${
                isScrolled ? "w-[70px] h-[70px]" : "w-[80px] h-[80px]"
              }`}
              src="/assets/icons/logo.png"
              width={70}
              height={70}
              alt="Logo"
              priority
            />
          </Link>

          <div className="lg:flex lg:gap-12 xl:gap-16 2xl:gap-32">
            <nav
              className="hidden lg:flex items-center gap-16 justify-between"
              aria-label="Main Navigation"
            >
              <ul className="flex items-center lg:gap-8 xl:gap-12">
                {nav_links?.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-base duration-300 font-inter tracking-[0.5px] font-medium text-white/60 hover:text-white"
                    >
                      {label[locale]}
                    </Link>
                  </li>
                ))}
              </ul>

              <ContactNumber />
            </nav>

            <LanguageSelector locale={locale} langs={langs} />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col justify-center items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="absolute top-4 left-4">
                <button
                  className="text-white text-lg font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMenuOpen(false);
                  }}
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="flex flex-col items-center gap-6 py-6">
                {nav_links?.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-lg font-inter tracking-[0.5px] font-medium text-white hover:text-gray-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label[locale]}
                    </Link>
                  </li>
                ))}
                <li>
                  <ContactNumber />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    );
  }
}

function ContactNumber() {
  return (
    <a href="tel:+998712007007">
      <div className="text-lg font-inter tracking-[0.5px] font-medium text-white/60 hover:text-white cursor-pointer duration-300">
        +998 71
        <span className="text-white ml-1">200 70 07</span>
      </div>
    </a>
  );
}

function LanguageSelector({
  locale,
  langs,
}: {
  locale: ILocale;
  langs: ILanguage[];
}) {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(
    langs.find((predicate) => predicate.code === locale) || langs[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  let params = window.location.pathname.split("/");

  const sortedLanguages = [
    selectedLanguage,
    ...langs?.filter((lang) => lang.code !== selectedLanguage.code),
  ];
  const setLang = useLangStore((state: LangStore) => state.setLang);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".language-selector")) {
        setIsOpen(false);
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative language-selector">
      <div
        className={`hidden lg:flex items-center gap-1 border border-white/55 hover:border-white/80 p-1 rounded-lg cursor-pointer duration-300 ${
          isExpanded ? "w-[150px]" : "w-20"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Image
          src="/assets/icons/globe.svg"
          width={24}
          height={24}
          alt="Language Selector"
          priority
        />
        <ul
          style={!isExpanded ? { pointerEvents: "none" } : {}}
          className="flex items-center gap-4 overflow-hidden duration-500"
        >
          {sortedLanguages.map((lang, index) => (
            <li
              key={lang.code}
              className={`whitespace-nowrap duration-300 ${
                index === 0
                  ? "text-white"
                  : "text-white/60 hover:text-white opacity-0"
              } ${isExpanded ? "opacity-100" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setLang(lang.code);
                localStorage.setItem("lang", lang.code);
                setSelectedLanguage(lang);
                setIsExpanded(false);
              }}
            >
              {lang.label[locale]}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <Image
            src="/assets/icons/globe.svg"
            width={20}
            height={20}
            alt="Language Selector"
            priority
          />
          <span>{selectedLanguage.label[locale]}</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <ul className="absolute mt-2 py-2 w-full bg-blue-800 rounded-lg shadow-lg z-10">
            {langs.map((lang) => (
              <li
                key={lang.code}
                className={`px-4 py-2 cursor-pointer ${
                  lang.code === selectedLanguage.code
                    ? "bg-white/20 text-white"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => {
                  setSelectedLanguage(lang);
                  setIsOpen(false);
                  params[1] = lang.code;
                  setLang(lang.code);
                  localStorage.setItem("lang", lang.code);
                }}
              >
                {lang.label[locale]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
