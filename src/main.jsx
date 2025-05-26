import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import AppContext from "./Context/AppContext.jsx";
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById("root")).render(
	<AppContext>
		<BrowserRouter>
			<App />
			<ToastContainer position="bottom-right" autoClose={2000} />
		</BrowserRouter>
	</AppContext>
);
