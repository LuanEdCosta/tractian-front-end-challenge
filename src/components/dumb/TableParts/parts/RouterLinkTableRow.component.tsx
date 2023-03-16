import { styled } from '@mui/material'
import { Link, LinkProps } from 'react-router-dom'

const StyledLink = styled(Link)(({ theme }) => ({
  outline: 'none',
  color: 'inherit',
  textDecoration: 'none',
  ':hover, :focus-visible': {
    background: theme.palette.grey[100],
  },
}))

export function RouterLinkTableRow({ children, ...props }: LinkProps) {
  return <StyledLink {...props}>{children}</StyledLink>
}
