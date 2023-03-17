import { useCallback, useState } from 'react'

export type UseAnchorData<T = object> = {
  data: T
  visible: boolean
  anchor: HTMLElement
}

export const useAnchor = <T = object>() => {
  const [anchor, setAnchor] = useState<UseAnchorData<T> | null>(null)

  const handleSetAnchor = useCallback(
    (e: React.MouseEvent<HTMLElement>, data: T) => {
      setAnchor({ data, anchor: e.currentTarget, visible: true })
    },
    [],
  )

  const handleClearAnchor = useCallback(() => {
    setAnchor(null)
  }, [])

  const handleHideAnchor = useCallback(() => {
    setAnchor((currentState) =>
      currentState ? { ...currentState, visible: false } : currentState,
    )
  }, [])

  return {
    anchor,
    handleSetAnchor,
    handleHideAnchor,
    handleClearAnchor,
  }
}

export type UseAnchorReturn<T = object> = ReturnType<typeof useAnchor<T>>
