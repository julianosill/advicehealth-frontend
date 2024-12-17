import { cn } from '@/lib/utils'

import { Card } from '../ui/card'
import { DailyAndWeeklyStatisticsCard } from './daily-and-weekly-statistics-card'

export function StatisticsCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card.Root className={cn(className)} {...props}>
      <Card.Header>
        <Card.Title>Estatísticas</Card.Title>
      </Card.Header>

      <Card.Content>
        <DailyAndWeeklyStatisticsCard />
      </Card.Content>
    </Card.Root>
  )
}
