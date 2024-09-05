export default function AgentIcon(probs) {
  let agent = probs.agent

  return (
    <div className="lg:min-w-44 xl:min-w-56 w-32 flex flex-col items-center justify-center m-auto">
      <p className="text-white text-7xl lg:text-5xl xl:text-7xl ">{agent.displayName.toUpperCase()} </p>
      <div className=" border-4 flex w-fit">
        <img className="flex bg-slate-300" src={agent.displayIcon} alt="" />
      </div>
      <div className="gap-2 flex flex-col justify-center items-center text-white text-2xl p-5">
        <p>Role</p>

        {/* {agent.role ? <img className="w-16 h-16 " src={agent.role.displayIcon} alt="" /> : ''} */}
        {/* {agent.role ? <p>{agent.role.displayName}</p> :''} */}

        <img className="w-16 h-16 " src={agent.role?.displayIcon} alt="" />
        <p>{agent.role?.displayName}</p>
      </div>  
    </div>
  )
}
