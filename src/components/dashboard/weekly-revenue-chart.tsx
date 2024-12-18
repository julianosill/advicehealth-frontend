'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import { Card } from '@/components/ui/card'
import { Chart, type ChartConfig } from '@/components/ui/chart'
import { formatCurrency } from '@/helpers'
import { cn } from '@/lib/utils'

const chartData = [
  { date: '16/12', revenue: 472900 },
  { date: '17/12', revenue: 520100 },
  { date: '18/12', revenue: 314000 },
  { date: '19/12', revenue: 682500 },
  { date: '20/12', revenue: 372100 },
]

const chartConfig = {
  revenue: { color: 'hsl(var(--chart-1))' },
} satisfies ChartConfig

export function WeeklyRevenueChart({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cn('flex flex-1 flex-col gap-2', className)} {...props}>
      <Card.SubTitle>Faturamento semanal</Card.SubTitle>

      <Chart.Container config={chartConfig} className='h-full w-full'>
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
          <Chart.Tooltip
            cursor={false}
            content={
              <Chart.TooltipContent
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
      </Chart.Container>
    </div>
  )
}
