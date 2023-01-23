import { create } from 'zustand'

const useNavbar = create((set) => ({
  active: 0,
  show: () => set(() => ({ active: 1 })),
  hide: () => set({ active: 0 }),
}))

export default useNavbar;