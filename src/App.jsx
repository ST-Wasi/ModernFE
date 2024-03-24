import About from "./Components/About"
import Cards from "./Components/Cards"
import Eyes from "./Components/Eyes"
import Featured from "./Components/Featured"
import LandingPage from "./Components/LandingPage"
import Marquee from "./Components/Marquee"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
    </div>
  )
}

export default App
