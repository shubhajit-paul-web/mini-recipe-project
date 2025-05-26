import {Plus} from "lucide-react";
import {useNavigate} from "react-router-dom";

export const HeadingContent = () => {
	return (
		<div className="text-center mb-8">
			<h2 className="text-2xl font-bold mb-2">👨‍🍳 My Recipes</h2>
			<p className="text-lg text-zinc-600">Here are all the recipes you’ve created.</p>
		</div>
	);
};

export const NoRecipesHeading = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col justify-center items-center">
			<h2 className="text-3xl font-semibold">😋 You haven’t added any recipes yet!</h2>
			<p className="text-xl text-zinc-700 mt-3">Start sharing your delicious dishes with the world.</p>
			<button className="flex items-center gap-2 font-medium text-base bg-orange-400 text-white py-3 px-5 rounded-md mt-8 transition-all duration-200 hover:bg-orange-500" onClick={() => navigate("/add-recipe")}>
				<Plus /> Add Your First Recipe
			</button>
		</div>
	);
};
