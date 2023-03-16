import { useTranslation } from 'react-i18next'
import { MoreVert } from '@mui/icons-material'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
} from '@mui/material'

import { TableParts } from 'src/components'

import { UseAssetsReturn } from '../hooks/useAssets.hook'

type AssetsTableProps = Pick<UseAssetsReturn, 'assets'>

export function AssetsTable({ assets }: AssetsTableProps) {
  const { t } = useTranslation('Assets')

  return (
    <TableParts.Container>
      <Table size="small">
        <TableHead>
          <TableParts.NoWrapRow>
            <TableCell>{t('table.head.id')}</TableCell>
            <TableCell>{t('table.head.status')}</TableCell>
            <TableCell>{t('table.head.name')}</TableCell>
            <TableCell>{t('table.head.healthScore')}</TableCell>
            <TableCell>{t('Glossary:action', { count: 100 })}</TableCell>
          </TableParts.NoWrapRow>
        </TableHead>

        <TableBody>
          {assets.map((asset) => {
            return (
              <TableParts.NoWrapRow
                key={asset.id}
                component={TableParts.RouterLinkTableRow}
                to={`/assets/${asset.id}`}
                hideLastRowBorder
              >
                <TableCell>{asset.id}</TableCell>
                <TableCell>{asset.status}</TableCell>
                <TableCell>{asset.name}</TableCell>
                <TableCell>
                  <span>{asset.healthscore}</span>
                  <span>%</span>
                </TableCell>

                <TableCell>
                  <IconButton onClick={(e) => e /*handleSetAnchor(e, item)*/}>
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
