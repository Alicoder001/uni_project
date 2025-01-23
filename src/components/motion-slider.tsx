"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Reordering() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 5000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <ul
      style={container}
      className="!pointer-events-none overflow-hidden min-h-6"
    >
      {order.map((backgroundColor) => (
        <motion.li
          key={backgroundColor}
          layout
          transition={spring}
          style={{ ...item }}
        >
          <Image
            className="w-full h-full"
            src={"/assets/images/about_laptop.png"}
            width={300}
            height={300}
            alt="rasm
          "
          />
        </motion.li>
      ))}
    </ul>
  );
}

const initialOrder = ["#ff0088", "#dd00ee", "#9911ff", "#0d63f8"];

/**
 * ==============   Utils   ================
 */
function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

/**
 * ==============   Styles   ================
 */

const spring = {
  type: "spring",
  damping: 15,
  stiffness: 100,
};

const container: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  gap: 5,
  width: 900,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const item: React.CSSProperties = {
  width: 200,
  height: 200,
  borderRadius: "0px",
};
