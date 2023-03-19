import { Skeleton } from '@mui/material'

export function WorkOrdersSkeleton() {
  return (
    <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" height={400} />
  )
}
