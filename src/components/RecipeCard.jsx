import {useContext} from "react";
import noImageAvailable from "../assets/images/placeholder-image.png";
import {RecipeContext} from "../Context/AppContext";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

const RecipeCard = ({info}) => {
	const {setRecipe} = useContext(RecipeContext);
	const {id, recipeName, imageURL, description, cookingTime, tags, category, isFavorite} = info;
	const tagsArr = tags && tags.split(", "); // convert tags (string) into array

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
		<div className="relative w-[21rem] h-fit rounded-2xl p-4 bg-white shadow-2xl shadow-zinc-300 transition-transform duration-200 hover:scale-[102%]">
			<Link to={`/recipes/details/${id}`}>
				<img className="rounded-xl w-full h-[12rem] object-cover object-center" src={imageURL || noImageAvailable} alt="" />
				<div className="py-3 pb-7">
					<div className="text-2xl font-bold line-clamp-1">{recipeName}</div>
					<p className="text-lg mt-1 text-zinc-700 leading-6 line-clamp-2">{description}</p>
					<div className="py-3 text-lg font-semibold">
						<span>{category} • </span>
						<span>{cookingTime ? Math.floor(cookingTime / 2) + "-" + cookingTime + " mins" : "0-0 mins"}</span>
					</div>
					<div className="mt-1 text-xs flex gap-1.5 font-medium overflow-x-auto scrollbar-hide" style={{scrollbarWidth: "none"}}>
						{tagsArr &&
							tagsArr.slice(0, 4).map((tag, index) => (
								<span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full inline-block whitespace-nowrap min-w-0" title={tag?.length > 4 ? tag : ""}>
									#{tag.trim()?.length > 4 ? tag.trim()?.slice(0, 5) + ".." : tag.trim()}
								</span>
							))}
						{tagsArr && tagsArr.length > 4 ? (
							<span className="bg-gray-200 text-gray-700 text-sm font-medium px-2 py-0.5 rounded-full" title={tagsArr.slice(4).join(", ")}>
								+{tagsArr.length - 4}
							</span>
						) : (
							""
						)}
					</div>
				</div>
			</Link>
			<button className={`absolute w-max top-[calc(100%-1.55rem)] left-[50%] translate-x-[-50%] text-base py-3 px-6 rounded-xl text-red-700 ${isFavorite ? "bg-red-200 " : "bg-pink-500 text-white"}`} data-id={id} onClick={handleToggleFavorite}>
				{isFavorite ? "Remove from Favorites" : "🤍 Add to Favorites"}
			</button>
		</div>
	);
};

export default RecipeCard;
