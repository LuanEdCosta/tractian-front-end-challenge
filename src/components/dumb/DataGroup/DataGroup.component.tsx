import { Stack, StackProps, Typography } from '@mui/material'

type DataGroupProps = {
  title: string
  children: React.ReactNode
  contentPadding?: StackProps['p']
  rightActionComponent?: React.ReactNode
}

export function DataGroup({
  title,
  children,
  contentPadding = 2,
  rightActionComponent,
}: DataGroupProps) {
  return (
    <Stack
      borderRadius={2}
      bgcolor="white"
      overflow="hidden"
      border="1px solid"
      borderColor="grey.300"
    >
      <Stack
        p={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid"
        borderColor="grey.300"
      >
        <Typography fontWeight="bold">{title}</Typography>

        {rightActionComponent}
      </Stack>

      <Stack p={contentPadding}>{children}</Stack>
    </Stack>
  )
}
