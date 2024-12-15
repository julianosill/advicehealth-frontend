import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SlotType } from '@/types'

export interface StoreState {
  date: string
  doctorId: string | null
  doctorSlots: SlotType[]
}

const initialState: StoreState = {
  date: new Date().toISOString(),
  doctorId: null,
  doctorSlots: [],
}

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload
    },
    selectDoctor: (state, action: PayloadAction<string>) => {
      state.doctorId = action.payload
    },
    selectDoctorSlots: (state, action: PayloadAction<SlotType[]>) => {
      state.doctorSlots = action.payload
    },
  },
})

export const storeReducer = storeSlice.reducer
export const { setDate, selectDoctor, selectDoctorSlots } = storeSlice.actions
