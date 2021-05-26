import create from "zustand"
import { persist } from "zustand/middleware"
import { devtools } from 'zustand/middleware'
import { BearState, BearsTypes } from '../types'
import produce from 'immer'



// const useStore = create(set => ({
//     lush: { forest: { contains: { a: "bear" } } },
//     swap: fn => set(produce(fn)),
//   }))

//   const immerSwap = useStore(state => state.swap)
//   immerSwap(state => {
//     state.lush.forest.contains = null
//   })


export const useStore = create<BearState>(devtools(persist((set, get) => ({
    forest: { bears: 0, bearType: BearsTypes.Polar },
    increaseBears: (addedNumber) => set(state => ({
        ...state, forest: {
            ...state.forest,
            bears: state.forest.bears + addedNumber
        }
    })),
    swapBears: (newBearType) => set(state => ({
        ...state, forest: {
            ...state.forest,
            bearType: newBearType
        }
    }))
}), {
    name: "zustand-storage", // unique name
    getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
}
)))
