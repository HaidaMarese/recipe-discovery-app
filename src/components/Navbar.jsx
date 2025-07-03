import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const { toggleTheme, darkMode } = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/search?query=${search}`)
      setSearch('')
    }
  }

  return (
    <nav className="bg-gray-900 text-white flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-6 py-4 shadow-xl sticky top-0 z-50">
      {/* Left Logo */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/" className="text-2xl font-bold">🍽️ Recipe App</Link>
        <button
          onClick={toggleTheme}
          className="md:hidden ml-auto bg-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-600"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Navigation ,  Theme Toggle */}
      <div className="flex items-center gap-4 text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/favorites" className="hover:underline">Favorites</Link>
        <button
          onClick={toggleTheme}
          className="hidden md:inline text-sm bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
