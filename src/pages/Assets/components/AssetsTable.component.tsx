import { useTranslation } from 'react-i18next'
import { MoreVert } from '@mui/icons-material'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
} from '@mui/material'

import { AssetModel } from 'src/models'
import { UseAnchorReturn } from 'src/hooks'
import { AssetStatusPresenter, AssignedUsers, TableParts } from 'src/components'

import { UseAssetsReturn } from '../hooks/useAssets.hook'
import { UseUsersReturn } from '../hooks/useUsers.hook'

type AssetsTableProps = Pick<UseAssetsReturn, 'assets'> &
  Pick<UseAnchorReturn<AssetModel>, 'handleSetAnchor'> &
  Pick<UseUsersReturn, 'users' | 'isLoadingUsers'>

export function AssetsTable({
  users,
  assets,
  isLoadingUsers,
  handleSetAnchor,
}: AssetsTableProps) {
  const { t } = useTranslation(['Assets', 'Glossary'])

  return (
    <TableParts.Container>
      <Table size="small">
        <TableHead>
          <TableParts.NoWrapRow>
            <TableCell>{t('table.head.id')}</TableCell>
            <TableCell>{t('table.head.status')}</TableCell>
            <TableCell>{t('table.head.name')}</TableCell>
            <TableCell>{t('table.head.healthScore')}</TableCell>
            <TableCell>{t('table.head.users')}</TableCell>
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

                <TableCell>
                  <AssetStatusPresenter status={asset.status} />
                </TableCell>

                <TableCell>{asset.name}</TableCell>

                <TableCell>
                  <span>{asset.healthscore}</span>
                  <span>%</span>
                </TableCell>

                <TableCell>
                  <AssignedUsers
                    users={users}
                    isLoading={isLoadingUsers}
                    assignedUserIds={asset.assignedUserIds}
                  />
                </TableCell>

                <TableParts.CellOverLink>
                  <IconButton onClick={(e) => handleSetAnchor(e, asset)}>
                    <MoreVert />
                  </IconButton>
                </TableParts.CellOverLink>
              </TableParts.NoWrapRow>
            )
          })}
        </TableBody>
      </Table>
    </TableParts.Container>
  )
}
