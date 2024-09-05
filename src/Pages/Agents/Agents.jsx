import styles from "../../Assets/Data/Styles.module.css"
import { useEffect, useRef, useState } from "react";
import ResposiveNav from "../../layout/ResposiveNav"
import Card from "../../components/Agents/Card";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Preloader from "../../components/Preloader";
import { useSelector } from "react-redux";
import { Input } from "../../components/Input/Input";

export default function Agents() {
  const [loader, setLoader] = useState(0);
  const [card, setCard] = useState('')
  const [icon, setIcon] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState([''])
  const [roles, setRoles] = useState([])
  const [abb, setAbb] = useState('')
  const [search, setSearch] = useState('Name')
  const [navigating, setNavigating] = useState(false)
  const { agents } = useSelector(store => store.fetcherSlice)
  const navigate = useNavigate()
  let style = 'w-full text-white md:text-2xl bg-SecDark hover:bg-slate-400 h-fit px-5 rounded-md',
    style1 = '', style2 = '', style3 = '', due = "", int = "", cont = "", sent = "", border = '',
    style4 = 'border-SecDark border-4 h-fit rounded-full cursor-pointer',
    styleImg = 'rounded-full border-b-black border-t-0 border-x-0 border-2 bg-SecDark',
    style6 = 'w-full h-full bg-slate-200 rounded-md text-black text-xl text-center md:text-2xl',
    styleRole = 'hidden',
    Duelist = 'https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png',
    Initiator = 'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png',
    Sentinel = 'https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png',
    Controller = 'https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png'

  useEffect(() => {
    //force loading
    setTimeout(() => { setLoader(1) }, 500)
  }, []);


  // this code to give time for touch users to see card effect

  // const timeoutRef = useRef(null);
  // const navigate_agent = (agent_link) => {
  //   if (timeoutRef.current) return;
  //   timeoutRef.current = setTimeout(
  //     () => {
  //       navigate(`/home/agents/${agent_link}`);
  //       clearTimeout(timeoutRef.current);
  //       timeoutRef.current = null;
  //     }, 1000);
  // };

  // another form
  const navigate_agent = (agent_link) => {
    if (navigating) return;
    setNavigating(true);
    setTimeout(() => {
      navigate(`/home/agents/${agent_link}`);
      setNavigating(false);
    }, 500);
  };


  const switcher = () => {
    if (card === '') {
      setCard('!block')
      setIcon('hidden')
    } else if (card === '!block') {
      setCard('')
      setIcon('block')
    }
  };

  // filter
  const searchRef = useRef(null)
  const roleRef = useRef(null)
  const handleSearch = (e) => {
    if (e.value == 'Name' || e.value == 'Role' || e.value == 'Abilities') {
      setSearch(e.value)
      setName('')
      setRole([''])
      setAbb('')
      searchRef.current.value = ''
    } else {
      if (search === 'Name') {
        setName(e.value)
      } else if (search === 'Role') {
        //check when the right value sent
        if (e.alt) {
          if (!searchRef.current.value.includes(e.alt)) {
            searchRef.current.value += e.alt + ', '
          } else {
            searchRef.current.value = searchRef.current.value.replace(e.alt + ', ', '')
          }
        }
        // remove '' value and dont repeat values
        if (role.includes('')) { setRole([e.alt]) } else {
          if (!role.includes(e.alt)) {
            setRole([...role, e.alt])
          } else {
            setRole([...role.filter(x => x !== e.alt)])
            if (role.length == 1) { setRole(['']) }
          }
        }
      } else if (search === 'Abilities') {
        setAbb(e.value)
      }
    }
  };

  // filter styles
  if (search === 'Name') {
    style1 = '!bg-SecLight';
  } else if (search === 'Role') {
    style2 = '!bg-SecLight mb-10';
    styleRole = 'flex'
    // setRoles([...roles])
  } else if (search === 'Abilities') {
    style3 = '!bg-SecLight';
  }
  if (role.includes('duelist')) { due = 'bg-red-500' }
  if (role.includes('initiator')) { int = 'bg-yellow-500' }
  if (role.includes('sentinel')) { sent = 'bg-blue-500' }
  if (role.includes('controller')) { cont = 'bg-green-500' }

  // page loading
  if (agents === null
    // || loader === 0
  ) {
    return <div>
      <div className={`${styles.agents_bg}  bg-fixed bg-center min-h-screen`}>
        <ResposiveNav />
        <div className="h-screen w-full flex justify-center items-center">
          <Preloader />
        </div>
      </div>
    </div>
  }

  return (
    <div className={`${styles.agents_bg}  bg-fixed bg-center min-h-screen pb-2 `}>
      <ResposiveNav />
      <div className={`h-fit xl:p-20 pt-20 text-center md:text-start`}>
        <h1 className=" md:ml-20 text-7xl font-bold text-white">AGENTS</h1>
        <button className="lg:hidden block md:ml-20 mb-5 m-auto border text-2xl px-2 rounded-sm bg-SecDark text-white" onClick={() => { switcher() }} >Switch Icons</button>
        <div className=" flex flex-col md:flex-row justify-betweens m-auto items-start gap-1 mb-5 w-5/6">
          <div className="flex md:w-fit h-fit bx-2 gap-2 w-full flex-1">
            <input id='search' type="search" ref={searchRef} className={`flex-1 text-white text-xl bg-SecDark px-2 outline-none flex items-center
            search-cancel:appearance-none search-cancel:w-4 search-cancel:h-4 search-cancel:bg-[url(https://picsum.photos/16/16)]
            `}
              placeholder='look for your agent' onChange={(e) => handleSearch(e.target)} />
            {/* <div className="flex-1 text-white text-xl bg-SecDark px-2 flex items-center gap-1 hidden">
              <p className={`${style6}`}>Duelist </p>
              <p className={`${style6}`}>Initiator </p>
              <p className={`${style6}`}>Sentinel </p>
              <p className={`${style6}`}>Controller </p>
            </div> */}
            <p className="text-white h-full flex items-center justify-center lg:text-2xl">Filtered by</p>
          </div>
          <div className="flex gap-1 justify-between items-start md:w-fit w-full ">
            <button value='Name' className={`${style} ${style1}`} onClick={(e) => { handleSearch(e.target) }} >Name</button>
            <div className="relative flex items-center justify-center  w-full h-fit">
              <button value='Role' ref={roleRef} className={`z-50 w-full h-full ${style} ${style2}`} onClick={(e) => { handleSearch(e.target) }}>Role</button>
              <div className={`bg-SecLight z-50 w-52 h-14 absolute top-5 md:top-7 mb-52 rounded-md flex gap-1 px-1 justify-center items-center py-2 ${styleRole}`}>
                <div className={`${style4}  `} onClick={(e) => { handleSearch(e.target) }}>
                  <img className={`${styleImg} border-b-red-500 ${due}`}
                    src={Duelist} alt="duelist" />
                </div>
                <div className={`${style4} `} onClick={(e) => { handleSearch(e.target) }}>
                  <img className={`${styleImg} border-b-yellow-500 ${int}`}
                    src={Initiator} alt="initiator" />
                </div>
                <div className={`${style4} `} onClick={(e) => { handleSearch(e.target) }}>
                  <img className={`${styleImg} border-b-blue-500 ${sent}`}
                    src={Sentinel} alt="sentinel" />
                </div>
                <div className={`${style4} `} onClick={(e) => { handleSearch(e.target) }}>
                  <img className={`${styleImg} border-b-green-500 ${cont}`}
                    src={Controller} alt="controller" />
                </div>
              </div>
            </div>
            <button value='Abilities' className={`${style} ${style3}`} onClick={(e) => { handleSearch(e.target) }}>Abilities</button>
          </div>
        </div>
        <div className="flex-wrap gap-4 justify-center items-center flex px-3 lg:px-0">
          {
            agents.map((agent, i) => {
              if (
                // check filter conditions
                agent.displayName.toLowerCase().includes(name.toLowerCase()) &&
                // agent.role.displayName.toLowerCase().includes(role) &&
                role.some(x => agent.role.displayName.toLowerCase().includes(x)) &&
                agent.abilities.filter(x => x.displayName.toLowerCase().includes(abb.toLowerCase())).length >= 1) {
                // add style depends on selected role
                // note keep space before border syntax
                if (search === 'Role') {
                  border = 'border border-b-0'
                  if (agent.role.displayName == 'Duelist') {
                    border += ' !border-red-500'
                  } else if (agent.role.displayName == 'Initiator') {
                    border += ' !border-yellow-500'
                  } else if (agent.role.displayName == 'Sentinel') {
                    border += ' !border-blue-500'
                  } else { border += ' !border-green-500' }
                }
                return <div key={i}>
                  <Link to={''} onClick={() => { navigate_agent(agent.displayName.toLowerCase().replace("/", "-")) }}>
                    <div className={` hidden lg:block  ${card}`}>
                      <Card border={border} title={agent.displayName} photo={agent.fullPortrait} bg={agent.background} color={agent.backgroundGradientColors[0]} />
                    </div>
                    <div className={`block lg:hidden hover:scale-150 transition-all duration-500 md:duration-200 ease-out ${icon} `}>
                      <img className={`${border} h-20 md:h-28 hover:!bg-[#${agent?.backgroundGradientColors[0]}] bg-[#] !bg-slate-400 border-slate-600 border-2 `} src={agent.displayIcon} alt="" />
                      <p className="text-white text-lg bg-slate-600 flex items-center justify-center h-5">{agent.displayName}</p>
                    </div>
                  </Link>
                </div>
              } else { }
            }
            )
          }
        </div>
      </div>
    </div>
  )
}
