import ResposiveNav from "../../layout/ResposiveNav"
import { useSelector } from "react-redux"
import GearWeapons from "../../components/Gear/GearMenu"
import { useEffect, useState } from "react"
import GearDetails from "../../components/Gear/GearDetails"
export default function Gear() {
  const { weapons, gear, showDetails } = useSelector((state) => state.fetcherSlice)
  let style2 = ' w-full flex flex-col gap-2 md:min-h-[30rem] lg:h-full ',
    style = ' sm:self-center',
    style3 = ''
  const [details, setDetails] = useState('vis');

  useEffect(() => {
    if (showDetails === 'hidden') { setDetails('vis') }
    else if (showDetails === 'vis') { setDetails('md:hidden') }
  }, [showDetails])

  if (weapons === null) {
    return <div className="text-white text-5xl border h-96 p-5">loading...</div>
  }

  return (
    <div className="bg-bg-lines bg-center h-screen min-h-[50rem] flex flex-col ">
      <ResposiveNav />
      <p className="text-4xl text-white m-10 md:-mb-10 text-center md:text-start">CHOOSE YOUR WEAPON</p>
      <div className=" mx-5 mb-577 border-y-4 border-red-500 lg:border-none  bg-opacity-45 h-screen min-h-[35rem] 2xl:min-h-[40rem] 
      md:m-16 flex md:flex-row gap-2 overflow-scroll xl:overflow-hidden flex-col relative">

        <div className={`${style2}`}>
          <GearWeapons type={weapons} filter="Sidearm" style={`${style} mr-2 h-20 md:h-12 2xl:h-20`} name='SIDEARMS' />
        </div>

        <div className={`${style2}`}>
          <GearWeapons type={weapons} filter="SMG" style={`${style}`} name='SMGs' />
          <GearWeapons type={weapons} filter="Shotgun" style={`${style}`} name='SHOTGUNS' />
        </div>

        <div className={`${style2}`}>
          <GearWeapons type={weapons} filter="Rifle" style={`${style}`} name='RIFLES' />
        </div>

        <div className={`${style2}`}>
          <GearWeapons type={weapons} filter="Sniper" style={`${style}`} name='SNIPER RIFLES' />
          <GearWeapons type={weapons} filter="Heavy" style='' name='MACHINE GUNS' />
        </div>

        <div className={`${style2}`}>
          <div className={`h-full ${details}`}>
            <GearWeapons type={gear} name='ARMOR' />
          </div>
            <GearDetails style={style3} />
          {/* <div className="h-fit">
          </div> */}
        </div>
      </div>
    </div >
  )
}