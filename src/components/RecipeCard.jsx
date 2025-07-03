import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => (
  <Link to={`/recipe/${meal.idMeal}`}>
    <div className="bg-white rounded-xl shadow-lg hover:scale-105 transition p-4 text-center">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-lg" />
      <h2 className="mt-2 text-lg font-semibold">{meal.strMeal}</h2>
    </div>
  </Link>
);

export default RecipeCard;
