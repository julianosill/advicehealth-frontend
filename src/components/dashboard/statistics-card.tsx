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

      <Card.Content className='flex gap-6 max-xl:flex-col'>
        <WeeklyRevenueChart className='xl:max-h-[19.5rem]' />
        <DailyAndWeeklyStatisticsCard className='xl:w-[21rem]' />
      </Card.Content>
    </Card.Root>
  )
}
