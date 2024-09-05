import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { change_agent, change_desc } from '../../redux/fetcherSlice'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

export default function AllAgentsIcons() {
  const { agents, agent } = useSelector(store => store.fetcherSlice)
  const dispatch = useDispatch()
  let style = ''

  let changer = (i) => {
    dispatch(change_agent(agents.find((agents) => agents.displayName === i)))
    dispatch(change_desc(''))
  }

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 13,
    slidesToScroll: 5,
    initialSlide: 0,
    centerMode: true,
    infinite: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 4,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3
        }
      }
    ]
  };

  return (
    <div className={` my-2 mx-5`}>
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        mousewheel={true}
        loop={true}
        breakpoints={{
          500: {
            slidesPerView: 7,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 10,
            spaceBetween: 5,
          },
          764: {
            slidesPerView: 7,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 10,
            spaceBetween: 5,
          },
          1280: {
            slidesPerView: 14,
            spaceBetween: 5,
          },
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper "
      >
        {
          agents.map((data, i) => {
            if (agent.displayName === data.displayName) {
              style = 'border-red-700 border-2 bg-slate-400 !hover:border-red-700 '
            } else { style = '' }
            return <SwiperSlide>
              <Link key={i} to={`../home/agents/${data.displayName.toLowerCase().replace("/", "-")}`} className="!w-fit" onClick={() => changer(data.displayName)}>
                <div className={`${style} border-2 cursor-pointer hover:bg-SecDark hover:border-SecDark flex justify-center items-center w-fit`} >
                  <img className="md:h-24 h-10" src={data.displayIcon} alt="" />
                </div>
              </Link>
            </SwiperSlide>
          })
        }
      </Swiper>
      {/* <Slider {...settings}>
        {
          agents.map((data, i) => {
            if (agent.displayName === data.displayName) {
              style = 'border-red-700 border-2 bg-slate-400 !hover:border-red-700 '
            } else { style = '' }
            return <Link key={i} to={`../home/agents/${data.displayName.toLowerCase().replace("/", "-")}`} className="!w-fit" onClick={() => changer(data.displayName)}>
              <div className={`${style} border-2 cursor-pointer hover:bg-SecDark hover:border-SecDark flex justify-center items-center w-fit`} >
                <img className="md:h-24 h-10" src={data.displayIcon} alt="" />
              </div>
            </Link>
          })
        }
      </Slider > */}
    </div >
  )
}

// flex border gap-5 flex-wrap p-2 justify-center mt-2 lg:min-w-96 z-50