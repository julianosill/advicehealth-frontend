export function formatDate(
  date: Date | string,
  options?: Intl.DateTimeFormatOptions,
) {
  const newDate = new Date(date)

  return newDate.toLocaleDateString('pt-BR', options)
}
