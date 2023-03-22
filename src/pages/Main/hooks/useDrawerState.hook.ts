import { useEffect, useState } from 'react'
import { Theme, useMediaQuery } from '@mui/material'

import { DRAWER_WIDTH } from 'src/components'

export const useDrawerState = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)
  const [isPersistentDrawer, setIsPersistentDrawer] = useState(true)

  const isGreaterThanMd = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up('md'),
  )

  const isSmallerThanLg = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down('lg'),
  )

  function handleGetContentMarginLeft(): string | undefined {
    if (isPersistentDrawer) return `${isDrawerOpen ? DRAWER_WIDTH : 0}px`
  }

  function handleToggleDrawer() {
    setIsDrawerOpen((isOpen) => !isOpen)
  }

  useEffect(() => {
    setIsPersistentDrawer(isGreaterThanMd)
  }, [isGreaterThanMd])

  useEffect(() => {
    if (isSmallerThanLg) setIsDrawerOpen(false)
  }, [isSmallerThanLg])

  return {
    isDrawerOpen,
    isPersistentDrawer,
    handleToggleDrawer,
    handleGetContentMarginLeft,
  }
}
