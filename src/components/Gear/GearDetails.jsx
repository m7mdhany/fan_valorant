import { useSelector, useDispatch } from "react-redux"
import { change_gearDetails, change_slideDetails } from "../../redux/fetcherSlice"

export default function GearDetails(styles) {
  const { gearDetails, showDetails, slideDetails } = useSelector(state => state.fetcherSlice)
  const dispatch = useDispatch()

  const trigger = () => {
    dispatch(change_gearDetails({ showDetails: 'hidden', gearDetails: gearDetails }))
  }
  const slide = () => {
    if (showDetails === 'vis') {
      dispatch(change_slideDetails('!-left-[50rem]'))
    } else {
      dispatch(change_slideDetails('!left-0'))
    }
  }

  let style,
    style2 = 'text-2xl md:text-base xl:text-xl text-white bg-SecDark rounded-md text-center'
  if (gearDetails === null) {
    return <div></div>
  }

  if (!gearDetails.weaponStats.damageRanges[1]) {
    style = 'hidden'
  } else { style = '' }

  return (
    <div className={`md:relative w-full md:h-full md:mt-0 md:px-0 md:overflow-hidden md:top-0 flex flex-col gap-2 transition-all ease-in-out duration-250
    z-10 fixed top-24 overflow-scroll h-full px-5 border-y-4 border-red-500 bg-slate-400 md:bg-inherit md:border-none -left-[50rem] md:left-0 ${showDetails} ${slideDetails} `}>
      <div className="bg-SecLight text-white text-2xl flex justify-center items-center"> Details</div>
      <div className="md:h-full w-full flex flex-col gap-2 bg-blue-200 rounded-md md:bg-opacity-70 bg-opacity-90 pb-2 md:pb-0">
        <button className="text-2xl text-center rounded-md bg-slate-500 mx-5 mt-2 hidden md:block" onClick={trigger}>-X-</button>
        <button className="text-2xl text-center rounded-md bg-slate-500  m-2 px-1 block md:hidden fixed self-end " onClick={slide}>-X-</button>
        <div className="flex flex-col gap-2 ">
          <div className="h-24 flex items-center justify-center mt-10">
            <img src={gearDetails.displayIcon} className="flex h-[5rem] md:h-[4rem]" alt="" />
          </div>
          <p className="text-center  text-4xl md:text-2xl lg:text-4xl text-primDark">{gearDetails.displayName}</p>
          <button className="w-4/5 text-xl text-white bg-gradient-to-r from-SecDark to-SecLight hover:from-primDark hover:to-primLight 
          self-center rounded-md">Skins</button>
          <p className="text-center text-2xl md:text-2xl lg:text-2xl text-primDark">{gearDetails.shopData.cost} $</p>
          <div className="flex flex-col justify-center mx-3 gap-3">
            <p className={`${style2}`}>Magazine Size: {gearDetails.weaponStats.magazineSize}</p>
            <p className={`${style2}`}>FireRate: {gearDetails.weaponStats.fireRate}</p>
            <p className={`${style2}`}>Range: <span className="text-primLight"> {gearDetails.weaponStats.damageRanges[0].rangeEndMeters} </span>Meters
              <p className={`${style2}`}> Head Damage:<span className="text-primLight"> {gearDetails.weaponStats.damageRanges[0].headDamage.toFixed()} </span></p>
              <p className={`${style2}`}> Body Damage:<span className="text-primLight"> {gearDetails.weaponStats.damageRanges[0].bodyDamage.toFixed()} </span></p>
              <p className={`${style2}`}> Leg Damage:<span className="text-primLight"> {gearDetails.weaponStats.damageRanges[0].legDamage.toFixed()} </span></p>
            </p>
            <p className={`${style2} ${style}`}>Range:<span className="text-primLight"> {gearDetails.weaponStats.damageRanges[1]?.rangeEndMeters} </span>Meters
              <p className={`${style2}`}> Head Damage:<span className="text-primLight"> {gearDetails.weaponStats.damageRanges[1]?.headDamage.toFixed()} </span></p>
              <p className={`${style2}`}> Body Damage:<span className="text-primLight"> {gearDetails.weaponStats.damageRanges[1]?.bodyDamage.toFixed()} </span></p>
              <p className={`${style2}`}> Leg Damage:<span className="text-primLight"> {gearDetails.weaponStats.damageRanges[1]?.legDamage.toFixed()} </span></p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
