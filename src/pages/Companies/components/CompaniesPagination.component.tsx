import { useTranslation } from 'react-i18next'
import { Pagination, Stack, Typography } from '@mui/material'

type CompaniesPaginationProps = {
  page: number
  total: number
  pageSize: number
  isLoading: boolean
  numberOfPages: number
  handleChangePage: (page: number) => void
}

export function CompaniesPagination({
  page,
  total,
  pageSize,
  isLoading,
  numberOfPages,
  handleChangePage,
}: CompaniesPaginationProps) {
  const { t } = useTranslation(['Companies', 'Common'])

  return (
    <Stack
      spacing={2}
      alignItems="center"
      direction={{ sm: 'row' }}
      justifyContent={{ sm: 'space-between' }}
    >
      <Typography>
        {t('Common:pagination', {
          from: (page - 1) * pageSize + 1,
          to: page * pageSize,
          total: isLoading ? '...' : total,
        })}
      </Typography>

      <Pagination
        page={page}
        size="large"
        color="primary"
        siblingCount={0}
        boundaryCount={1}
        disabled={isLoading}
        count={numberOfPages}
        onChange={(_, value) => handleChangePage(value)}
      />
    </Stack>
  )
}
