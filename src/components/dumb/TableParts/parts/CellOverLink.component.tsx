import { TableCell, TableCellProps } from '@mui/material'

export function CellOverLink(props: TableCellProps) {
  return (
    <TableCell
      {...props}
      sx={{
        cursor: 'default',
        ...(props.sx || {}),
      }}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    />
  )
}
