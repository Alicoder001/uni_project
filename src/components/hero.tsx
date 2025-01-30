"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./button";
import useLangStore, { LangStore } from "../store/langStore";
import Link from "next/link";

export default function Hero({
  translations,
}: {
  translations: { [key: string]: string };
}) {
  const ready = useLangStore((state: LangStore) => state.ready);

  return (
    <section
      className="min-h-[110vh] h-full mb-[0.5px] relative overflow-hidden"
      style={{
        background: `var(--hero-gradient) center bottom / 100% 400px no-repeat,             
        url('/assets/images/image.jpg') center / cover no-repeat`,
      }}
    >
      <div className="container flex pt-52 md:pt-60 lg:pt-64 h-full flex-col relative ">
        {Object.keys(translations).length > 0 && ready && (
          <>
            <motion.div
              className="hidden sm:block absolute  top-36 md:top-36 lg:top-44 right-0 md:right-16 w-[400px] h-[400px] "
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                damping: 20,
                stiffness: 100,
                type: "spring",
              }}
            >
              <Image
                className="opacity-50"
                src="/assets/icons/logo.png"
                alt="icon"
                width={500}
                height={500}
                priority
              />
            </motion.div>
            <motion.h2
              className="mb-4 lg:mb-8 md:max-w-[450px] leading-[1.3]"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              {translations["hero_title"]}
            </motion.h2>
            <motion.p
              className="subtitle mb-[50px]"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {translations["hero_subtitle"]}
            </motion.p>
            <motion.div
              className="flex gap-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link href={"/portfolio"}>
                <Button
                  text="Portfolio"
                  element={
                    <div className="w-6 h-6 flex items-center justify-center bg-[var(--primary-color)] rounded-full group-hover:rotate-45 duration-300">
                      <Image
                        src="/assets/icons/button-arrow.svg"
                        width={13}
                        height={24}
                        alt="logo"
                        priority
                      />
                    </div>
                  }
                />
              </Link>
              <Link href={"/contact"}>
                <Button
                  type="secondary"
                  text="Call"
                  element={
                    <Image
                      src="/assets/icons/call.svg"
                      width={24}
                      height={24}
                      alt="logo"
                      priority
                    />
                  }
                />
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
