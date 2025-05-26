import errorImgSVG from "../assets/images/undraw_donut.svg";

const NotFound = () => {
	return (
		<div className="flex flex-col justify-center items-center p-15">
			<img src={errorImgSVG} alt="" className="w-2/6 mb-12" />
			<h2 className="text-3xl font-bold">Look like you're lost</h2>
			<p className="text-xl mt-2 text-zinc-600">The page you are looking for not available!</p>
			<button className="mt-8 bg-red-400 text-white font-medium text-lg py-3 px-6 rounded-md transition-all duration-200 shadow-2xl shadow-red-200 hover:bg-red-500 hover:scale-[101%]">Go to Home</button>
		</div>
	);
};

export default NotFound;
