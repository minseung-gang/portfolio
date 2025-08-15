import { create } from 'zustand';

interface ScrollStore {
  scrollY: number;
  setScrollY: (y: number) => void;
  isDarkSection: boolean;
  setIsDarkSection: (value: boolean) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
  scrollY: 0,
  setScrollY: (y) => set({ scrollY: y }),
  isDarkSection: false,
  setIsDarkSection: (value) => set({ isDarkSection: value }),
}));
