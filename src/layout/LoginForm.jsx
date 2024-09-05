import { useRef } from "react";
import { styles } from "../Assets/Data/Styles";
import { Input } from "../components/Input/Input";
import { Label } from "../components/Label/Label";
import MainH1 from "../components/Title/MainH1";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { change_user } from "../redux/userSlice";

export default function LoginForm() {
	const { user } = useSelector(store => store.userSlice);
	const dispatch = useDispatch()
	const userInput = useRef(null);


	const handle_user = () => {
		if (userInput.current.value !== '') {
			dispatch(change_user(userInput.current.value))
		}
	};

	return (
		<div
			className={` w-full border-2 border-black bg-slate-100 flex gap-8 flex-col items-center z-10 p-6 `}
		>
			<MainH1 class=" mt-10 w-fit text-center text-5xl" title="Sign In" />
			<div className={`${styles.Cent} gap-2 flex-col w-5/6 h-3/6 `}>
				<Label htf="username" title="Username *" class={` w-full `} />
				<input ref={userInput} id='username' type="text" className="w-full border border-black pl-2 placeholder-orange-600" placeholder="Add your name" />
				{/* <Input id='username' type="text" class={` w-full border border-black`} dis={false} holder='Add your name' value='' /> */}
				<Label htf="password" title="Password" class={` w-full `} />
				<input id='password' type="password" className="w-full border border-black pl-2" disabled placeholder="just hit Sign In" />
				{/* <Input id='password' type="password" class={` w-full border border-black  pl-2`} dis={true} holder='just hit Sign In' value='' /> */}
			</div>
			<div className=" border-black flex justify-center w-fit">
				<Link to='/home' onClick={handle_user}>
					<button className="bg-red-400 hover:bg-primLight h-10 w-32 rounded">Sign In</button>
				</Link>
			</div>
			<div className="flex justify-end w-full underline">
				<Link to='/signup' >Sign up</Link >
			</div>
		</div>
	);
}
