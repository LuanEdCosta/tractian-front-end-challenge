import { useMemo } from 'react'
import { Stack, useTheme } from '@mui/material'
import * as Highcharts from 'highcharts'
import { useTranslation } from 'react-i18next'
import TimelineSetup from 'highcharts/modules/timeline'
import { HighchartsReact } from 'highcharts-react-official'

import { DateUtils } from 'src/utils'
import { DataGroup } from 'src/components'

import { UseAssetReturn } from '../hooks/useAsset.hook'

type HealthHIstoryChartProps = RequiredProperty<Pick<UseAssetReturn, 'asset'>>

TimelineSetup(Highcharts)

export function HealthHIstoryChart({ asset }: HealthHIstoryChartProps) {
  const { t } = useTranslation(['AssetDetails', 'Status'])
  const theme = useTheme()

  const options = useMemo((): Highcharts.Options => {
    const orderedHealthHistory = asset.healthHistory
      .map(({ status, timestamp }) => {
        return {
          status,
          timestamp: new Date(timestamp),
        }
      })
      .sort(({ timestamp: a }, { timestamp: b }) => {
        return a.getTime() - b.getTime()
      })

    return {
      title: {
        text: '',
      },
      yAxis: {
        title: {
          text: t('healthHistory.title').toString(),
        },
      },
      credits: {
        enabled: false,
      },
      colors: asset.healthHistory.map(
        ({ status }) => theme.palette[status].main,
      ),
      series: [
        {
          name: 'status',
          type: 'timeline',
          data: orderedHealthHistory.map(({ status, timestamp }) => ({
            name: DateUtils.format(timestamp, 'dd/MM/yyyy HH:mm:ss'),
            label: t(`Status:${status}`).toString(),
          })),
        },
      ],
    }
  }, [asset.healthHistory, t, theme.palette])

  return (
    <DataGroup title={t('healthHistory.title')} contentPadding={0}>
      <Stack pt={2} pr={2} pb={2} pl={0}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Stack>
    </DataGroup>
  )
}
