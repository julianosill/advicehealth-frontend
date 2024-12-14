export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions) {
  return date.toLocaleDateString('pt-BR', options)
}
