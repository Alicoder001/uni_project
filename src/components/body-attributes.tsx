"use client";

import { useEffect } from "react";

export default function BodyAttributes() {
  useEffect(() => {
    // This effect runs only on the client side
    document.body.setAttribute("cz-shortcut-listen", "true");
  }, []);

  return null;
}
