import AddRecipeForm from "../components/AddRecipeForm";
import RecipeCardPrev from "../components/RecipeCardPrev";
import {RecipeContext} from "../Context/AppContext";
import {useContext} from "react";

const AddRecipe = () => {
	const {recipePrev} = useContext(RecipeContext);

	return (
		<div className="min-h-screen bg-zinc-200 flex justify-around gap-12 py-12 px-4 sm:px-6 lg:px-8">
			<AddRecipeForm />
			<div>
				<RecipeCardPrev info={recipePrev} />
			</div>
		</div>
	);
};

export default AddRecipe;
