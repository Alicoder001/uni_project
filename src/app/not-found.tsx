"use client";

import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Sahifa topilmadi</h2>
      <p>Kechirasiz, siz qidirayotgan sahifa mavjud emas</p>
    </div>
  );
}
