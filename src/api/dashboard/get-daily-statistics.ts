import { wait } from '@/helpers'
import { api } from '@/lib/axios'
import type { StatisticType } from '@/types'

interface GetDailyStatisticResponse {
  statistics: StatisticType
}

export async function getDailyStatistics(): Promise<GetDailyStatisticResponse> {
  await wait(300)

  const response = await api.get('/daily-statistic')

  const statistics = response.data

  return { statistics }
}
