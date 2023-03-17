import { useCallback, useState } from 'react'

export function useBoolean(
  initialValue = false,
): [boolean, () => void, () => void] {
  const [bool, setBool] = useState(initialValue)

  const handleSetTrue = useCallback(() => setBool(true), [])
  const handleSetFalse = useCallback(() => setBool(false), [])

  return [bool, handleSetTrue, handleSetFalse]
}
