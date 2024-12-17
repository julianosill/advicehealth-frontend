import { NON_NUMBER_REGEX } from '@/constants'

export function formatCpf(input: string) {
  const sanitizedInput = input.replace(NON_NUMBER_REGEX, '')

  return sanitizedInput
    .replace(/(\d{3})(\d)/, '$1.$2') // Add the first dot after 3rd number
    .replace(/(\d{3}\.\d{3})(\d)/, '$1.$2') // Add the second dot after 6th number
    .replace(/(\d{3}\.\d{3}\.\d{3})(\d)/, '$1-$2') // Add the dash after 9th number
    .replace(/(\d{3}\.\d{3}\.\d{3}-\d{2}).+/, '$1') // Limit to 11 numbers
}
