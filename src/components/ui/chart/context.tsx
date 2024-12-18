import * as React from 'react'

import type { ChartConfig } from './config'

type ChartContextProps = {
  config: ChartConfig
}

export const ChartContext = React.createContext<ChartContextProps | null>(null)
