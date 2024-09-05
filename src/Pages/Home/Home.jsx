import ResposiveNav from "../../layout/ResposiveNav"
import styles from "../../Assets/Data/Styles.module.css"
import ValoLogo from '../../Assets/Imgs/valo-word-wh.png'
import Agents from '../../Assets/Imgs/agents.png'
import Btn from '../../components/Button/Btn'
import Footer from "../../layout/Footer"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { Link } from "react-router-dom"



export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={`${styles.bgBody} h-full w-full overflow-hidden bg-center bg-cover bg-fixed bg-blend-overlay flex flex-col`}>
      <ResposiveNav />
      <div className={`${styles.bgGif} 
      lg:bg-repeat lg:bg-auto lg:bg-top
      bg-no-repeat bg-cover bg-center h-[33rem] w-screen bg-slate-400 flex flex-col gap-8 justify-center items-center shadow-lg`
      }>
        <img src={ValoLogo} className="w-3/5" alt="" />
        <p className="text-white font-bold ">A 5v5 character-based tactical shooter</p>
        <Btn title='Play Now' class='text-white hover:text-black font-bold hover:bg-LightG w-40 h-12 bg-SecLight ' divclass='h-16 w-48' />
      </div>

      <div className="fixed right-0  bottom-0 z-50 m-2">
        <Btn display='!block' href='//api.whatsapp.com/send?phone=201203353502&text=Hi' target='_blank' title='Chat with us'
          class='text-white group-hover:text-black font-bold group-hover:bg-LightG w-24 h-12 bg-primLight ' divclass='h-16 w-28' />
      </div>

      {/* --------Summ--------- */}

      <div className="h-80 flex my-10 w-full justify-center items-center flex-col-reverse md:flex-row">
        <p className=" md:border-SecLight md:px-10 md:border-r-2 md:text-xl lg:text-2xl lg:text-center
        w-3/4 h-full flex items-center px-0 border-0 text-justify  ">
          Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows.
          Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7,
          2020, followed by a release on June 2, 2020. The development of the game started in 2014. Valorant takes inspiration from
          the Counter-Strike series, borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving.
        </p>
        <div className="md:h-full md:-rotate-90 md:w-1/4 md:text-center xl:rotate-0
        font-bold text-4xl w-full h-fit rotate-0 flex items-center justify-center md:text-6xl ">
          <p className="">What IS VALORANT </p>
        </div>
      </div>

      {/* -------Gameplay---------- */}

      <div className={`${styles.bgVideo} md:flex-row flex-col flex justify-center items-center text-white w-full h-fit`}>
        < div className="md:gap-5 lg:justify-between flex flex-col w-2/5 lg:h-[20rem] xl:h-[30rem] items-center py-4  ">
          <p className="font-bold text-5xl" data-aos='fade-up' data-aos-duration='600' data-aos-offset='300'>Gameplay</p>
          <div className="flex flex-col h-fit">
            <p className="hidden lg:block text-center h-full p-5 ">
              Blend your style and experience on a global, competitive stage.
              You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities.
              And, with one life per-round, you'll need to think faster than your opponent if you want to survive.
              Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
            </p>
            <div className="hidden md:flex justify-center items-center" >
              <Btn title='Learn more' class=' md:block text-white hover:text-black font-bold hover:bg-LightG w-40 h-12 bg-primLight' divclass='h-16 w-48' />
            </div>
          </div>
        </div>
        <div className=" md:w-3/5 p-2 xsm:flex xsm:flex-col xsm:items-center">
          <video autoPlay preload="true" muted loop playsInline controls
            src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/f6ccf20dfe3f6a24ea9216bb8afaaa66740c715d.mp4">
          </video>
          <p className="block lg:hidden text-justify h-full p-5">
            Blend your style and experience on a global, competitive stage.
            You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities.
            And, with one life per-round, you'll need to think faster than your opponent if you want to survive.
            Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
          </p>
          <div className="md:hidden">
            <Btn title='Learn more' class='text-white hover:text-black font-bold hover:bg-LightG w-40 h-12 bg-primLight' divclass='h-16 w-48' />
          </div>
        </div>
      </div >

      {/* -------Agents---------- */}

      <div div className={`${styles.bgAgents} flex flex-col items-center md:flex-row md:items-start bg-center bg-cover text-white h-fit md:h-[30rem] z-20`}>
        <div className="xsm:hidden xsm:w-5/6 md:block lg:w-4/6 xl:w-5/6 flex justify-center items-center relative">
          <div className="m-24 h-[40rem] w-[0.1rem] bg-slate-200 z-30" data-aos='fade-right' data-aos-offset='500' data-aos-duration='500'></div>
          <img className="md:absolute lg:top-0 md:top-12 xl:right-20" src={Agents} alt=""
            data-aos='fade-right' data-aos-duration='1000' data-aos-offset='300' />
        </div>
        <div className="md:w-2/6 flex flex-col w-full justify-center items-center gap-5 py-3 md:py-10 ">
          <p className="font-bold  text-5xl" data-aos='fade-up' data-aos-duration='600' data-aos-offset='300'>Agents</p>
          <p className="text-center h-full px-5 md:p-5">
            Blend your style and experience on a global, competitive stage.
            You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities.
            And, with one life per-round, you'll need to think faster than your opponent if you want to survive.
            Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
          </p>
          <div className="md:hidden w-5/6 flex justify-center items-center relative" data-aos='fade-left' data-aos-offset='300' data-aos-duration='300'>
            <img className="" src={Agents} alt="" />
          </div>
          <Link to='agents'>
            <Btn title='Learn more' class='text-black hover:text-white font-bold xsm:hover:bg-SecDark md:hover:bg-SecLight w-40 h-12 bg-LightG' divclass='h-16 w-48' />
          </Link>
        </div>
      </div >

      {/* ---------Gear-------- */}

      < div >
        <div className={`${styles.bgGear} h-96 md:h-[50rem] bg-center bg-contain md:bg-cover flex flex-col justify-between z-0 relative overflow-hidden`}>
          <p className="font-bold p-10 lg:pt-28 text-8xl xsm:text-7xl" data-aos='fade-right' data-aos-duration='600' data-aos-easing="ease-in-sine">Gear</p>
          <div className="m-96 mt-20 absolute h-[40rem] w-[0.1rem] bg-primDark" data-aos='fade-right' data-aos-offset='500' data-aos-duration='500'></div>
          <div className="m-52 mt-[30rem] absolute w-[40rem] h-[1rem] bg-primDark" data-aos='fade-right' data-aos-offset='300' data-aos-duration='500'></div>
          <div className="p-10 self-end" >
            <Link to='gear'>
              <Btn title='Learn more' class='text-white font-bold hover:bg-SecDark w-40 h-12 bg-primLight' divclass='h-16 w-48' border='border-black' />
            </Link>
          </div>
        </div>
      </div >

      {/* --------Maps--------- */}

      < div className="flex flex-col h-[40rem] relative" >
        <div className="flex flex-col z-10 w-full justify-center items-center gap-5 py-10 ">
          <p className="font-bold  text-7xl" data-aos='fade-up' data-aos-duration='1000' data-aos-easing='ease-in'>Maps</p>
          <div className="h-56 xl:h-44 "></div>
          <div className="flex flex-col items-center h-fit w-full md:items-end">
            <div className=" flex flex-col items-center">
              <p className="text-justify bg-gradient-to-r from-white md:bg-none md:w-96 h-full p-5 xl:text-2xl">
                Each match of VALORANT takes place on a map. Four maps were available at launch,
                and a six-month cycle is expected for the release of new maps.
                There are currently thirteen playable maps in VALORANT overall,
                with an additional one for practice and training new players.
              </p>
              <Link to='maps'>
                <Btn title='Learn more' class='text-white font-bold hover:bg-SecDark w-40 h-12 bg-primLight' divclass='h-16 w-48' border='border-black' />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full  flex items-end justify-start">
          <div className={`${styles.bgMap} w-full h-full bg-no-repeat bg-top bg-cover`}></div>
        </div>
      </div >

      <Footer />

    </div >
  )
}
