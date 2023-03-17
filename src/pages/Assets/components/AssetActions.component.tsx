import { Menu, MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { AssetModel } from 'src/models'
import { UseAnchorReturn } from 'src/hooks'
import { RouterLinkNoStyles } from 'src/components'

type AssetActionsProps = Pick<
  UseAnchorReturn<AssetModel>,
  'anchor' | 'handleHideAnchor'
> & {
  handleOpenDeleteModal: () => void
}

export function AssetActions({
  anchor,
  handleHideAnchor,
  handleOpenDeleteModal,
}: AssetActionsProps) {
  const { t } = useTranslation(['Assets', 'Glossary'])

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

        <RouterLinkNoStyles to={`/assets/${anchor?.data.id}/edit`}>
          <MenuItem>{t('Glossary:edit')}</MenuItem>
        </RouterLinkNoStyles>
      </Menu>
    </>
  )
}
