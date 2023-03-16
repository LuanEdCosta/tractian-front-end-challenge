import { TableContainer, TableContainerProps } from '@mui/material'

export function Container(props: TableContainerProps) {
  return (
    <TableContainer
      {...props}
      sx={{
        bgcolor: 'white',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'grey.300',
        ...(props.sx || {}),
      }}
    />
  )
}
