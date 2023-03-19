import { Menu, MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { WorkOrderModel } from 'src/models'
import { UseAnchorReturn } from 'src/hooks'
import { RouterLinkNoStyles } from 'src/components'

type WorkOrderActionsProps = Pick<
  UseAnchorReturn<WorkOrderModel>,
  'anchor' | 'handleHideAnchor'
> & {
  handleOpenDeleteModal: () => void
}

export function WorkOrderActions({
  anchor,
  handleHideAnchor,
  handleOpenDeleteModal,
}: WorkOrderActionsProps) {
  const { t } = useTranslation(['WorkOrders', 'Glossary'])

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

        <RouterLinkNoStyles to={`/workOrders/${anchor?.data.id}/edit`}>
          <MenuItem>{t('Glossary:edit')}</MenuItem>
        </RouterLinkNoStyles>
      </Menu>
    </>
  )
}
