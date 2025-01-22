import React, { ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  type?: "primary" | "secondary" | "disabled";
  text: string;
  element?: ReactNode;
}

export default function Button({
  type = "primary",
  text,
  element,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "px-6 py-3 rounded-lg text-base font-medium text-white border flex items-center gap-2 leading-none duration-300 group shrink-0",
        {
          "border-[var(--primary-color)] bg-[var(--secondary-color)] hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)]":
            type === "primary",
          "bg-transparent border-gray-300 text-white hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)]":
            type === "secondary",
        }
      )}
    >
      <span className="leading-none">{text}</span>
      {element && element}
    </button>
  );
}
