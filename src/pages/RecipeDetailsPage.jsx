import {useContext} from "react";
import {useParams} from "react-router-dom";
import {RecipeContext} from "../Context/AppContext";
import {toast} from "react-toastify";

const RecipeDetailsPage = () => {
	const params = useParams();
	const {recipes, setRecipe} = useContext(RecipeContext);
	const recipeData = recipes.find((recipe) => recipe.id === params.id);

	// Handle add/remove recipe (favorites)
	const handleToggleFavorite = ({target}) => {
		const cardID = target.dataset.id;

		setRecipe((prevRecipes) => {
			return prevRecipes.map((recipe) => {
				if (recipe.id === cardID) {
					recipe.isFavorite = !recipe.isFavorite;

					toast.success(recipe.isFavorite ? "Recipe added to your favorites!" : "Recipe removed from your favorites.");
				}
				return recipe;
			});
		});
	};

	return (
		<div className="relative p-8 min-h-[85vh] w-5/6 m-auto flex gap-25">
			{/* LEFT: Image & Description */}
			<div className="w-1/2 sticky top-30 h-fit">
				<h1 className="text-4xl text-zinc-700 font-bold">{recipeData.recipeName}</h1>
				<img className="h-[20rem] aspect-[4/2] object-cover object-center rounded-2xl mt-5" src={recipeData.imageURL} alt={`${recipeData.recipeName} image`} />
				<p className="text-lg text-zinc-700 mt-6">{recipeData.description}</p>
				{/* Add/remove favorites */}
				<button className={`w-max top-[calc(100%-1.55rem)] mt-6 text-base py-3 px-5 rounded-xl text-red-700 ${recipeData.isFavorite ? "bg-red-200 " : "bg-pink-500 text-white"}`} data-id={recipeData.id} onClick={handleToggleFavorite}>
					{recipeData.isFavorite ? "Remove from Favorites" : "🤍 Add to Favorites"}
				</button>
			</div>
			{/* RIGHT: Ingredients & Metadata */}
			<div className="w-1/2 py-5">
				<div className="mb-8">
					<h2 className="text-[1.4rem] font-semibold mb-3">🧂 Ingredients:</h2>
					<ul className="text-lg text-zinc-600 list-disc list-inside pl-3">
						{recipeData.ingredients.split(", ").map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>
				</div>
				<div className="mb-8">
					<h2 className="text-[1.4rem] font-semibold mb-3">👨‍🍳 Instructions:</h2>
					<p className="text-lg text-zinc-600 whitespace-pre-wrap pl-2">{recipeData?.instructions}</p>
				</div>
				<div className="mb-4 flex flex-col gap-6 text-lg">
					<p className="mt-3 text-xl font-bold">Extra Details:</p>
					<p>
						<span className="font-medium">🕒 Cooking Time:</span> {recipeData.cookingTime} mins
					</p>
					<p>
						<span className="font-medium">📂 Category:</span> {recipeData.category}
					</p>
					<p>
						<span className="font-medium">⚙️ Difficulty:</span> {recipeData.difficulty}
					</p>
					<p className="flex flex-wrap gap-2">
						<span className="font-medium">🏷️ Tags:</span>
						{recipeData.tags.split(",").map((tag, i) => (
							<span key={i} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
								#{tag.trim()}
							</span>
						))}
					</p>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetailsPage;
