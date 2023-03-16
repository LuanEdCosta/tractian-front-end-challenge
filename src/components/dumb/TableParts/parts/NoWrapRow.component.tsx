import { TableRow, TableRowProps } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

type NoWrapRowProps = TableRowProps & {
  hideLastRowBorder?: boolean
}

type NoWrapRowTypeMap = {
  props: NoWrapRowProps
  defaultComponent: 'tr'
}

export const NoWrapRow: OverridableComponent<NoWrapRowTypeMap> = ({
  hideLastRowBorder = false,
  ...props
}: NoWrapRowProps) => {
  return (
    <TableRow
      {...props}
      sx={{
        '& > th, & > td': {
          whiteSpace: 'nowrap',
        },

        '&:last-child td, &:last-child th': hideLastRowBorder
          ? { border: 0 }
          : {},

        ...(props.sx || {}),
      }}
    />
  )
}
