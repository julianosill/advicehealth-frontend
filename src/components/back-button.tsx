import { ChevronLeft } from 'lucide-react'
import { type NavigateOptions, type To, useNavigate } from 'react-router'

import { Button } from './ui/button'

interface BackButtonProps {
  to?: To
  options?: NavigateOptions
}

export function BackButton({ to, options }: Readonly<BackButtonProps>) {
  const navigate = useNavigate()

  function handleNavigate() {
    return to
      ? navigate(to, { viewTransition: true, ...options })
      : navigate(-1)
  }

  return (
    <Button
      variant='link'
      className='h-fit gap-1 p-0 pb-1 text-sm font-normal leading-none'
      onClick={handleNavigate}
    >
      <ChevronLeft className='size-4' />
      Voltar
    </Button>
  )
}
