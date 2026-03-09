import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"


function App() {

  return (
    <>
     <Navbar/>
     <div className="max-w-7xl max-auto pt-20 px-20">
      <HeroSection />
     </div>
     
    </>
  )
}

export default App
