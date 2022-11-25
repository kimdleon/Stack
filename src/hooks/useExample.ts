import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ExampleState {
  count: number
  increase: (by: number) => void
}

export const useExample = create<ExampleState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increase: (by) => set((state) => ({ count: state.count + by })),
      }),
      {
        name: 'example-storage',
      }
    )
  )
)
