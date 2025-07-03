import useFetch from '../hooks/useFetch'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const HomePage = () => {
  const { data, loading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php')

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <PageWrapper>
      <div className="p-6 text-center">
        <section className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to My  Recipe Discovery</h1>
          <p className="text-lg md:text-xl text-gray-300">
            Explore delicious recipes by category. Save your favorites. Cook with confidence!
          </p>
        </section>

        {/* CATEGORIES */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {data.categories.map((cat) => (
            <Link to={`/category/${cat.strCategory}`} key={cat.idCategory}>
              <div className="bg-gray-800 text-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition transform p-3">
                <img
                  src={cat.strCategoryThumb}
                  alt={cat.strCategory}
                  className="rounded-md w-full h-32 object-cover"
                />
                <h3 className="mt-2 text-sm font-semibold">{cat.strCategory}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

export default HomePage
