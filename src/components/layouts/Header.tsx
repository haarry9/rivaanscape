import { NavBar } from '../ui/tubelight-navbar'
import ThemeSwitch from '../shared/ThemeSwitch'

const Header = () => {
  return (
    <>
      {/* Theme Switch - positioned absolutely on the right */}
      <div className="fixed top-4 right-4 z-40 md:top-6 md:right-10">
        <ThemeSwitch />
      </div>
      
      {/* Tubelight Navbar */}
      <NavBar />
    </>
  )
}

export default Header
