import MapsSlider from "../../components/Maps/MapsSlider"
import MapsViewer from "../../components/Maps/MapsViewer"
import ResposiveNav from "../../layout/ResposiveNav"
import bg from "../../Assets/Imgs/bg-lines.png"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { change_mapSlider } from '../../redux/fetcherSlice'

export default function Maps() {
  const { map, mapSlider } = useSelector(store => store.fetcherSlice)
  const [name, setName] = useState('Hide list')
  const dispatch = useDispatch()

  const show = () => {
    if (mapSlider === 'left-0') {
      dispatch(change_mapSlider('-left-[40rem]'))
    } else if (mapSlider === '-left-[40rem]') {
      dispatch(change_mapSlider('left-0'))
    }
    if (name === 'Show list') {
      setName('Hide list')
    } else {
      setName('Show list')
    }
  }
  useEffect(() => {
    if (mapSlider === 'left-0') {
      setName('Hide list')
    } else {
      setName('Show list')
    }
  }, [mapSlider])


  return (
    <div className={`relative bg-center bg-cover bg-no-repeat h-screen max-h-screen min-h-screen w-full`}
      style={{ background: `url(${map?.premierBackgroundImage}) center, url(${bg})` }}
    >
      <ResposiveNav />
      <div className={`absolute overflow-hidden w-screen md:w-96 top-0 ${mapSlider} mt-20 z-40 flex items-center justify-center h-4/5 `}>
        <MapsSlider />
      </div>
      {/* <div className={`absolute pt-52 lg:fixed overflow-hidden w-screen md:w-96 top-0 ${slider} h-4/5 mt-20 z-40`}>
        <MapsSlider />
      </div> */}
      <button className="z-50 fixed bottom-0 left-0 text-white bg-red-500 m-5 p-2 lg:m-16 lg:px-5 lg:text-3xl rounded" onClick={show}>{name}</button>
      <p className="text-white text-5xl pl-5">Maps</p>
      <div className=" h-4/5">
        <MapsViewer />
      </div>
      {/* <div className="bg-red-500 w-full h-1/2"></div> */}
    </div>
  )
}
// stylse={{ background: `url(${bg}, url(${map?.premierBackgroundImage})` }}
// , url(${map?.premierBackgroundImage})