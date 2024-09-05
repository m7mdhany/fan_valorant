import NavLogo from '../Assets/Imgs/valo-logo.png'
import SideLogo from '../Assets/Imgs/valo-word-wh.png'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function NavBar() {
  const { id } = useParams()
  const { user, userImg } = useSelector(store => store.userSlice)

  let vi, log
  if (user) {
    vi = ''
    log = 'sign out'
  } else {
    vi = 'hidden'
    log = 'login'
  }
  return (
    <div className="sticky px-5 max-w-screen h-16 bg-primDark flex items-center gap-5 z-20 overflow-x-clip ">
      <Link to="/home"><img className='h-12 shadow-2xl hover:shadow-orange-50 rounded-lg' src={NavLogo} alt="" /></Link>
      <div className="flex text-white text-2xl gap-2 w-fit z-10 flex-1">
        <Link className='hover:border-b border-SecLight hover:bg-gray-800 px-5 py-2 rounded-md cursor-not-allowed'>Summary</Link>
        <Link className='hover:border-b border-SecLight hover:bg-gray-800 px-5 py-2 rounded-md cursor-not-allowed'>Gameplay</Link>
        <Link to='/home/agents' className='hover:border-b border-SecLight hover:bg-gray-800 px-5 py-2 rounded-md '>Agents</Link>
        <Link to='/home/gear' className='hover:border-b border-SecLight hover:bg-gray-800 px-5 py-2 rounded-md group'>Gear
          {/* <div className='flex flex-col bg-red-500 border hidden absolute w-1 h-1 opacity-0 group-hover:opacity-100 group-hover:h-fit group-hover:w-96 mt-5  ease-in duration-100'>
            <Link>0</Link>
            <Link>1</Link>
            <Link>2</Link>
          </div> */}
        </Link>
        <Link to='/home/maps' className='hover:border-b border-SecLight hover:bg-gray-800 px-5 py-2 rounded-md'>Maps</Link>
      </div>
      <div className='flex gap-6 w-fit items-center'>
        <div className={`flex gap-2 items-center ${vi}`}>
          <p className='text-white text-2xl'>Welcome, {user}</p>
          <img src={userImg} className='border bg-slate-300 rounded-full w-10 h-10' />
        </div>
        <Link to='/login' className='flex justify-self-end z-10 h-7'>
          <button className='bg-SecLight w-16 rounded-sm'>{log}</button>
        </Link>
      </div>
      <div className='absolute h-16 overflow-hidden -end-80 '>
        <img className='h-32 -my-10 opacity-10' src={SideLogo} alt="" />
      </div>
      {/* <div className="h-10 bg-black text-white flex items-center justify-center text-2xl fixed bottom-0 p-10 ">Using React - Tailwind - Redux Toolkit</div> */}
    </div>
  )
}
