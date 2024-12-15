type Patient = {
  name: string
}

export type SlotType = {
  id: string
  patient: Patient | null
  datetime: string
}
