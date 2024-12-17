import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { ScheduleForm, ScheduleFormHeader } from '@/components'
import { BackButton } from '@/components/back-button'
import { Page } from '@/components/page'
import { Alert } from '@/components/ui/alert'
import { NavLink } from '@/components/ui/nav-link'
import { ROUTES } from '@/routes'
import { useAppSelector } from '@/store'

export function NewSchedulePage() {
  const doctor = useAppSelector(state => state.storeReducer.doctor)
  const navigate = useNavigate()

  useEffect(() => {
    if (!doctor) navigate(ROUTES.schedule)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Page.Header className='space-y-8'>
        <Page.Title>Agendar nova consulta</Page.Title>
        <BackButton />
      </Page.Header>

      {doctor && (
        <>
          <ScheduleFormHeader />
          <ScheduleForm className='mt-8' />
        </>
      )}

      {!doctor && (
        <Alert.Root className='p-6'>
          <Alert.Title className='text-lg'>
            Médico(a) não selecionado(a)!
          </Alert.Title>
          <Alert.Description
            as='div'
            className='flex flex-col gap-4 rounded-xl text-base'
          >
            <p>
              Por favor, selecione o profissional antes de registrar um novo
              agendamento.
            </p>
            <NavLink to={ROUTES.schedule}>
              Clique aqui para selecionar um profissional
            </NavLink>
          </Alert.Description>
        </Alert.Root>
      )}
    </>
  )
}
