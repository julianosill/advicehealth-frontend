import { ClipboardPen } from 'lucide-react'
import { useNavigate } from 'react-router'

import { ROUTES } from '@/routes'

import { Button } from '../ui/button'

interface EditAppointmentButtonProps {
  id: string
}

export function EditAppointmentButton({
  id,
}: Readonly<EditAppointmentButtonProps>) {
  const navigate = useNavigate()

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() =>
        navigate(`${ROUTES.editSchedule}/${id}`, {
          viewTransition: true,
        })
      }
    >
      <ClipboardPen className='size-4' />
      <span className='sr-only'>Editar</span>
    </Button>
  )
}
