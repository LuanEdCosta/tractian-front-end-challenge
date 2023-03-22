import { useId } from 'react'
import {
  Button,
  Dialog,
  ButtonProps,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material'

type AlertDialogProps = {
  open: boolean
  title: string
  message: string
  cancelButtonText: string
  confirmButtonText: string
  cancelButtonColor?: ButtonProps['color']
  confirmButtonColor?: ButtonProps['color']
  shouldCloseWhenCancel?: boolean
  shouldCloseWhenConfirm?: boolean
  autoFocusConfirmationButton?: boolean
  handleClose: () => void
  handleConfirm: () => void
  handleCancel?: () => void
}

export function AlertDialog({
  open,
  title,
  message,
  cancelButtonText,
  confirmButtonText,
  cancelButtonColor,
  confirmButtonColor = 'primary',
  shouldCloseWhenCancel = true,
  shouldCloseWhenConfirm = true,
  autoFocusConfirmationButton = true,
  handleClose,
  handleCancel,
  handleConfirm,
}: AlertDialogProps) {
  const id = useId()

  function handleCancelDialog() {
    if (handleCancel) handleCancel()
    if (shouldCloseWhenCancel) handleClose()
  }

  function handleConfirmDialog() {
    if (handleConfirm) handleConfirm()
    if (shouldCloseWhenConfirm) handleClose()
  }

  return (
    <Dialog
      fullWidth
      open={open}
      maxWidth="sm"
      onClose={handleClose}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-description`}
    >
      <DialogTitle id={`${id}-title`}>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText id={`${id}-description`}>
          {message}
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button
          sx={{ mr: 1 }}
          size="large"
          variant="outlined"
          color={cancelButtonColor}
          onClick={handleCancelDialog}
        >
          {cancelButtonText}
        </Button>

        <Button
          sx={{ minWidth: 125 }}
          size="large"
          variant="contained"
          color={confirmButtonColor}
          autoFocus={autoFocusConfirmationButton}
          onClick={handleConfirmDialog}
        >
          {confirmButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
