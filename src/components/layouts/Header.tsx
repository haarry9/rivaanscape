import { NavBar } from '../ui/tubelight-navbar'
import ThemeSwitch from '../shared/ThemeSwitch'

const Header = () => {
  return (
    <>
      {/* Theme Switch - positioned absolutely on the right */}
      <div className="fixed right-4 top-4 z-40 md:right-10 md:top-6">
        <ThemeSwitch />
      </div>

      {/* Tubelight Navbar */}
      <NavBar />
    </>
  )
}

export default Header
