import { wait } from '@/helpers'
import { api } from '@/lib/axios'
import type { StatisticType } from '@/types'

interface GetDailyStatisticResponse {
  statistics: StatisticType
}

export async function getWeeklyStatistics(): Promise<GetDailyStatisticResponse> {
  await wait(400)

  const response = await api.get('/weekly-statistic')

  const statistics = response.data

  return { statistics }
}
