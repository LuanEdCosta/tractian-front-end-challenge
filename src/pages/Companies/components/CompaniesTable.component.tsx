import { useTranslation } from 'react-i18next'
import { MoreVert } from '@mui/icons-material'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
} from '@mui/material'

import { CompanyModel } from 'src/models'
import { UseAnchorReturn } from 'src/hooks'
import { TableParts } from 'src/components'

import { UseCompaniesReturn } from '../hooks/useCompanies.hook'

type CompaniesTableProps = Pick<UseCompaniesReturn, 'companies'> &
  Pick<UseAnchorReturn<CompanyModel>, 'handleSetAnchor'>

export function CompaniesTable({
  companies,
  handleSetAnchor,
}: CompaniesTableProps) {
  const { t } = useTranslation(['Companies', 'Glossary'])

  return (
    <TableParts.Container>
      <Table size="small">
        <TableHead>
          <TableParts.NoWrapRow>
            <TableCell>{t('table.head.id')}</TableCell>
            <TableCell>{t('table.head.name')}</TableCell>
            <TableCell>{t('Glossary:action', { count: 100 })}</TableCell>
          </TableParts.NoWrapRow>
        </TableHead>

        <TableBody>
          {companies.map((company) => {
            return (
              <TableParts.NoWrapRow key={company.id} hideLastRowBorder>
                <TableCell>{company.id}</TableCell>
                <TableCell>{company.name}</TableCell>

                <TableCell>
                  <IconButton onClick={(e) => handleSetAnchor(e, company)}>
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableParts.NoWrapRow>
            )
          })}
        </TableBody>
      </Table>
    </TableParts.Container>
  )
}
