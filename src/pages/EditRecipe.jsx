import { useContext } from "react";
import EditRecipeForm from "../components/EditRecipeForm";
import RecipeCardPrev from "../components/RecipeCardPrev";
import { RecipeContext } from "../Context/AppContext";

const EditRecipe = () => {
  const {recipePrev, recipeImgPrev} = useContext(RecipeContext);
  
	return (
		<div className="min-h-screen bg-zinc-200 flex justify-around gap-12 py-12 px-4 sm:px-6 lg:px-8">
			<EditRecipeForm />
			<div>
				<RecipeCardPrev info={recipePrev} recipeImgPrev={recipeImgPrev} />
			</div>
		</div>
	);
};

export default EditRecipe;
