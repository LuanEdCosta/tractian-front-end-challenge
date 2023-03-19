import { Search } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { Button, Grid, Stack, TextField } from '@mui/material'

import { UseFiltersReturn } from '../hooks/useFilters.hook'

type UsersFiltersProps = Pick<
  UseFiltersReturn,
  'register' | 'handleSubmit' | 'handleSearch'
>

export function UsersFilters({
  register,
  handleSubmit,
  handleSearch,
}: UsersFiltersProps) {
  const { t } = useTranslation(['Users', 'Glossary'])

  return (
    <Stack>
      <Grid
        spacing={2}
        component="form"
        mx="-1rem !important"
        onSubmit={handleSubmit(handleSearch)}
        noValidate
        container
      >
        <Grid xs={12} sm={6} md={8} lg={10} item>
          <TextField
            sx={{ flex: 1 }}
            size="small"
            label={t('filters.searchLabel')}
            fullWidth
            {...register('search')}
          />
        </Grid>

        <Grid xs={12} sm={6} md={4} lg={2} item>
          <Button
            sx={{ height: 40 }}
            size="large"
            type="submit"
            variant="contained"
            endIcon={<Search />}
            fullWidth
          >
            {t('Glossary:search')}
          </Button>
        </Grid>
      </Grid>
    </Stack>
  )
}
