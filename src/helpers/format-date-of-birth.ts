import { NON_NUMBER_REGEX } from '@/constants'

export function formatDateOfBirth(input: string) {
  let sanitizedInput = input.replace(NON_NUMBER_REGEX, '')

  sanitizedInput = sanitizedInput
    .replace(/^([4-9])/, '') // 1st number must be 0-3
    .replace(/^(\d{2})([2-9])/, '$1') // 3rd number must be 0-1
    .replace(/^(\d{4})([3-9])/, '$1') // 5th number must be 1-2

  return sanitizedInput
    .replace(/(\d{2})(\d)/, '$1/$2') // Add slash after 2nd number
    .replace(/(\d{2}\/\d{2})(\d)/, '$1/$2') // Add slash after 5th number
}
