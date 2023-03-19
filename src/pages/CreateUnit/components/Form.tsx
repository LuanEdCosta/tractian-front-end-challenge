import { Check } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { Grid, Button, TextField, CircularProgress, Stack } from '@mui/material'

import { UseUnitFormReturn } from '../hooks/useUnitForm.hook'
import { UseSaveUnitReturn } from '../hooks/useSaveUnit.hook'

type UnitFormProps = Pick<
  UseUnitFormReturn,
  'errors' | 'register' | 'handleSubmit'
> &
  UseSaveUnitReturn

export function Form({
  errors,
  isSaving,
  register,
  handleSave,
  handleSubmit,
}: UnitFormProps) {
  const { t } = useTranslation(['CreateUnit', 'Glossary', 'Validation'])

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
        <Grid xs={12} item>
          <TextField
            variant="outlined"
            error={!!errors.name}
            label={t('form.nameLabel')}
            helperText={errors.name?.message}
            required
            fullWidth
            {...register('name')}
          />
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
