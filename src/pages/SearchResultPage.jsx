import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import RecipeCard from '../components/RecipeCard'

const SearchResultPage = () => {
  const [params] = useSearchParams()
  const query = params.get('query')
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />
  if (!data.meals) return <p className="text-center text-white p-10">No results found.</p>

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white text-center mb-6">Search: {query}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data.meals.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  )
}

export default SearchResultPage
