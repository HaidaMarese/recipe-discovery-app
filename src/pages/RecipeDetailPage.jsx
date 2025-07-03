import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import { useFavorites } from '../context/FavoritesContext'

const RecipeDetailPage = () => {
  const { recipeId } = useParams()
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  const meal = data.meals[0]

  const handleToggle = () => {
    isFavorite(meal.idMeal)
      ? removeFromFavorites(meal.idMeal)
      : addToFavorites(meal.idMeal)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-lg w-full mb-6" />
      <h1 className="text-3xl font-bold">{meal.strMeal}</h1>
      <button
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        onClick={handleToggle}
      >
        {isFavorite(meal.idMeal) ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <p className="mt-4 leading-relaxed">{meal.strInstructions}</p>
    </div>
  )
}

export default RecipeDetailPage
