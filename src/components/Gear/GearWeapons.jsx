import { useSelector, useDispatch } from "react-redux"
import { change_gearDetails } from "../../redux/fetcherSlice"

export default function GearWeapons(shop) {
  const { gear, weapons, showDetails, gearDetails } = useSelector(state => state.fetcherSlice);
  const dispatch = useDispatch();

  const trigger = (item) => {
    dispatch(change_gearDetails({ gearDetails: item, showDetails: 'vis' }))
  }

  let style = 'bg-slate-400 !bg-opacity-80 rounded-md h-full min-h-280 border-primLight hover:bg-SecLight hover:border-2 relative ease-in duration-0 p-5',
    textstyle = 'w-full  text-white  text-center font-light xl:font-medium',
    clickedStyle = '',
    cost = '';

  return (
    <div className={`w-full h-full flex flex-col gap-2 `}>
      <p className="text-white text-2xl text-center bg-SecLight">{shop.name}</p>
      {
        shop.type.map((item, i) => {
          if (item.shopData?.cost === 0) { cost = 'Free' } else { cost = item.shopData?.cost + ' $' }
          if (gearDetails?.displayName === item.displayName && showDetails === 'vis') { clickedStyle = '!bg-red-200 !border-2' } else { clickedStyle = '' }
          if (item.category && shop.filter && item.category.includes(shop.filter)) {
            return <button key={i} className={`w-full flex justify-center items-center flex-col cursor-pointer ${style} ${clickedStyle}`} onClick={() => { trigger(item) }}>
              <img className={shop.style} src={item?.displayIcon} alt="" />
              <div className="absolute left-0 bottom-0 m-5 md:m-1 xl:m-5">
                <p className={`${textstyle}`}>{item?.displayName}</p>
                <p className={`${textstyle}`}>{cost}</p>
              </div>
              <div className="absolute w-full h-24 border -bottom-24 hidden z-10 bg-red-400"></div>
            </button >

          } else {
            if (item.shopData?.category === 'Armor') {
              return <div key={i} className={`w-full flex justify-center items-center flex-col ${style}`}>
                <img className="" src={item?.displayIcon} alt="" />
                <div className="absolute left-0 bottom-0 m-5">
                  <p className={`${textstyle}`}>{item?.displayName}</p>
                  <p className={`${textstyle}`}>{cost}</p>
                </div>
              </div>
            } else { }
          }
        }
        )
      }
    </div >
  )
}
