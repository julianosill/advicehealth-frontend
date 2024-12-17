export function normalizeText(value?: string) {
  if (!value) return ''

  return value
    .normalize('NFKD')
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .toLowerCase()
    .trim()
}
