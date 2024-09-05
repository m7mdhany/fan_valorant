import { useEffect, useState } from "react";
import { useSelector, dispatch, useDispatch } from "react-redux";
import { change_desc } from "../../redux/fetcherSlice";
export default function Abilities(probs) {
  const { agent, desc } = useSelector(store => store.fetcherSlice)
  const dispatch = useDispatch()
  let style = ''
  useEffect(() => { dispatch(change_desc(agent.abilities[0].description)) }, [agent])
  let changer = (i) => {
    dispatch(change_desc(agent.abilities[i].description));
  }
  return (
    <div className="z-20 mx-2 text-white flex flex-col lg:h-72  col-span-2 min-w-96 ">
      <p className="text-4xl xl:self-start self-center" >Abilities</p>
      <div className="  flex flex-col justify-center items-center xl:items-start ">
        <div className="xl:flex justify-start md:flex lg:grid  grid grid-cols-2 lg:grid-cols-3">
          {
            probs.agent.map((ability, i) => {
              if (agent.abilities[i].description === desc) {
                style = '!bg-SecDark'
              } else {
                style = ''
              }
              return <div key={i} className="flex justify-center flex-col items-center max-w-32 h-fit m-2 cursor-pointer group " onClick={() => { changer(i) }}>
                <div>
                  <img className={`group-hover:bg-SecDark rounded-xl bg-primDark ${style} p-2 lg:max-w-20 lg:min-w-20 lg:min-h-20  max-w-24 min-w-24 min-h-24 xl:max-w-24 xl:min-w-24 xl:min-h-24`} src={ability.displayIcon} alt="" />
                </div>
                <div className=" w-full text-center text-base "> {ability.displayName}</div>
              </div>
            }
            )
          }
        </div>
        <div className=" h-fit m-3 mx-10 md:mx-0" >
          <p className="text-xl xl:text-2xl flex text-justify mx-5 md:mx-16 lg:mx-0"> {desc} </p>
        </div >
      </div>
    </div>
  )
}
