export function generateEmptySlots(date: string) {
  const startDate = new Date(date)
  const endDate = new Date(startDate)

  startDate.setHours(8, 0, 0, 0)
  endDate.setHours(17, 30, 0, 0)

  const slots = []
  const gapIntervalInMinutes = 30

  let i = 1

  while (startDate <= endDate) {
    const currentHours = startDate.getHours()
    const currentMinutes = startDate.getMinutes()
    const skipInterval =
      currentHours === 12 || (currentHours === 13 && currentMinutes < 30)

    if (!skipInterval)
      slots.push({
        id: String(i),
        patient: null,
        datetime: new Date(startDate).toISOString(),
      })
    startDate.setMinutes(startDate.getMinutes() + gapIntervalInMinutes)
    i++
  }

  return slots
}
