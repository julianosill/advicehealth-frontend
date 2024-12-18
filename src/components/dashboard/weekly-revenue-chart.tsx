'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import { Card } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { formatCurrency } from '@/helpers'

const chartData = [
  { date: '16/12', revenue: 472900 },
  { date: '17/12', revenue: 520100 },
  { date: '18/12', revenue: 314000 },
  { date: '19/12', revenue: 682500 },
  { date: '20/12', revenue: 372100 },
]

const chartConfig = {
  revenue: {
    label: 'Receita',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function WeeklyRevenueChart() {
  return (
    <div className='flex max-h-[19.5rem] flex-1 flex-col gap-2'>
      <Card.SubTitle>Faturamento semanal</Card.SubTitle>
      <ChartContainer config={chartConfig} className='h-full w-full'>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{ left: 16, right: 16 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='date'
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                className='min-w-10'
                indicator='line'
                formatter={(value, _, item) => (
                  <div className='flex flex-col gap-1'>
                    <span className='text-muted-foreground'>
                      {item.payload.date}
                    </span>
                    <span className='text-sm text-foreground'>
                      {formatCurrency(Number(value))}
                    </span>
                  </div>
                )}
              />
            }
          />
          <Area
            dataKey='revenue'
            type='natural'
            fill='var(--color-revenue)'
            fillOpacity={0.25}
            stroke='var(--color-revenue)'
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}
