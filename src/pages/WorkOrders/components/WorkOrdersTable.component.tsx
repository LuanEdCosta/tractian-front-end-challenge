import { useTranslation } from 'react-i18next'
import { MoreVert } from '@mui/icons-material'
import {
  Stack,
  Table,
  Tooltip,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
} from '@mui/material'

import { WorkOrderModel } from 'src/models'
import { UseAnchorReturn } from 'src/hooks'
import { TableParts, WorkOrderStatusPresenter } from 'src/components'

import { UseWorkOrdersReturn } from '../hooks/useWorkOrders.hook'

type WorkOrdersTableProps = Pick<UseWorkOrdersReturn, 'workOrders'> &
  Pick<UseAnchorReturn<WorkOrderModel>, 'handleSetAnchor'>

const MAX_ROW_LENGTH = 50

export function WorkOrdersTable({
  workOrders,
  handleSetAnchor,
}: WorkOrdersTableProps) {
  const { t } = useTranslation(['WorkOrders', 'Glossary', 'WorkOrderPriority'])

  return (
    <TableParts.Container>
      <Table size="small">
        <TableHead>
          <TableParts.NoWrapRow>
            <TableCell>{t('table.head.id')}</TableCell>
            <TableCell>{t('table.head.status')}</TableCell>
            <TableCell>{t('table.head.title')}</TableCell>
            <TableCell>{t('table.head.priority')}</TableCell>
            <TableCell>{t('table.head.description')}</TableCell>
            <TableCell>{t('Glossary:action', { count: 100 })}</TableCell>
          </TableParts.NoWrapRow>
        </TableHead>

        <TableBody>
          {workOrders.map((workOrder) => {
            return (
              <TableParts.NoWrapRow
                // ! Temporary key - The API is returning repeated IDs
                key={`${workOrder.id}-${workOrder.title}`}
                hideLastRowBorder
              >
                <TableCell>{workOrder.id}</TableCell>

                <TableCell>
                  <WorkOrderStatusPresenter status={workOrder.status} />
                </TableCell>

                <TableCell>{workOrder.title}</TableCell>

                <TableCell>
                  {t(`WorkOrderPriority:${workOrder.priority}`)}
                </TableCell>

                <TableCell>
                  {workOrder.description.length > MAX_ROW_LENGTH ? (
                    <Tooltip
                      title={workOrder.description}
                      placement="bottom-start"
                    >
                      <Stack sx={{ cursor: 'default' }}>
                        {workOrder.description.substring(0, MAX_ROW_LENGTH)}...
                      </Stack>
                    </Tooltip>
                  ) : (
                    workOrder.description
                  )}
                </TableCell>

                <TableCell>
                  <IconButton onClick={(e) => handleSetAnchor(e, workOrder)}>
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
