import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Valo from '../Assets/Imgs/valo-word-br-wh.png'
import SLogo from '../Assets/Imgs/valo-logo.png'
import { useSelector } from "react-redux";
export default function SideNav() {
  const { id } = useParams()
  const [postion, setPostion] = useState('!-right-80')
  const { user, userImg } = useSelector(store => store.userSlice)

  let vi, log
  if (user) {
    vi = ''
    log = 'sign out'
  } else {
    vi = 'hidden'
    log = 'login'
  }

  const checker = e => {
    if (postion === '!right-0') {
      setPostion('!-right-80')
    } else if (postion === '!-right-80') {
      setPostion('!right-0')
    }
  }

  return (
    <div className="z-50 h-12 w-full sticky overflow-x-clip">
      <div className=" bg-primDark  relative z-50 w-full h-12 text-white text-right p-2 text-3xl flex flex-row-reverse items-center gap-2" >
        <button className="w-fit z-50 text-primLight text-5xl px-7 bg-slate-700 bg-opacity-80" onClick={checker}>III</button>
        <div className={`hidden md:flex gap-3 ${vi} items-center !bg-primDark z-50`}>
          <p>Welcome, {user}</p>
          <img src={userImg} className="border w-10 h-10 rounded-full bg-slate-300" alt="" />
        </div>
        <div className="z-40 w-full flex flex-col items-center absolute">
          <div className="relative overflow-hidden w-full h-12 flex items-center justify-center ">
            <img className="absolute -z-10 w-full " src={Valo} alt="" />
          </div>
          <div className=" relative w-full flex items-center justify-center  ">
            <Link to='/home' className="absolute">
              <img className="bg-primDark rounded-3xl w-20 p-2 border-SecDark " src={SLogo} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className={` absolute w-80 h-fit bg-gradient-to-b from-primDark from-50%  to-SecDark py-5 px-2 z-40 -right-80 ${postion}`}>
        <div className="flex justify-between md:justify-end px-2">
          <div className={`flex md:hidden gap-3 ${vi} items-center !bg-primDark z-50`}>
            <p className="text-white text-2xl">Welcome, {user}</p>
            <img src={userImg} className="border w-10 h-10 rounded-full bg-slate-300" alt="" />
          </div>
          <Link to='/login' className="text-white text-xl py-1 px-7 rounded-sm bg-SecLight min-w-fit h-10" >{log}</Link>
        </div>
        <div className="flex text-white text-2xl gap-2 w-full flex-col ">
          <Link className='flex justify-center items-center hover:border-b border-SecLight hover:bg-gray-800 rounded-md w-full h-16 cursor-not-allowed'>Summary</Link>
          <Link className='flex justify-center items-center hover:border-b border-SecLight hover:bg-gray-800 rounded-md w-full h-16 cursor-not-allowed'>Gameplay</Link>
          <Link to='/home/agents' className='flex justify-center items-center hover:border-b border-SecLight hover:bg-gray-800 rounded-md w-full h-16'>Agents</Link>
          <Link to='/home/gear' className='flex justify-center items-center hover:border-b border-SecLight hover:bg-gray-800 rounded-md w-full h-16 cursor-not-allowed'>Gear</Link>
          <Link to='/home/maps' className='flex justify-center items-center hover:border-b border-SecLight hover:bg-gray-800 rounded-md w-full h-16'>Maps</Link>
        </div>
      </div>
    </div>
  );
};