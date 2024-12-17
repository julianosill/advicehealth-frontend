import { AppointmentsCard, RemindersCard, StatisticsCard } from '@/components'
import { Page } from '@/components/page'
import { capitalizeFirstLetter } from '@/helpers'
import { useDashboard } from '@/hooks'

export function DashboardPage() {
  const { dateToday } = useDashboard()

  return (
    <>
      <Page.Header>
        <Page.Title>Área de trabalho</Page.Title>
        <Page.Description>{capitalizeFirstLetter(dateToday)}</Page.Description>
      </Page.Header>

      <div className='flex gap-4'>
        <div className='flex flex-1 flex-col gap-4'>
          <StatisticsCard />
          <RemindersCard />
        </div>

        <AppointmentsCard />
      </div>
    </>
  )
}
