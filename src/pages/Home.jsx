import { useNavigate } from "react-router-dom";
import pizzaImg from "../assets/images/pizza-img.png";

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="mt-12 px-10 flex justify-around items-center gap-10">
			{/* Text Section */}
			<div className="">
				{/* Main Heading */}
				<h1 className="text-6xl md:text-5xl font-extrabold leading-tight tracking-tight">
					<span className="text-[#D84315]">Cook</span>, <span className="text-[#FF9800]">Save</span> & <span className="text-[#4CAF50]">Share</span>
				</h1>

				{/* Subheading */}
				<p className="mt-5 text-base md:text-xl text-gray-600 font-medium max-w-xl ">Build your own digital cookbook 🍳 — store all your favorite recipes, step-by-step instructions, and cooking memories in one beautiful place.</p>

				{/* Optional Call to Action */}
				<button className="mt-10 bg-[#FF9800] hover:bg-[#fb8c00] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 cursor-pointer" onClick={() => navigate("/add-recipe")}>🍲 Create Your First Recipe</button>
			</div>
			{/* Banner Image */}
			<div className="min-w-[25rem] w-[35vw]">
				<img src={pizzaImg} alt="pizza banner image" className="w-full" />
			</div>
		</div>
	);
};

export default Home;
