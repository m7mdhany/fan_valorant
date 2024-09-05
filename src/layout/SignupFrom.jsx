import { Input } from "../components/Input/Input";
import MainH1 from "../components/Title/MainH1";
import LabelWithCheck from "../components/Label/Labelwithcheck";
import { Link } from "react-router-dom";
// import { useState } from "react";

export default function SignupForm() {

  return (
    <div
      className={`w-full border-2 border-black bg-slate-100 flex gap-1 flex-col items-center z-10 p-6 `}
    >
      <MainH1 class=" w-fit text-center text-5xl" title="Sign Up"></MainH1>
      <hr />
      <LabelWithCheck htf="username" title="Username" Ptitle={`must be`} />
      <Input id="username" type="text" class={` w-full border border-black `} />
      <LabelWithCheck htf="email" title="Email" Ptitle={`must be`} />
      <Input id="email" type="text" class={` w-full border border-black `} />
      <LabelWithCheck htf="confirm_email" title="Confirm Email" Ptitle={`must be`} />
      <Input id="confirm_email" type="text" class={` w-full border border-black `} />
      <LabelWithCheck htf="password" title="Password" Ptitle={`must be`} />{" "}
      <Input id="password" type="password" class={` w-full border border-black `} />
      <LabelWithCheck htf="confirm_password" title="Confirm Password" Ptitle={`must be`} />
      <Input id="confirm_password" type="password" class={` w-full border border-black `} />
      <div className="mt-3 border-black flex justify-center w-fit">
        <Link to='/home'>
          <button className="bg-red-400 hover:bg-red-500 h-10 w-32 rounded">Go</button>
        </Link>
      </div>
      <div className="flex justify-end w-full underline">
        <Link to='/login'> Already have account! </Link>
      </div>
    </div>
  );
}
