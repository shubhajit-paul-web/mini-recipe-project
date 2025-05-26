import {useContext, useEffect} from "react";
import {useForm, useWatch} from "react-hook-form";
import {toast} from "react-toastify";
import {RecipeContext} from "../Context/AppContext";
import {nanoid} from "nanoid";

const AddRecipeForm = () => {
	const {recipes, setRecipe, setRecipePrev} = useContext(RecipeContext);
	const {register, handleSubmit, reset, control} = useForm();

	const allFields = useWatch({control, name: ["recipeName", "imageURL", "description", "cookingTime", "tags", "category"]});

	useEffect(() => {
		const [recipeName, imageURL, description, cookingTime, tags, category] = allFields;

		setRecipePrev({
			recipeName: recipeName || "Recipe Name",
			description: description || "Short description...",
			cookingTime: cookingTime || "",
			category: category || "category",
			tags: tags || "",
			imageURL: imageURL?.[0] ? URL.createObjectURL(imageURL?.[0]) : null,
		});
	}, [allFields]);

	const handleFormData = (data) => {
		setRecipe([
			...recipes,
			{
				id: nanoid(),
				...data,
				imageURL: data.imageURL?.[0] ? URL.createObjectURL(data.imageURL[0]) : null,
				isFavorite: false,
			},
		]);

		toast.success("Recipe added successfully!");

		reset();
	};

	return (
		<form onSubmit={handleSubmit(handleFormData)} className="w-full max-w-2xl p-8 bg-white shadow-md rounded-xl border" id="add-recipe-form">
			<h2 className="text-2xl font-semibold text-gray-800 mb-8">🍳 Add a New Recipe</h2>

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
					Recipe Image <span className="text-red-500">*</span>
				</label>
				<input {...register("imageURL", {required: true})} id="imageURL" type="file" accept="image/*" className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100" />
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
					Cooking Time (in minutes)
				</label>
				<input {...register("cookingTime")} id="cookingTime" type="number" min="1" placeholder="e.g., 30" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
			</div>

			{/* Category */}
			<div className="mb-5">
				<label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
					Category
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
					Difficulty Level
				</label>
				<select {...register("difficulty")} id="difficulty" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
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

			{/* Submit Button */}
			<button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-md transition duration-300">
				<span className="text-lg leading-none">+</span> Add Recipe
			</button>
		</form>
	);
};

export default AddRecipeForm;
