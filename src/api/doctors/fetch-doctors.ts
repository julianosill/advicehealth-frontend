import { wait } from '@/helpers'
import { api } from '@/lib/axios'
import type { DoctorType } from '@/types'

export async function fetchDoctors(): Promise<DoctorType[]> {
  await wait(300)

  const response = await api.get(`/doctors`)

  const doctors = response.data

  return doctors
}
