import { NON_NUMBER_REGEX } from '@/constants'

export function formatPrice(input: string) {
  const sanitizedInput = input.replace(NON_NUMBER_REGEX, '')

  return sanitizedInput
}
