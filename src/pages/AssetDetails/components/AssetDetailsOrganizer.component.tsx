import { Grid, Stack } from '@mui/material'

import { UseAssetReturn } from '../hooks/useAsset.hook'

import { AssetDetailsPanel } from './AssetDetailsPanel.component'
import { AssetDetailsMetrics } from './AssetDetailsMetrics.component'

type AssetDetailsOrganizerProps = RequiredProperty<
  Pick<UseAssetReturn, 'asset'>
>

export function AssetDetailsOrganizer({ asset }: AssetDetailsOrganizerProps) {
  return (
    <Stack>
      <Grid mx="-1rem !important" spacing={2} wrap="wrap-reverse" container>
        <Grid xs={12} sm={6} md={7} lg={8} item>
          <AssetDetailsMetrics />
        </Grid>

        <Grid xs={12} sm={6} md={5} lg={4} item>
          <AssetDetailsPanel asset={asset} />
        </Grid>
      </Grid>
    </Stack>
  )
}
