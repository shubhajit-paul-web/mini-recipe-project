import {Route, Routes} from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import AddRecipe from "../pages/AddRecipe";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import RecipeDetailsPage from "../pages/RecipeDetailsPage";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/recipes" element={<Recipes />} />
				<Route path="/recipes/details/:id" element={<RecipeDetailsPage />} />
				<Route path="/add-recipe" element={<AddRecipe />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/about-us" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
