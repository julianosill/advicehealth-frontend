import { formatCurrency } from '@/helpers'
import { useDashboard } from '@/hooks'
import { cn } from '@/lib/utils'

import { Card } from '../ui/card'
import { Separator } from '../ui/separator'
import { StatisticItem } from './statistic-item'

export function DailyAndWeeklyStatisticsCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { dailyStatistics, weeklyStatistics } = useDashboard()

  return (
    <section
      className={cn('flex flex-col gap-6 xl:gap-8', className)}
      {...props}
    >
      <div className='space-y-3'>
        <Card.SubTitle>Números diários</Card.SubTitle>
        <div className='grid grid-cols-[11rem_1fr_auto] gap-x-3'>
          <StatisticItem
            label='Consultas realizadas'
            value={dailyStatistics?.completedAppointments}
            rate={dailyStatistics?.completedAppointmentsdRate}
            className='border-none pt-0'
          />
          <Separator className='col-span-3' />
          <StatisticItem
            label='Consultas canceladas'
            value={dailyStatistics?.canceledAppointments}
            rate={dailyStatistics?.canceledAppointmentsRate}
            invertRateColor
          />
          <Separator className='col-span-3' />
          <StatisticItem
            label='Faturamento'
            value={formatCurrency(dailyStatistics?.revenueInCents)}
            rate={dailyStatistics?.revenueRate}
          />
        </div>
      </div>

      <div className='space-y-3'>
        <Card.SubTitle>Números semanais</Card.SubTitle>
        <div className='grid grid-cols-[11rem_1fr_auto] gap-x-3'>
          <StatisticItem
            label='Consultas realizadas'
            value={weeklyStatistics?.completedAppointments}
            rate={weeklyStatistics?.completedAppointmentsdRate}
            className='border-none pt-0'
          />
          <Separator className='col-span-3' />
          <StatisticItem
            label='Consultas canceladas'
            value={weeklyStatistics?.canceledAppointments}
            rate={weeklyStatistics?.canceledAppointmentsRate}
            invertRateColor
          />
          <Separator className='col-span-3' />
          <StatisticItem
            label='Faturamento'
            value={formatCurrency(weeklyStatistics?.revenueInCents)}
            rate={weeklyStatistics?.revenueRate}
          />
        </div>
      </div>

      <p className='text-right text-xs font-light text-muted-foreground'>
        *porcentagens em relação ao mesmo período anterior
      </p>
    </section>
  )
}
