import { useTranslation } from 'react-i18next'
import { MoreVert } from '@mui/icons-material'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
} from '@mui/material'

import { UnitModel } from 'src/models'
import { UseAnchorReturn } from 'src/hooks'
import { TableParts } from 'src/components'

import { UseUnitsReturn } from '../hooks/useUnit.hook'

type UnitsTableProps = Pick<UseUnitsReturn, 'units'> &
  Pick<UseAnchorReturn<UnitModel>, 'handleSetAnchor'>

export function UnitsTable({ units, handleSetAnchor }: UnitsTableProps) {
  const { t } = useTranslation(['Units', 'Glossary'])

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
          {units.map((unit) => {
            return (
              <TableParts.NoWrapRow key={unit.id} hideLastRowBorder>
                <TableCell>{unit.id}</TableCell>
                <TableCell>{unit.name}</TableCell>

                <TableCell>
                  <IconButton onClick={(e) => handleSetAnchor(e, unit)}>
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
