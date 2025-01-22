import { create } from "zustand";
const useLangStorage = create((set) => {
  return {
    lang: "en",
    ready: false,
    setLang: (lang: string) => {
      set({ lang });
      set({ ready: true });
    },
  };
});
export default useLangStorage;
