import { useSelector, useDispatch } from "react-redux";
import { change_map } from "../../redux/fetcherSlice";
import { useEffect } from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';

export default function MapsViewer() {
  const { map } = useSelector(store => store.fetcherSlice)

  if (map === null) {
    return <div className=" text-white m-auto text-5xl text-center">Select map</div>
  } else {
  }


  return (
    <div className="h-full flex flex-col">
      <p className=" text-white text-5xl text-center ">{map.displayName}</p>
      <Swiper

        slidesPerView={1}
        spaceBetween={30}
        mousewheel={false}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwipe w-full flex-1 "
      >
        <SwiperSlide className="!flex items-center">
          <img className="max-h-full m-auto" src={map?.splash} alt="" />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <img className="bg-white bg-opacity-25 max-h-full m-auto" src={map?.displayIcon} alt="" />
        </SwiperSlide>
      </Swiper>
      <p className="text-white text-center text-3xl ">Map description</p>
    </div >




  )
}
