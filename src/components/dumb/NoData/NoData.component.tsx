import { SvgIconComponent } from '@mui/icons-material'
import { Box, BoxProps, Stack, Typography } from '@mui/material'

type NoDataProps = {
  size?: string
  message: React.ReactNode
  children?: React.ReactNode
  IconComponent: SvgIconComponent
  iconBottomSpacing?: BoxProps['mb']
}

export function NoData({
  message,
  children,
  IconComponent,
  size = '10rem',
  iconBottomSpacing = 4,
}: NoDataProps) {
  return (
    <Stack alignItems="center">
      <Box
        color="grey.400"
        width={size}
        height={size}
        fontSize={size}
        mb={iconBottomSpacing}
      >
        <IconComponent fontSize="inherit" color="inherit" />
      </Box>

      <Typography
        align="center"
        variant="body2"
        color="text.secondary"
        mb={children ? 2 : 0}
      >
        {message}
      </Typography>

      {children}
    </Stack>
  )
}
