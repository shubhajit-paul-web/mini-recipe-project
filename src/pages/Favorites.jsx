import {useContext} from "react";
import {RecipeContext} from "../Context/AppContext";
import RecipeCard from "../components/RecipeCard";
import HeadingFavorites from "../components/HeadingFavorites";

const Favorites = () => {
	const {recipes} = useContext(RecipeContext);

	return (
		<div className="min-h-[calc(100vh-5.5rem)] bg-zinc-100 p-10 pt-1">
			{<HeadingFavorites info={recipes} />}
			<div className="flex flex-wrap gap-15">
				{recipes
					.filter((recipe) => recipe.isFavorite)
					.map((recipe) => {
						return <RecipeCard key={recipe.id} info={recipe} />;
					})}
			</div>
		</div>
	);
};

export default Favorites;
