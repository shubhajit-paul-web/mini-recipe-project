import {useContext} from "react";
import {RecipeContext} from "../Context/AppContext";
import RecipeCard from "../components/RecipeCard";
import {HeadingContent, NoRecipesHeading} from "../components/RecipesHeading";

const Recipes = () => {
	const {recipes} = useContext(RecipeContext);

	return (
		<div className="p-10 pt-8 min-h-[calc(100vh-5.5rem)] bg-zinc-100">
			{recipes.length ? <HeadingContent /> : <NoRecipesHeading />}

			<div className="flex justify-center flex-wrap gap-15">
				{recipes.map((recipe) => {
					return <RecipeCard key={recipe.id} info={recipe} />;
				})}
			</div>
		</div>
	);
};

export default Recipes;
