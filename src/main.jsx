import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'
import { BrowserRouter } from 'react-router-dom'

// Create ThemeContext
const ThemeContext = React.createContext()

export const useTheme = () => React.useContext(ThemeContext)

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved !== null ? saved === 'true' : false  // false = Day Mode, true = Night Mode
  })
  
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])
  
  const toggleDarkMode = () => setDarkMode(prev => !prev)
  
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Create AuthContext
const AuthContext = React.createContext()

export const useAuth = () => React.useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const user = { id: 1, email, name: 'Alex Morgan' }
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const register = async (name, email, password) => {
    const user = { id: 1, email, name }
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
    return true
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)