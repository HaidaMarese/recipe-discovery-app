import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import RecipeCard from '../components/RecipeCard'

const CategoryPage = () => {
  const { categoryName } = useParams()
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6 text-white">Category: {categoryName}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data.meals.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  )
}

export default CategoryPage
