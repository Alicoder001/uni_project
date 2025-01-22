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
import useLangStorage from "../store/langStorage";

export default function AnimatedNavbar() {
  const locale =
    (useLangStorage((state: any) => state.lang) as ILocale) || "en";
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
              className="cursor-pointer"
              src="/assets/icons/logo.png"
              width={isScrolled ? 60 : 70}
              height={isScrolled ? 42 : 52}
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
            >
              <div className="absolute top-4 left-4">
                <button
                  className="text-white text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
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
    <div className="text-lg font-inter tracking-[0.5px] font-medium text-white/60 hover:text-white cursor-pointer duration-300">
      +998 71
      <span className="text-white ml-1">200 70 07</span>
    </div>
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

  let params = window.location.pathname.split("/");
  console.log(params);
  const sortedLanguages = [
    selectedLanguage,
    ...langs?.filter((lang) => lang.code !== selectedLanguage.code),
  ];
  const setLang = useLangStorage((state: any) => state.setLang);
  return (
    <div className="relative">
      <div className="hidden lg:flex items-center gap-1 border group border-white/55 hover:border-white/80 p-1 rounded-lg cursor-pointer group duration-300 w-20 hover:w-[150px]">
        <Image
          src="/assets/icons/globe.svg"
          width={24}
          height={24}
          alt="Language Selector"
          priority
        />
        <ul className="flex items-center gap-4 overflow-hidden duration-500 group">
          {sortedLanguages.map((lang, index) => (
            <li
              key={lang.code}
              className={`whitespace-nowrap duration-300 px-2 group-hover:px-0 ${
                index === 0
                  ? "text-white mr-12 group-hover:mr-0"
                  : "text-white/60  hover:text-white opacity-0 group-hover:opacity-100"
              }`}
              onClick={() => {
                params[1] = lang.code;
                setLang(lang.code);
                localStorage.setItem("lang", lang.code);
                setSelectedLanguage(lang);
                console.log(params.join("/"));
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
