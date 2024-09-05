import styles from "../../Assets/Data/Styles.module.css"
import { useEffect, useState, useRef } from "react";
import ResposiveNav from "../../layout/ResposiveNav";
import { useNavigate, useParams } from "react-router-dom"
import Preloader from "../../components/Preloader";
import Abilities from "../../components/Agents/Abilities";
import AgentIcon from "../../components/Agents/AgentIcon";
import AllAgents from "../../components/Agents/AllAgentsIcons";
import AgentPort from "../../components/Agents/AgentPort";
import { useDispatch, useSelector } from "react-redux";
import { change_agent } from "../../redux/fetcherSlice";


export default function SingleAgent() {
  let { id } = useParams();
  //converting url to match agent names
  const name = id.charAt(0).toUpperCase() + id.substring(1).replace("-", "/")

  const rrf = useRef()
  const dispatch = useDispatch()
  const { agents, agent } = useSelector(store => store.fetcherSlice)
  const navigate = useNavigate()

  let data = (i) => {
    if (name.includes('/', 0)) {
      dispatch(change_agent(agents.find((agents) => agents.displayName === name.toUpperCase())))
      // setAgent(agents.find((agents) => agents.displayName === name.toUpperCase()))
    } else {
      dispatch(change_agent(agents.find((agents) => agents.displayName === name)))
      // setAgent(agents.find((agents) => agents.displayName === name))
    }
  }

  const nav = () => {
    navigate('/home/agents')
  }

  useEffect(() => {
    if (agents === null) {
    } else {
      // setTimeout(data, 1000)
      data()
    }
  }, [agents]);



  if (agent === null) {
    return <div>
      <div className={`${styles.agents_bg}  bg-fixed bg-center min-h-screen`}>
        <ResposiveNav />
        <div className="h-screen w-full flex justify-center items-center">
          <Preloader />
        </div>
      </div>
    </div>
  }

  return (
    <div className={`${styles.agents_bg} bg-fixed bg-center min-h-screen max-h-screen overflow-hidden overflow-y-scroll lg:flex flex-col justify-center`}>
      <div className="fixed z-50 w-full top-0">
        <ResposiveNav />
      </div>
      <div className=" md:mx-2 mt-24 lg:mt-16 xl:mt-[4rem] relative z-20 flex flex-col">
        <button className="text-2xl text-white absolute right-0 m-1 bg-slate-500 bg-opacity-70 px-5 rounded-md z-50 -mt-10 md:mt-1" onClick={nav}>Agents</button>
        <div className={` lg:grid lg:grid-cols-5 flex flex-col items-center justify-center lg:flex-row bg-gradient-to-l overflow-hidden`}
          style={{ background: `linear-gradient(to left, #${agent.backgroundGradientColors[0]},rgba(0,0,0,0)` }}>
          <AgentIcon agent={agent} />
          <Abilities agent={agent.abilities} color='' />
          <AgentPort agent={agent} />
        </div>
        <AllAgents />
      </div>

    </div >
  )
}