import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { storeReducer } from './slice'

export const store = configureStore({ reducer: { storeReducer } })

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
export const useAppDispatch: () => AppDispatchType = useDispatch
