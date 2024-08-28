import { create } from "zustand";

export const interestsStore = create((set) => ({
  interestDetails: {},
  setInterestDetails: (data) => set(() => ({ interestDetails: data })),
}));
