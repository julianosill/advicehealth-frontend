import { NUMBER_REGEX } from '@/constants'

export function formatName(input: string) {
  return input.replace(NUMBER_REGEX, '')
}
