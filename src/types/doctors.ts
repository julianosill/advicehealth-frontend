export type DoctorType = {
  id: string
  name: string
  specialty: string
}

export type DoctorWithIdAndName = Pick<DoctorType, 'id' | 'name'>
