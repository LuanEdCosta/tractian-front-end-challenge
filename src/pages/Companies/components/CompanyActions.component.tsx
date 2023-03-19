import { Menu, MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { CompanyModel } from 'src/models'
import { UseAnchorReturn } from 'src/hooks'
import { RouterLinkNoStyles } from 'src/components'

type CompanyActionsProps = Pick<
  UseAnchorReturn<CompanyModel>,
  'anchor' | 'handleHideAnchor'
> & {
  handleOpenDeleteModal: () => void
}

export function CompanyActions({
  anchor,
  handleHideAnchor,
  handleOpenDeleteModal,
}: CompanyActionsProps) {
  const { t } = useTranslation(['Companies', 'Glossary'])

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

        <RouterLinkNoStyles to={`/companies/${anchor?.data.id}/edit`}>
          <MenuItem>{t('Glossary:edit')}</MenuItem>
        </RouterLinkNoStyles>
      </Menu>
    </>
  )
}
