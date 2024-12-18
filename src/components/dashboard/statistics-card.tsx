import { cn } from '@/lib/utils'

import { Card } from '../ui/card'
import { DailyAndWeeklyStatisticsCard } from './daily-and-weekly-statistics-card'
import { WeeklyRevenueChart } from './weekly-revenue-chart'

export function StatisticsCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card.Root className={cn(className)} {...props}>
      <Card.Header>
        <Card.Title>Estatísticas</Card.Title>
      </Card.Header>

      <Card.Content className='flex flex-row gap-6'>
        <WeeklyRevenueChart />
        <DailyAndWeeklyStatisticsCard className='w-[22rem]' />
      </Card.Content>
    </Card.Root>
  )
}
