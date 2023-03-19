import { Menu, MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { UserModel } from 'src/models'
import { UseAnchorReturn } from 'src/hooks'
import { RouterLinkNoStyles } from 'src/components'

type UserActionsProps = Pick<
  UseAnchorReturn<UserModel>,
  'anchor' | 'handleHideAnchor'
> & {
  handleOpenDeleteModal: () => void
}

export function UserActions({
  anchor,
  handleHideAnchor,
  handleOpenDeleteModal,
}: UserActionsProps) {
  const { t } = useTranslation(['Users', 'Glossary'])

  return (
    <>
      <Menu
        open={!!anchor?.visible}
        anchorEl={anchor?.anchor}
        onClose={handleHideAnchor}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'center',
        }}
      >
        <MenuItem onClick={handleOpenDeleteModal}>
          {t('Glossary:delete')}
        </MenuItem>

        <RouterLinkNoStyles to={`/users/${anchor?.data.id}/edit`}>
          <MenuItem>{t('Glossary:edit')}</MenuItem>
        </RouterLinkNoStyles>
      </Menu>
    </>
  )
}
