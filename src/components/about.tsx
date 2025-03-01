"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./button";
import Link from "next/link";

const images = [
"https://www.epitech-it.es/wp-content/uploads/2022/07/danial-igdery-FCHlYvR5gJI-unsplash.jpg","https://img.freepik.com/premium-photo/programmer-working-developing-programming-website-working-software-develop-company-office_28283-1354.jpg"
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
      },
    },
  ],
};

const About = ({
  translations,
}: {
  translations: { [key: string]: string };
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-10 md:py-20 overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Images Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -500 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-8">
              <Slider {...sliderSettings} className="custom-slider">
                {images.map((src, index) => (
                  <div key={index} className="outline-none px-2">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`About image ${index + 1}`}
                      width={800}
                      height={500}
                      className="rounded-lg shadow-lg object-cover w-full h-[300px] md:h-[400px]"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, damping: 50, stiffness: 50 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-1 w-10 bg-[var(--text-color)] rounded"></div>
              <p className="text-sm uppercase font-bold text-[var(--text-color)]">
                {translations["about_story"]}
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {translations["about_title"]}
            </h2>

            <p className="text-gray-300 text-base md:text-lg">
              {translations["about_subtitle"]}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 py-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full">
                  <Image
                    src="/assets/icons/thumb.svg"
                    height={24}
                    width={24}
                    alt="Quick solutions"
                  />
                </div>
                <p className="text-white text-base md:text-lg">
                  {translations["quick_solution"]}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="">
                  <Image
                    src="/assets/icons/key.svg"
                    height={24}
                    width={24}
                    alt="Unique projects"
                  />
                </div>
                <p className="text-white text-base md:text-lg">
                  {translations["unique_projects"]}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio">
                <Button text={translations["view_portfolio"]} type="primary" />
              </Link>
              <Link href="/contact">
                <Button text={translations["contact_us"]} type="secondary" />
              </Link>
            </div>

            <div className="mt-10 p-6 bg-[var(--item-bg)] rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-white mb-2">5</h3>
              <p className="text-gray-400 text-sm uppercase font-bold">
                {translations["experience"]}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom styles for slider */}
      <style jsx global>{`
        .custom-slider {
          margin-bottom: 30px;
        }
        .custom-slider .slick-dots {
          bottom: -30px;
        }
        .custom-slider .slick-dots li button:before {
          color: #3b82f6;
          opacity: 0.25;
          font-size: 12px;
        }
        .custom-slider .slick-dots li.slick-active button:before {
          color: #3b82f6;
          opacity: 1;
        }
        @media (max-width: 768px) {
          .custom-slider .slick-dots {
            bottom: -25px;
          }
          .custom-slider .slick-dots li button:before {
            font-size: 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
