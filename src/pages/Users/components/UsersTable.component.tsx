import { useTranslation } from 'react-i18next'
import { MoreVert } from '@mui/icons-material'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
} from '@mui/material'

import { UserModel } from 'src/models'
import { UseAnchorReturn } from 'src/hooks'
import { TableParts } from 'src/components'

import { UseUsersReturn } from '../hooks/useUsers.hook'

type UsersTableProps = Pick<UseUsersReturn, 'users'> &
  Pick<UseAnchorReturn<UserModel>, 'handleSetAnchor'>

export function UsersTable({ users, handleSetAnchor }: UsersTableProps) {
  const { t } = useTranslation(['Users', 'Glossary'])

  return (
    <TableParts.Container>
      <Table size="small">
        <TableHead>
          <TableParts.NoWrapRow>
            <TableCell>{t('table.head.id')}</TableCell>
            <TableCell>{t('table.head.name')}</TableCell>
            <TableCell>{t('table.head.email')}</TableCell>
            <TableCell>{t('Glossary:action', { count: 100 })}</TableCell>
          </TableParts.NoWrapRow>
        </TableHead>

        <TableBody>
          {users.map((user) => {
            return (
              <TableParts.NoWrapRow key={user.id} hideLastRowBorder>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>

                <TableCell>
                  <IconButton onClick={(e) => handleSetAnchor(e, user)}>
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
