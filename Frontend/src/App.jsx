import React, { useEffect, useState } from 'react'
import './App.css'
import AppRoutes from './AppRoutes';

function App() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
    } catch {
      /* ignore */
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('theme-dark')
    else root.classList.remove('theme-dark')
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* ignore */ }
  }, [dark])

  useEffect(() => {
    // If user has explicitly chosen a theme, do not follow system changes
    let saved = null
    try { saved = localStorage.getItem('theme') } catch { /* ignore */ }
    if (saved) return

    // Listen to system theme changes and update when no saved preference
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => setDark(e.matches)
    if (mql.addEventListener) mql.addEventListener('change', handleChange)
    else if (mql.addListener) mql.addListener(handleChange)
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', handleChange)
      else if (mql.removeListener) mql.removeListener(handleChange)
    }
  }, [])

  return (
    <>
      <button
        className="theme-toggle"
        onClick={() => setDark((d) => !d)}
        aria-label="Toggle dark / light theme"
        title={dark ? 'Switch to light' : 'Switch to dark'}
      >
        <span className="icon" aria-hidden>{dark ? '☀️' : '🌙'}</span>
      </button>

      <AppRoutes />
    </>
  )
}

export default App
