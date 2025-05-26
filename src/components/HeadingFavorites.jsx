import {Heart} from "lucide-react";

const HeadingFavorites = ({info}) => {
	return (
		<div className="text-center my-8">
			<div className="flex justify-center items-center gap-2 text-3xl font-bold">
				<div className="bg-pink-100 p-2 rounded-full">
					<Heart className="text-pink-500 w-5 h-5" />
				</div>
				<h1>Favorites</h1>
			</div>
			<p className="text-gray-500 text-base mt-2">
				{info && info.filter((recipe) => recipe.isFavorite).length ? (
					<span>All your bookmarked recipes in one place</span>
				) : (
					<span>
						You haven’t added any recipes to your favorites. <br /> Start exploring and tap the ❤️ to save what you love!
					</span>
				)}
			</p>
		</div>
	);
};

export default HeadingFavorites;
