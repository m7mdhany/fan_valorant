import { useState } from "react"

export default function Card(probs) {

  const [color , setColor] = useState('')

  return (
    <div className="flex flex-col duration-700 items-center w-64 h-96 relative group" onMouseEnter={() => setColor(probs.color)} onMouseLeave={() => setColor('94a3b8')}>
      <div className={`absolute h-full w-full bg-gradient-to-t from-black z-10 group-hover:opacity-0 ${probs.border}`}></div>
      <div 
        className={`h-full flex justify-start items-end overflow-hidden duration-500 relative bg-center bg-slate-400 group-hover:bg-[#${probs.color}] bg-[length:300px_500px] bg-repeat`}
        style={{ backgroundImage: `url(${probs.bg})`, backgroundColor: `#${color}` }} >
        <img className={`scale-[2.5] group-hover:scale-[3] duration-500`} src={probs.photo} alt="" />
      </div>
      <div className="bg-white text-black duration-500 group-hover:bg-black group-hover:text-white text-5xl w-full text-center z-20 group-hover:mb-16 absolute bottom-0">
        {probs.title}
      </div>
    </div>
  )
}