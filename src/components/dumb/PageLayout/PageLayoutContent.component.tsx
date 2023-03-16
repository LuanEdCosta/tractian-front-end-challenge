import { Stack, StackProps } from '@mui/material'

export function PageLayoutContent({ children, ...props }: StackProps) {
  return (
    <Stack
      flex={1}
      mx="auto"
      width="100%"
      maxWidth="xl"
      spacing={{ xs: 2, sm: 4 }}
      {...props}
    >
      {children}
    </Stack>
  )
}
