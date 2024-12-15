export function formatTime(date: Date | string) {
  const newDate = new Date(date)

  return new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(newDate)
}
