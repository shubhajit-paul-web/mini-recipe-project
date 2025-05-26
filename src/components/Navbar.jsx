import {Link, NavLink} from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
	const handleNavLinkStyles = ({isActive}) => {
		const baseStyles = "opacity-[0.9] hover:text-red-400 transition duration-300";
		return isActive ? `text-red-500 font-bold ${baseStyles}` : baseStyles;
	};

	return (
		<header className="w-full h-[5.5rem] bg-white border-b border-zinc-400 flex justify-around items-center fixed top-0 left-0">
			<Link to="/">
				<img src={logo} alt="logo" className="w-30" />
			</Link>
			<nav className="text-lg font-medium flex gap-10">
				<NavLink to="/" className={handleNavLinkStyles}>Home</NavLink>
				<NavLink to="/recipes" className={handleNavLinkStyles}>Recipes</NavLink>
				<NavLink to="/add-recipe" className={handleNavLinkStyles}>Add Recipe</NavLink>
				<NavLink to="/favorites" className={handleNavLinkStyles}>Favorites</NavLink>
				<NavLink to="/about-us" className={handleNavLinkStyles}>About us</NavLink>
			</nav>
			<div className="flex gap-5 font-medium">
				<button className="border rounded-md py-2 px-6 cursor-pointer">Log in</button>
				<button className="bg-red-400 text-white rounded-md py-2 px-6 cursor-pointer">Sign up</button>
			</div>
		</header>
	);
};

export default Navbar;
