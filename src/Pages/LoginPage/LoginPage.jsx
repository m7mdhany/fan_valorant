import styles from "./loginpage.module.css";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Valo from '../../Assets/Imgs/valo-word-br-bk.png'
import Valo2 from '../../Assets/Imgs/valo-word-wh.png'
// import Valo3 from '../../assets/Imgs/bg-lines-test.png'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { change_userImg } from "../../redux/userSlice";
export default function LoginPage() {

	const [agent, setAgent] = useState([]);
	const [counter, setCounter] = useState(1);
	const { agents } = useSelector(store => store.fetcherSlice);
	const { userImg } = useSelector(store => store.userSlice);
	const navigate = useNavigate();
	const dispatch = useDispatch()

	useEffect(() => {
		if (agents === null) {
		} else {
			let num = Math.floor(Math.random() * (agents.length - 1))
			setAgent(agents[num])
			dispatch(change_userImg(agents[num].displayIcon))
		}
	}, [agents]);

	let changer = () => {
		let num = Math.floor(Math.random() * (agents.length - 1))
		setAgent(agents[num])
		dispatch(change_userImg(agents[num].displayIcon))
	};

	return (
		<div className={`bg-primLight md:${styles.bg} max-h-screen h-screen w-screen overflow-hidden flex flex-col `}>
			<div className="h-10 bg-black text-white flex items-center justify-center text-2xl w-screen">Using React - Tailwind - Redux Toolkit</div>
			<h1 className="select-none pt-2 text-6xl md:text-6xl text-white text-center">VALORANT</h1>
			<div className="z-10 flex-1 flex justify-center items-center relative w-full pb-10 ">
				<div className={` ${styles.bg} h-full flex flex-col md:justify-center justify-end items-center w-full`}>
					<div className="w-full md:w-3/5 flex justify-center z-50 ">
						<Outlet />
					</div>
				</div>

				<div className="top-0  absolute select-none  h-1/2  w-full " >
					{/* <span className="select-none text-white ml-52 text-5xl z-40 mt-24">{agent.displayName}</span> */}
					{/* <div className=" border border-red-500 w-full h-full absolute  flex items-end justify-center md:items-center md:-mt-56 md:justify-start ">
					</div> */}
					<div className="relative  overflow-x-clip md:w-[35rem] self-center flex justify-center items-start cursor-pointer" onClick={changer}>
						<span className="mt-40 ml-2 left-0 md:right-0 absolute text-white text-5xl z-40">Click me!</span>
						<img
							className={` -mt-28  min-h-[60rem] min-w-[60rem] `}
							src={agent.fullPortrait}
							alt=""
						/>
					</div>
				</div>

				{/* <div className=" flex justify-start items-start overflow-hidden absolute min-w-[60rem] border h-1\2">
					<div className=" h-[55rem] flex justify-center lg:grid grid-cols-10 w-screen">
						<div className="col-span-1 "></div>
						<div className="max-w-screen relative overflow-hidden flex justify-center  cursor-pointer border h-full" onClick={changer}>
							<span className="select-none text-white ml-52 text-5xl z-40 mt-24">{agent.displayName}</span>
							<div className="w-full h-full absolute  flex items-end justify-center md:items-center md:-mt-56 md:justify-start ">
								<span className=" select-none text-white text-5xl z-40">Click me!</span>
							</div>
							<img
								className={`absolute top-0 max-h-[60rem] min-w-[60rem] `}
								src={agent.fullPortrait}
								alt=""
							/>
						</div>
						<div className="col-span-1 "></div>
					</div>
				</div> */}
			</div>
			{/* <div className=" h-96 w-full relative min-w-[80rem]">
				<img className="w-full absolute bottom-0" src={Valo} alt="" />
				<img className="w-full absolute bottom-10" src={Valo2} alt="" />
				<img className="w-full absolute bottom-20" src={Valo} alt="" />
			</div> */}
		</div>
	);
}