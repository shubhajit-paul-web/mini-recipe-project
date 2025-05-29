import {createContext, useEffect, useState} from "react";

export const RecipeContext = createContext();

const AppContext = ({children}) => {
	const [recipes, setRecipe] = useState([]);
	const [recipePrev, setRecipePrev] = useState([]);
	const [recipeImgPrev, setRecipeImgPrev] = useState("");

	useEffect(() => {
		setRecipe(JSON.parse(localStorage.getItem("recipes")) ?? []);
	}, []);

	return <RecipeContext.Provider value={{recipes, setRecipe, recipePrev, setRecipePrev, recipeImgPrev, setRecipeImgPrev}}>{children}</RecipeContext.Provider>;
};

export default AppContext;
