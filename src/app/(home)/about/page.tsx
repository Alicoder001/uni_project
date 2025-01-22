"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Service from "../../../components/service-component";
import Button from "../../../components/button";
import { useState } from "react";
import useLangStorage from "../../../store/langStorage";
import { useTranslations } from "../../../hooks/useTranslations";
import { ILocale } from "../../../types";
import { useGetData } from "../../../hooks/useGetData";
import { IService } from "../../../types/service";

const About = () => {
  const { ready, lang } = useLangStorage((state: any) => state);
  const locale = (lang as ILocale) || "en";
  const serviceData = useGetData("service").data;
  const projectData = useGetData("project").data as IProjectsData;
  const page = "about";
  const {
    translations,
  }: { translations: { [key: string]: string | string[] } } = useTranslations(
    locale,
    page
  );
  console.log(translations);
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* About Section */}
      {Object.keys(translations).length > 0 && ready && (
        <>
          {" "}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pb-24 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `var(--hero-gradient), var(--aboutbg)`,
              backgroundPosition: "center bottom, center",
              backgroundSize: "100% 300px, cover",
            }}
          >
            <div className="container-mini mx-auto px-4 py-20">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
              >
                <Image
                  src="/assets/icons/logo.png"
                  width={200}
                  height={200}
                  alt="logo"
                  className="w-40 md:w-52"
                />
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left text-white">
                  UPT Project
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl mb-6 text-white">
                  {translations["about-title"]}
                </h3>
                <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-300">
                  {translations["about-subtitle1"]}
                </p>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  {translations["about-subtitle2"]}
                </p>
              </motion.div>
            </div>
          </motion.section>
          {/* Services Section */}
          {(serviceData as IService).service_data?.length > 0 && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="py-20"
            >
              <div className="container-mini mx-auto px-4">
                <Service
                  data={serviceData as IService}
                  title={translations["service-title"] as string}
                  type="secondary"
                />
              </div>
            </motion.section>
          )}
          {/* Portfolio Section */}
          {projectData?.projects?.length > 0 && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="pb-20"
            >
              <div className="container-mini mx-auto px-4">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-[var(--item-bg)] p-6 md:p-8 rounded-lg flex flex-col items-center"
                >
                  <p className="mb-8 text-sm md:text-base text-white leading-relaxed w-full">
                    {translations["project-title"]}
                  </p>
                  <ul className="flex flex-col gap-8 w-full mb-8">
                    {projectData.projects?.map((project, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        className="flex flex-col md:flex-row items-start md:items-center gap-4"
                      >
                        <div className="min-w-[112px]">
                          <Image
                            src={project.icon || "/placeholder.svg"}
                            width={112}
                            height={17}
                            alt="project-icon"
                            className="mb-2 md:mb-0 "
                          />
                        </div>
                        <p className="text-sm md:text-base text-white leading-relaxed">
                          {project.description[locale]}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                  <Button
                    text="Portfolio"
                    element={
                      <div className="w-6 h-6 flex items-center justify-center bg-blue-700 rounded-full group-hover:rotate-45 duration-300">
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
                </motion.div>
              </div>
            </motion.section>
          )}
          {/* Wave Features Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pb-24"
          >
            <div className="container-mini mx-auto px-4">
              <motion.h5
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg md:text-xl mb-8 text-white"
              >
                {translations["management"]}
              </motion.h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(translations["waveFeatures"] as string[])?.map(
                  (feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="bg-[var(--item-bg)] shadow-lg flex items-center gap-4 p-4 rounded-lg"
                    >
                      <div className="w-1 h-11 rounded-[4px] bg-white/[0.12]" />
                      <p className="text-sm md:text-base text-white leading-relaxed">
                        {feature}
                      </p>
                    </motion.li>
                  )
                )}
              </ul>
            </div>
          </motion.section>
        </>
      )}
    </div>
  );
};

export default About;
