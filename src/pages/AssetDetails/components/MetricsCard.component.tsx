import { SvgIconComponent } from '@mui/icons-material'
import { alpha, Stack, Typography } from '@mui/material'

type MetricsCardProps = {
  title: string
  value: string | number
  IconComponent: SvgIconComponent
}

export function MetricsCard({ title, value, IconComponent }: MetricsCardProps) {
  return (
    <Stack
      sx={{
        background: (theme) => alpha(theme.palette.primary.main, 0.03),
      }}
      direction="row"
      alignItems="center"
      p={1}
      spacing={1}
      borderRadius={2}
      height="100%"
    >
      <Stack fontSize="2.5rem" height="2.5rem" width="2.5rem">
        <IconComponent color="inherit" fontSize="inherit" />
      </Stack>

      <Stack>
        <Typography variant="overline">{title}</Typography>

        <Typography variant="h6" fontWeight="bolder" color="primary.main">
          {value}
        </Typography>
      </Stack>
    </Stack>
  )
}
