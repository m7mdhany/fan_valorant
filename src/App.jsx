// import logo from './logo.svg';
// import './App.css';
import LoginPage from "./Pages/LoginPage/LoginPage";
import LoginForm from "./layout/LoginForm";
import SignupForm from "./layout/SignupFrom";
import Agents from "./Pages/Agents/Agents";
import Home from "./Pages/Home/Home";
import SingleAgent from "./Pages/Agents/SingleAgent";
import Maps from "./Pages/Maps/Maps";
import Gear from "./Pages/Gear/Gear";
import { get_data } from "./components/Fitcher/Fitcher";
import { useDispatch } from "react-redux";
import { fetcher } from "./redux/fetcherSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// react router dom
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch()
	// const { maps } = useSelector(store => store.fetcherSlice)
	let data = async () => {
		let agents_res = await get_data('https://valorant-api.com/v1/agents')
		let removedItem = agents_res.splice(9, 1)
		let maps_res = await get_data('https://valorant-api.com/v1/maps')
		let weapons_res = await get_data('https://valorant-api.com/v1/weapons')
		let gear_res = await get_data('https://valorant-api.com/v1/gear')
		dispatch(fetcher({
			agents: agents_res,
			maps: maps_res,
			weapons: weapons_res,
			gear: gear_res,
		}))
	}
	data()
	// useEffect()
	return (
		<>
			<Routes>

				<Route path="/" element={<LoginPage />}>
					<Route path="/" element={<LoginForm />} />
					<Route path="login" element={<LoginForm />} />
					<Route path="signup" element={<SignupForm />} />
				</Route>

				<Route path="home" element={<Home />} />
				<Route path="home/agents" element={<Agents />} />
				<Route path="home/agents/:id" element={<SingleAgent />} />
				<Route path="home/maps" element={<Maps />} />
				<Route path="home/gear" element={<Gear />} />
			</Routes>

		</>
	);
}

export default App;
