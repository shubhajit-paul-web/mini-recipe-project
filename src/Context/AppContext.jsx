import {createContext, useState} from "react";

export const RecipeContext = createContext();

const AppContext = ({children}) => {
	const [recipes, setRecipe] = useState([]);
	const [recipePrev, setRecipePrev] = useState([]);

	return <RecipeContext.Provider value={{recipes, setRecipe, recipePrev, setRecipePrev}}>{children}</RecipeContext.Provider>;	
};

export default AppContext;
