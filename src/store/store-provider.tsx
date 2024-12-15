'use client'

import type React from 'react'
import { Provider } from 'react-redux'

import { store } from '.'

interface StoreProviderProps {
  children: React.ReactNode
}

export function StoreProvider({ children }: Readonly<StoreProviderProps>) {
  return <Provider store={store}>{children}</Provider>
}
