import noImageAvailable from "../assets/images/placeholder-image.png";

const RecipeCardPrev = ({info, recipeImgPrev}) => {
	const {recipeName, imageURL, description, cookingTime, tags, category} = info;
	
	const tagsArr = tags && tags.split(", "); // convert tags (string) into array

	return (
		<div className="sticky top-30">
			<div className="text-xl mb-3 font-medium">🔴 Live Preview</div>
			<div className=" w-[21rem] h-fit rounded-2xl p-4 px-5 bg-white shadow-2xl shadow-zinc-300">
				<img className="rounded-xl w-full h-[12rem] object-cover object-center" src={imageURL || recipeImgPrev || noImageAvailable} alt="recipe image" />
				<div className="py-3">
					<div className="text-2xl font-bold line-clamp-1">{recipeName || "[Recipe Name]"}</div>
					<p className="text-lg mt-1 text-zinc-700 leading-6 line-clamp-2">{description}</p>
					<div className="py-3 text-lg font-semibold">
						<span>{category}</span>
						<span> • </span>
						<span>{cookingTime ? Math.floor(cookingTime / 2) + "-" + cookingTime + " mins" : "0-0 mins"}</span>
					</div>
					<div className="mt-1 text-xs flex gap-1.5 font-medium overflow-x-auto scrollbar-hide" style={{scrollbarWidth: "none"}}>
						{tagsArr &&
							tagsArr.slice(0,4).map((tag, index) => (
								<span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full inline-block whitespace-nowrap min-w-0" title={tag?.length > 4 ? tag : ""}>
									#{tag.trim()?.length > 4 ? tag.trim()?.slice(0,5)+".." : tag.trim()}
								</span>
							))}
						{tagsArr && tagsArr.length > 4 ? <span className="bg-gray-200 text-gray-700 text-sm font-medium px-2 py-0.5 rounded-full" title={tagsArr.slice(4).join(", ")}>+{tagsArr.length - 4}</span> : ""}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeCardPrev;
