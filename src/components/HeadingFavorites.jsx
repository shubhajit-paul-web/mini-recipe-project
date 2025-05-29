import {Heart, Plus} from "lucide-react";
import {useNavigate} from "react-router-dom";

const HeadingFavorites = ({info}) => {
	const navigate = useNavigate();

	return (
		<div className="text-center my-8">
			<div className="flex justify-center items-center gap-2 text-3xl font-bold">
				<div className="bg-pink-100 p-2 rounded-full">
					<Heart className="text-pink-500 w-4 h-4" />
				</div>
				<h1>Favorites</h1>
				<div className="bg-pink-100 p-2 rounded-full">
					<Heart className="text-pink-500 w-4 h-4" />
				</div>
			</div>
			<p className="text-gray-500 text-base mt-2">
				{info && info.filter((recipe) => recipe.isFavorite).length ? (
					<span>All your bookmarked recipes in one place</span>
				) : (
					<div className="flex flex-col justify-center items-center gap-12">
						<span>
							You haven’t added any recipes to your favorites. <br /> Start exploring and tap the ❤️ to save what you love!
						</span>
						<button className="flex items-center gap-1.5 bg-pink-500 text-white font-medium py-3 px-5 rounded-xl" onClick={() => navigate("/recipes")}>
							<Plus /> Add Favorites
						</button>
					</div>
				)}
			</p>
		</div>
	);
};

export default HeadingFavorites;
