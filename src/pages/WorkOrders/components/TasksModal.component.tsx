import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Stack,
  Button,
  Dialog,
  Checkbox,
  DialogTitle,
  DialogActions,
  DialogContent,
  FormControlLabel,
} from '@mui/material'

import { UseTasksModalReturn } from '../hooks/useTasksModal.hook'

type TasksModalProps = Pick<
  UseTasksModalReturn,
  'tasks' | 'workOrderTile' | 'isShowingTasksModal' | 'handleCloseTasksModal'
>

export function TasksModal({
  tasks,
  workOrderTile,
  isShowingTasksModal,
  handleCloseTasksModal,
}: TasksModalProps) {
  const { t } = useTranslation('WorkOrders')
  const id = useId()

  return (
    <Dialog
      fullWidth
      open={isShowingTasksModal}
      maxWidth="sm"
      onClose={handleCloseTasksModal}
      aria-labelledby={`${id}-title`}
    >
      <DialogTitle id={`${id}-title`}>
        {t('tasksModal.title', { workOrderTile })}
      </DialogTitle>

      <DialogContent>
        <Stack>
          {tasks.map((task) => {
            return (
              <Stack key={task.task}>
                <FormControlLabel
                  sx={{ pointerEvents: 'none' }}
                  label={task.task}
                  checked={task.completed}
                  control={<Checkbox />}
                />
              </Stack>
            )
          })}
        </Stack>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button size="large" variant="outlined" onClick={handleCloseTasksModal}>
          {t('Glossary:close')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
