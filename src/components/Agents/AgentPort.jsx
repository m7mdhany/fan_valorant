export default function AgentPort(probs) {
  return (
    <div className="min-w-96 w-full flex justify-end z-10 xl:mt-20 md:mt-0 xl:col-span-2 h-full self-end " >
      <div className="h-[40rem] w-[50rem] relative overflow-y-clip flex justify-center items-start min-h-full">
        <img className="min-w-[70rem] absolute " src={probs.agent.fullPortrait} alt="" />
      </div>
    </div>
  )
}