import { create } from "zustand";

export interface LangStore {
  lang: string;
  ready: boolean;
  setLang: (lang: string) => void;
}

const useLangStore = create<LangStore>((set) => {
  return {
    lang: "en",
    ready: false,
    setLang: (lang: string) => {
      set({ lang });
      set({ ready: true });
    },
  };
});
export default useLangStore;
