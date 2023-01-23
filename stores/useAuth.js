import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useAuth = create(
  persist(
    (set, get) => ({
      token: false,
      addToken: (token) => set({ token }),
      removeToken: () => set({ token: false })
    }),
    {
      name: 'auth-storage', // unique name
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

export default useAuth