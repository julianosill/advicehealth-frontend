import { useParams } from 'react-router'

import { ScheduleForm, ScheduleFormHeader } from '@/components'
import { BackButton } from '@/components/back-button'
import { Page } from '@/components/page'

export function EditSchedulePage() {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <Page.Header className='space-y-8'>
        <Page.Title>Alterar consulta</Page.Title>
        <BackButton />
      </Page.Header>

      <ScheduleFormHeader />

      <ScheduleForm appointmentId={id} className='mt-8' />
    </>
  )
}
