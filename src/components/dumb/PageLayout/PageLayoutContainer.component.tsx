import { Stack, StackProps } from '@mui/material'

export function PageLayoutContainer({ children, ...props }: StackProps) {
  return (
    <Stack flex={1} bgcolor="grey.50" p={{ xs: 2, sm: 4 }} {...props}>
      {children}
    </Stack>
  )
}
