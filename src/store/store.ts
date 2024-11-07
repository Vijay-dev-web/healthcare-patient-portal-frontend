import { configureStore } from '@reduxjs/toolkit'
import overallReducer from "../store/overAllSlice"

export const store = configureStore({
  reducer: {
    overall: overallReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch