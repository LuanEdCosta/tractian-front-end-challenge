import { Menu, MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { UnitModel } from 'src/models'
import { UseAnchorReturn } from 'src/hooks'
import { RouterLinkNoStyles } from 'src/components'

type UnitActionsProps = Pick<
  UseAnchorReturn<UnitModel>,
  'anchor' | 'handleHideAnchor'
> & {
  handleOpenDeleteModal: () => void
}

export function UnitActions({
  anchor,
  handleHideAnchor,
  handleOpenDeleteModal,
}: UnitActionsProps) {
  const { t } = useTranslation(['Units', 'Glossary'])

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

        <RouterLinkNoStyles to={`/units/${anchor?.data.id}/edit`}>
          <MenuItem>{t('Glossary:edit')}</MenuItem>
        </RouterLinkNoStyles>
      </Menu>
    </>
  )
}
