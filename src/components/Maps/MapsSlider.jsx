import { useSelector, useDispatch } from "react-redux"
import { change_map } from "../../redux/fetcherSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { change_mapSlider } from '../../redux/fetcherSlice'
export default function MapsSlider() {
  let style = ''
  let style2 = ''
  const { maps, map, mapSlider } = useSelector(store => store.fetcherSlice)
  const dispatch = useDispatch()
  let deathmatch = ['District', 'Kasbah', 'Drift', 'Piazza'],
    deathname = ''

  const changer = (i) => {
    dispatch(change_map(i))
    if (mapSlider == 'left-0') {
      dispatch(change_mapSlider('-left-[40rem]'))
    } else {
      dispatch(change_mapSlider('left-0'))
    }
  }

  if (maps === null) {
    return <div className="text-white text-5xl border h-96 p-5">loading...</div>
  } else { }

  return (<>

    <div className="h-fit border-y-4 border-red-500 overflow-hidden">
      <Swiper
        direction={'vertical'}
        slidesPerView={6}
        spaceBetween={5}
        mousewheel={true}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 5,
          },
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper h-[30rem] lg:h-[40rem]"
      >
        {
          maps.map((ss, i) => {
            if (map?.displayName === ss.displayName) { style = '!bg-slate-500' } else { style = '' }
            if (deathmatch.includes(ss.displayName) === true) { style2 = ''; deathname = 'DEATHMATCH' } else { style2 = ''; deathname = '' }
            if (ss.displayName === 'Basic Training' || ss.mapUrl === '/Game/Maps/PovegliaV2/RangeV2') { } else {
              return <SwiperSlide key={i} className="w-full"> <button onClick={() => { changer(ss) }}
                className={`w-full mt-1 text-white !flex justify-between gap-2 border py-2 pr-2 bg-slate-800 hover:bg-slate-500  ${style}`}>
                <div className="m-auto text-2xl z-10"> {ss.displayName} </div>
                <div className={`${style2} animate-bounce   absolute right-0 h-fit w-3/5 bg-opacity-50  flex flex-col justify-center items-center mt-2`}>
                  <span className=" text-xl text-yellow-500 font-bold ">{deathname}</span>
                  <span className=" text-xl text-black font-bold -mt-8 ">{deathname}</span>
                </div>
                <img className="h-12" src={ss.listViewIcon} alt="" />
              </button>
              </SwiperSlide>
            }
          }
          )
        }
      </Swiper>
    </div >
  </>
  )
}

