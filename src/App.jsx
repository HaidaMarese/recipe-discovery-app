import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import FavoritesPage from './pages/FavoritesPage'
import SearchResultPage from './pages/SearchResultPage'

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-800 via-emerald-900 to-teal-950 text-white">
          <Navbar />
          <main className="flex-grow relative">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/search" element={<SearchResultPage />} />
            </Routes>
            <ScrollToTopButton />
          </main>
          <Footer />
        </div>
      </Router>
    </FavoritesProvider>
  )
}

export default App
