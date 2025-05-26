import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
	return (
		<>
			<Navbar />
			<div className="pt-[5.5rem]">
				<Outlet />
			</div>
		</>
	);
};

export default AppLayout;
