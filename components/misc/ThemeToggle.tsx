import { useEffect, useState } from 'react'

import { Icon } from './Icon'
import SunIcon from '../icons/SunIcon'
import MoonIcon from '../icons/MoonIcon'

const themes = {
  dark: 'dark',
  light: 'light',
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.light)

  const setLightTheme = () => {
    // Whenever the user explicitly chooses light mode
    localStorage.setItem('theme', themes.light)
    setTheme(themes.light)
    document.documentElement.classList.remove(themes.dark)
  }

  const setDarkTheme = () => {
    // Whenever the user explicitly chooses dark mode
    localStorage.setItem('theme', themes.dark)
    setTheme(themes.dark)
    document.documentElement.classList.add(themes.dark)
  }

  useEffect(() => {
    let isMounted = true

    const activeTheme = localStorage.getItem('theme')
    const prefMatch = window.matchMedia('(prefers-color-scheme: dark)').matches

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (activeTheme === 'dark' || (!activeTheme && prefMatch)) {
      if (isMounted) {
        setTheme(themes.dark)
      }
      document.documentElement.classList.add(themes.dark)
    } else {
      if (isMounted) {
        setTheme(themes.light)
      }
      document.documentElement.classList.remove(themes.dark)
    }

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <span
      className="flex items-center justify-center font-bold cursor-pointer"
      tabIndex={0}
    >
      {theme === themes.dark ? (
        <Icon
          className="bt_color-brand cursor-pointer hover:text-brand-dark mt-3"
          icon={SunIcon}
          size={52}
          onClick={setLightTheme}
          tabIndex={0}
        />
      ) : (
        <Icon
          className="bt_color-brand cursor-pointer hover:text-brand-dark mt-3"
          icon={MoonIcon}
          size={52}
          onClick={setDarkTheme}
          tabIndex={0}
        />
      )}
    </span>
  )
}

export default ThemeToggle
