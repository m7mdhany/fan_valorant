import styles from "../Assets/Data/Styles.module.css"
import { useEffect, useState } from "react";
import ResposiveNav from "../layout/ResposiveNav"
import { get_data } from "../components/Fitcher/Fitcher"
import Card from "../components/Agents/Card";

export default function Agents() {

  const [agents, setAgents] = useState([]);

  let data = async () => {
    let res = await get_data('https://valorant-api.com/v1/agents')
    setAgents(res)
    console.log(res)
  }

  useEffect(() => {
    data()
  }, []);

  return (
    <div className="h-screen">
      <ResposiveNav />
      <div className={`${styles.agents_bg} h-fit bg-fixed bg-center p-28`}>
        <h1 className="text-7xl font-bold text-white p-5">AGENTS</h1>
        <div className="text-white text-5xl  flex-wrap gap-4 justify-center items-center flex"> 
          {
            agents.map((agent, i) => <Card title={agent.displayName} photo={agent.fullPortrait} bg={agent.background} />)
          }
        </div>
      </div>
    </div>
  )
}
