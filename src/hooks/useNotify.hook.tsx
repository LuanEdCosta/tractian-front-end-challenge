import { useCallback } from 'react'
import { useSnackbar } from 'notistack'
import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

interface useNotifyParams {
  t: string
  duration?: number
  preventDuplicate?: boolean
}

type useNotifyTypes = 'error' | 'success'

export function useNotify(resource: string) {
  const { t } = useTranslation('Messages')

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const handleNotify = useCallback(
    (type: useNotifyTypes, params?: useNotifyParams) => {
      const { duration = 5000, t: translation, preventDuplicate } = params || {}

      const message = t(`${type}.${resource}.${translation}`, {
        defaultValue: t(`${type}.general.generic`),
      })

      enqueueSnackbar(message, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
        variant: type,
        persist: !duration,
        preventDuplicate,
        autoHideDuration: duration ? duration : undefined,
        action(key) {
          return (
            <IconButton
              size="small"
              color="inherit"
              onClick={() => closeSnackbar(key)}
            >
              <Close />
            </IconButton>
          )
        },
      })
    },
    [closeSnackbar, enqueueSnackbar, resource, t],
  )

  return {
    handleNotify,
  }
}
