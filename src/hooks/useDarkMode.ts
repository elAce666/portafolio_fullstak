import { useEffect, useState } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? saved === 'true' : true // Por defecto modo oscuro
  })

  useEffect(() => {
    localStorage.setItem('darkMode', String(isDark))
    document.body.className = isDark ? 'dark-mode' : 'light-mode'
  }, [isDark])

  const toggle = () => setIsDark(prev => !prev)

  return { isDark, toggle }
}
