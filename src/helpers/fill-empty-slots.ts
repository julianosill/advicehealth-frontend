import type { AppointmentType, SlotType } from '@/types'

export function fillEmptySlots(
  emptySlots: SlotType[],
  appointments: AppointmentType[],
) {
  const slotsMap = new Map(
    appointments.map(item => [
      item.datetime,
      { id: item.id, patient: { name: item.name } },
    ]),
  )

  const slots = emptySlots.map(slot => {
    const matched = slotsMap.get(slot.datetime)
    return matched
      ? { ...slot, id: matched.id, patient: matched.patient }
      : slot
  })

  return slots
}
