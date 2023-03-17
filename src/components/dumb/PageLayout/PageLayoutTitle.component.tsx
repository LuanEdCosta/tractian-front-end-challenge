import { LinkProps } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { AllSystemCSSProperties } from '@mui/system'
import { IconButton, Stack, StackProps, Typography } from '@mui/material'

import { RouterLinkNoStyles } from '../RouterLinkNoStyles'

type PageLayoutTitleProps = {
  title: string
  subtitle?: string
  breakPoint?: 'sm' | 'md'
  children?: React.ReactNode
  backButtonLink?: LinkProps['to']
  alignItems?: AllSystemCSSProperties['alignItems']
}

export function PageLayoutTitle({
  title,
  subtitle,
  children,
  alignItems,
  breakPoint = 'sm',
  backButtonLink,
}: PageLayoutTitleProps) {
  const handleGetDirection = (): StackProps['direction'] => {
    if (breakPoint === 'sm') return { xs: 'column', sm: 'row', md: 'row' }
    return { xs: 'column', sm: 'column', md: 'row' }
  }

  return (
    <Stack
      spacing={2}
      flexWrap="wrap"
      direction={handleGetDirection()}
      alignItems={{ [breakPoint]: alignItems || 'center' }}
    >
      <Stack flex={1} direction="row" alignItems="center" spacing={4}>
        {backButtonLink && (
          <RouterLinkNoStyles to={backButtonLink}>
            <IconButton
              sx={{
                background: 'white',
                border: '1px solid',
                borderColor: 'grey.400',
              }}
            >
              <ArrowBack />
            </IconButton>
          </RouterLinkNoStyles>
        )}

        <Stack>
          <Typography variant="h5" fontWeight="bold">
            {title}
          </Typography>

          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Stack>
      </Stack>

      {children}
    </Stack>
  )
}
