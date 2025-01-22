import React from "react";

export default function Adventage() {
  return (
    <section
      className="pt-24 pb-10"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container px-4 ">
        <div className="flex flex-col lg:flex-row gap-9 bg-white/[0.07] pt-14 pb-16 px-6 sm:px-10 lg:px-14 rounded-xl">
          <div className="lg:max-w-[590px]">
            <h2 className="leading-[1.3] mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              You can also be among this team :)
            </h2>
            <p className="text-white/60 text-base sm:text-lg">
              Do you want to grow with us? Now prove to us that you need it!
              Become an integral part of the team
            </p>
          </div>
          <ul className="flex flex-col gap-6 lg:gap-8">
            <li className="flex items-center gap-3">
              <hr className="h-[2px] w-6 sm:w-7 bg-white opacity-20 rounded" />
              <p className="text-base sm:text-lg text-white">
                Strong Junior QA Software Engineer
              </p>
            </li>
            <li className="flex items-center gap-3">
              <hr className="h-[2px] w-6 sm:w-7 bg-white opacity-20 rounded" />
              <p className="text-base sm:text-lg text-white">
                Middle Frontend Developer (VueJS)
              </p>
            </li>
            <li className="flex items-center gap-3">
              <hr className="h-[2px] w-6 sm:w-7 bg-white opacity-20 rounded" />
              <p className="text-base sm:text-lg text-white">
                Middle UI/UX Designer
              </p>
            </li>
            <li className="flex items-center gap-3">
              <hr className="h-[2px] w-6 sm:w-7 bg-white opacity-20 rounded" />
              <p className="text-base sm:text-lg text-white">
                Middle Backend Software Engineer (Python Django)
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
