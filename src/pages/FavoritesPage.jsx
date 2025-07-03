import { useFavorites } from '../context/FavoritesContext'
import useFetch from '../hooks/useFetch'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import RecipeCard from '../components/RecipeCard'

const FavoritesPage = () => {
  const { favorites } = useFavorites()

  if (favorites.length === 0) {
    return <p className="text-center text-white p-10">No favorites yet. Go add some!</p>
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white text-center mb-6">My Favorites</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {favorites.map((id) => {
          const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          if (loading) return <Spinner key={id} />
          if (error) return <ErrorMessage key={id} message={error} />
          return <RecipeCard key={id} meal={data.meals[0]} />
        })}
      </div>
    </div>
  )
}

export default FavoritesPage
