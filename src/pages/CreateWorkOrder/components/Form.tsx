import { Check } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import {
  Grid,
  Stack,
  Button,
  MenuItem,
  TextField,
  CircularProgress,
} from '@mui/material'

import { WorkOrderModel } from 'src/models'

import { UseWorkOrderFormReturn } from '../hooks/useWorkOrderForm.hook'
import { UseSaveWorkOrderReturn } from '../hooks/useSaveWorkOrder.hook'

type WorkOrderFormProps = Pick<
  UseWorkOrderFormReturn,
  'errors' | 'register' | 'handleSubmit'
> &
  UseSaveWorkOrderReturn

const PRIORITIES: Union2Tuple<WorkOrderModel['priority']> = ['high']

const STATUS: Union2Tuple<WorkOrderModel['status']> = [
  'completed',
  'in progress',
]

export function Form({
  errors,
  isSaving,
  register,
  handleSave,
  handleSubmit,
}: WorkOrderFormProps) {
  const { t } = useTranslation([
    'CreateWorkOrder',
    'Glossary',
    'Validation',
    'Status',
  ])

  return (
    <Stack>
      <Grid
        spacing={4}
        component="form"
        mx="-2rem !important"
        justifyContent="flex-end"
        onSubmit={handleSubmit(handleSave)}
        noValidate
        container
      >
        <Grid xs={12} sm={6} item>
          <TextField
            variant="outlined"
            error={!!errors.title}
            label={t('form.titleLabel')}
            helperText={errors.title?.message}
            required
            fullWidth
            {...register('title')}
          />
        </Grid>

        <Grid xs={12} sm={6} item>
          <TextField
            variant="outlined"
            error={!!errors.description}
            label={t('form.descriptionLabel')}
            helperText={errors.description?.message}
            required
            fullWidth
            {...register('description')}
          />
        </Grid>

        <Grid xs={12} sm={6} item>
          <TextField
            variant="outlined"
            error={!!errors.priority}
            label={t('form.priorityLabel')}
            helperText={errors.priority?.message}
            required
            fullWidth
            select
            {...register('priority')}
          >
            {PRIORITIES.map((priority) => (
              <MenuItem key={priority} value={priority}>
                {t(`WorkOrderPriority:${priority}`)}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid xs={12} sm={6} item>
          <TextField
            variant="outlined"
            error={!!errors.status}
            label={t('form.statusLabel')}
            helperText={errors.status?.message}
            required
            fullWidth
            select
            {...register('status')}
          >
            {STATUS.map((status) => (
              <MenuItem key={status} value={status}>
                {t(`Status:${status.replace(/\s/, '')}`)}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid xs={12} sm={6} md={4} lg={3} item>
          <Button
            size="large"
            type="submit"
            variant="contained"
            disabled={isSaving}
            endIcon={
              isSaving ? (
                <CircularProgress size="1rem" color="inherit" />
              ) : (
                <Check />
              )
            }
            fullWidth
          >
            {t('Glossary:save')}
          </Button>
        </Grid>
      </Grid>
    </Stack>
  )
}
