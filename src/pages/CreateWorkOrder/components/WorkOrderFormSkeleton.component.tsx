import { Grid, Skeleton } from '@mui/material'

export function WorkOrderFormSkeleton() {
  return (
    <Grid mx="-1rem !important" justifyContent="flex-end" spacing={2} container>
      {new Array(1).fill(0).map((_, index) => {
        return (
          <Grid key={index} xs={12} item>
            <Skeleton
              sx={{ borderRadius: 1 }}
              variant="rectangular"
              height="3.6rem"
            />
          </Grid>
        )
      })}

      <Grid xs={12} sm={6} md={4} lg={3} item>
        <Skeleton
          sx={{ borderRadius: 1 }}
          variant="rectangular"
          height="3.6rem"
        />
      </Grid>
    </Grid>
  )
}
