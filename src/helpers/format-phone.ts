import { NON_NUMBER_REGEX } from '@/constants'

export function formatPhone(input: string) {
  const sanitizedInput = input.replace(NON_NUMBER_REGEX, '')

  return sanitizedInput.length <= 10
    ? sanitizedInput
        .replace(/(\d{2})(\d)/, '($1) $2') // Add () and space after the 2nd number
        .replace(/(\d{4})(\d)/, '$1-$2') // Add a dash after the next 6th number
    : sanitizedInput
        .replace(/(\d{2})(\d)/, '($1) $2') // Add () and space after the 2nd number
        .replace(/(\d{5})(\d)/, '$1-$2') // Add a dash after the next 7th number
        .replace(/(\(\d{2}\) \d{5}-\d{4}).+/, '$1') // Limit to 11 numbers
}
