import {useNavigate} from "react-router-dom";

const About = () => {
	const navigate = useNavigate();

	return (
		<div className="w-2/3 m-auto text-center p-10">
			<h1 className="text-3xl font-bold mb-4">About Us</h1>
			<p className="text-lg text-zinc-700">
				Welcome to Recipes, your ultimate destination for delicious, homemade recipes crafted with love and shared by passionate food lovers like you! 🍲✨ Whether you're a beginner in the kitchen or a seasoned chef, our platform is here to inspire your culinary creativity and help you
				discover new flavors every day.
			</p>
			<h2 className="text-3xl font-bold mt-7">Our Mission</h2>
			<p className="text-xl text-zinc-700 italic mt-2">"To bring people together through the joy of cooking and sharing."</p>
			<button className="text-lg bg-orange-500 text-white py-3 px-5 rounded-xl mt-12 hover:bg-orange-600 transition-all duration-200" onClick={() => navigate("/add-recipe")}>
				Create Recipes
			</button>
		</div>
	);
};

export default About;
