import {useContext} from "react";
import {RecipeContext} from "../Context/AppContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
	const {recipes} = useContext(RecipeContext);
	
	return (
		<div className="p-10 min-h-[calc(100vh-5.5rem)] bg-zinc-100 flex flex-wrap gap-15">
			{recipes.map((recipe) => {
				return <RecipeCard key={recipe.id} info={recipe} />
			})}
		</div>
	);
};

export default Recipes;
