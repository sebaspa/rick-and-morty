import { useState, useEffect } from 'react'

export const useDebounce = (value: string, timeout = 500): string => {
  const [state, setState] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => { setState(value) }, timeout)

    return () => { clearTimeout(handler) }
  }, [value, timeout])

  return state
}
