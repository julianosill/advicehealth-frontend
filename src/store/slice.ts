import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { DoctorType, SlotType } from '@/types'

type Doctor = Omit<DoctorType, 'specialty'>

export interface StoreState {
  date: string
  doctor: Doctor | null
  doctorSlots: SlotType[] | []
}

const initialState: StoreState = {
  date: new Date().toISOString(),
  doctor: null,
  doctorSlots: [],
}

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload
    },
    setDoctor: (state, action: PayloadAction<Doctor>) => {
      state.doctor = action.payload
    },
  },
})

export const storeReducer = storeSlice.reducer
export const { setDate, setDoctor } = storeSlice.actions
