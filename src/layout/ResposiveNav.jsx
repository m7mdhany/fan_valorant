import NavBar from "../layout/NavBar"
import SideNav from "../layout/SideNav"

export default function ResposiveNav() {
  return (
    <div className=" sticky z-[100]">
      <div className="xsm:block lg:hidden" >
        <SideNav />
      </div>
      <div className="lg:block xsm:hidden">
        <NavBar />
      </div>
    </div>
  )
}
