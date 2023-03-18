import { Grid, Skeleton, Stack } from '@mui/material'

export function AssetDetailsSkeleton() {
  return (
    <Stack>
      <Grid mx="-1rem !important" spacing={2} wrap="wrap-reverse" container>
        <Grid xs={12} sm={6} md={7} lg={8} item>
          <Skeleton
            sx={{ borderRadius: 2 }}
            variant="rectangular"
            height={300}
          />
        </Grid>

        <Grid xs={12} sm={6} md={5} lg={4} item>
          <Skeleton
            sx={{ borderRadius: 2 }}
            variant="rectangular"
            height={600}
          />
        </Grid>
      </Grid>
    </Stack>
  )
}
