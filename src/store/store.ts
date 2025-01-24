import { create } from "zustand";

export interface IStore {
  contactType: "web" | "mobile" | "other" | null;
  setContactType: (type: string) => void;
}

const useStore = create((set) => {
  return {
    contactType: null,
    setContactType: (type: string) => set({ contactType: type }),
  };
});
