import {useContext, useEffect} from "react";
import {useForm, useWatch} from "react-hook-form";
import {toast} from "react-toastify";
import {RecipeContext} from "../Context/AppContext";
import {useNavigate, useParams} from "react-router-dom";

const EditRecipeForm = () => {
	const params = useParams();
	const navigate = useNavigate();
	const {recipes, setRecipe, setRecipePrev, setRecipeImgPrev} = useContext(RecipeContext);

	const recipeData = recipes.find((recipe) => recipe.id === params.id);

	const {register, handleSubmit, reset, control} = useForm({
		defaultValues: {
			...recipeData,
		},
	});

	const allFields = useWatch({control, name: ["recipeName", "description", "cookingTime", "tags", "category"]});

	useEffect(() => {
		setRecipeImgPrev(recipeData?.imageURL);
	}, []);

	useEffect(() => {
		const [recipeName, description, cookingTime, tags, category] = allFields;

		setRecipePrev({
			recipeName: recipeName || "Recipe Name",
			description: description || "Short description...",
			cookingTime: cookingTime || "",
			category: category || "category",
			tags: tags || "",
		});
	}, [allFields]);

	// Edit/update recipe details (util function)
	const editRecipeUtils = (reader, data) => {
		const base64 = reader.result;

		const updatedRecipes = recipes.map((recipe) => {
			if (recipe.id === params.id) {
				return {
					...recipe,
					...data,
					imageURL: base64 || recipeData.imageURL,
				};
			}
			return recipe;
		});

		setRecipe(updatedRecipes);
		// set data to localstorage
		localStorage.setItem("recipes", JSON.stringify([...updatedRecipes]));

		toast.success("Recipe added successfully!");
		reset();

		// redirect to recipes page after 1 second
		setTimeout(() => {
			navigate("/recipes");
		}, 1000);
	};

	// handling form data (edit)
	const handleFormData = (data) => {
		const imageFile = data?.imageURL?.[0] || recipeData?.imageURL;

		const reader = new FileReader();

		if (typeof data?.imageURL?.[0] === "object") {
			reader.onloadend = () => {
				editRecipeUtils(reader, data);
			};

			reader.readAsDataURL(imageFile);
		} else {
			editRecipeUtils(reader, data);
		}
	};

	// handling new preview image
	const handleNewPrevImage = (e) => {
		const reader = new FileReader();
		const imageFile = e.target.files[0];

		if (imageFile) {
			reader.onloadend = () => {
				const base64 = reader.result;
				setRecipeImgPrev(base64);
			};
			reader.readAsDataURL(imageFile);
		}
	};

	return (
		<form onSubmit={handleSubmit(handleFormData)} className="w-full max-w-2xl p-8 bg-white shadow-md rounded-xl border" id="add-recipe-form">
			<h2 className="text-2xl font-semibold text-gray-800 mb-8">🍳 Edit Recipe</h2>
			{/* <img src={recipeData.imageURL} alt="" /> */}
			{/* Recipe Name */}
			<div className="mb-5">
				<label htmlFor="recipeName" className="block text-sm font-medium text-gray-700 mb-1">
					Recipe Name <span className="text-red-500">*</span>
				</label>
				<input {...register("recipeName", {required: true})} autoFocus id="recipeName" type="text" placeholder="e.g., Creamy Tomato Pasta" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
			</div>

			{/* Image Upload */}
			<div className="mb-5">
				<label htmlFor="imageURL" className="block text-sm font-medium text-gray-700 mb-1">
					Recipe Image
				</label>
				<input {...register("imageURL")} id="imageURL" type="file" accept="image/*" className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100" onChange={handleNewPrevImage} />
			</div>

			{/* Description */}
			<div className="mb-5">
				<label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
					Short Description (50-200 letters) <span className="text-red-500">*</span>
				</label>
				<textarea {...register("description", {required: true, minLength: 50, maxLength: 200})} id="description" rows={3} placeholder="Tell a little about this recipe..." className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
			</div>

			{/* Ingredients */}
			<div className="mb-5">
				<label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">
					Ingredients <span className="text-red-500">*</span>
				</label>
				<textarea {...register("ingredients", {required: true})} id="ingredients" rows={4} placeholder="e.g., 2 tomatoes, 1 onion, 1 tsp salt..." className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
			</div>

			{/* Instructions */}
			<div className="mb-5">
				<label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">
					Cooking Instructions <span className="text-red-500">*</span>
				</label>
				<textarea {...register("instructions", {required: true})} id="instructions" rows={5} placeholder="Step-by-step instructions..." className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
			</div>

			{/* Cooking Time */}
			<div className="mb-5">
				<label htmlFor="cookingTime" className="block text-sm font-medium text-gray-700 mb-1">
					Cooking Time (in minutes) <span className="text-red-500">*</span>
				</label>
				<input {...register("cookingTime", {required: true})} id="cookingTime" type="number" min="1" placeholder="e.g., 30" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
			</div>

			{/* Category */}
			<div className="mb-5">
				<label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
					Category <span className="text-red-500">*</span>
				</label>
				<select {...register("category", {required: true})} id="category" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
					<option value="">Select Category</option>
					<option value="🍳 Breakfast">🍳 Breakfast</option>
					<option value="🍛 Lunch">🍛 Lunch</option>
					<option value="🍲 Dinner">🍲 Dinner</option>
					<option value="🍰 Dessert">🍰 Dessert</option>
					<option value="🥪 Snack">🥪 Snack</option>
					<option value="🍹 Beverage">🍹 Beverage</option>
				</select>
			</div>

			{/* Difficulty */}
			<div className="mb-5">
				<label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-1">
					Difficulty Level <span className="text-red-500">*</span>
				</label>
				<select {...register("difficulty", {required: true})} id="difficulty" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
					<option value="">Select Difficulty</option>
					<option value="Easy">🟢 Easy</option>
					<option value="Medium">🟠 Medium</option>
					<option value="Hard">🔴 Hard</option>
				</select>
			</div>

			{/* Tags */}
			<div className="mb-5">
				<label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
					Tags (comma-separated) <span className="text-red-500">*</span>
				</label>
				<input {...register("tags", {required: true})} id="tags" type="text" placeholder="e.g., spicy, vegetarian, gluten-free" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
			</div>

			{/* Edit/Save Button */}
			<button type="submit" className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-md transition duration-300">
				<span className="text-lg leading-none">+</span> Save Recipe
			</button>
		</form>
	);
};

export default EditRecipeForm;
