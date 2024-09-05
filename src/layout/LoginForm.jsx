import { styles } from "../Assets/Data/Styles";
import { Input } from "../components/Input/Input";
import { Label } from "../components/Label/Label";
import MainH1 from "../components/Title/MainH1";
import { Link } from "react-router-dom";

export default function LoginForm() {

	return (
		<div
			className={` w-full border-2 border-black bg-slate-100 flex gap-8 flex-col items-center z-10 p-6 `}
		>
			<MainH1 class=" mt-10 w-fit text-center text-5xl" title="Sign In" />
			<div className={`${styles.Cent} gap-2 flex-col w-5/6 h-3/6 `}>
				<Label htf="username" title="Username" class={` w-full `} />
				<Input id='username' type="text" class={` w-full border border-black`} dis={true} holder='You dont need to add anything' />
				<Label htf="password" title="Password" class={` w-full `} />
				<Input id='password' type="password" class={` w-full border border-black`} dis={true} holder='just hit Sign In' />
			</div>
			<div className=" border-black flex justify-center w-fit">
				<Link to='/home'>
					<button className="bg-red-400 hover:bg-primLight h-10 w-32 rounded">Sign In</button>
				</Link>
			</div>
			<div className="flex justify-end w-full underline">
				<Link to='/signup' >Sign up</Link >
			</div>
		</div>
	);
}
