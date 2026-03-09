import Workflow from "./Components/Workflow"
import FeatureSection from "./Components/FeatureSection"
import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"


function App() {

  return (
    <>
     <Navbar/>
     <div className="max-w-7xl max-auto pt-20 px-20">
      <HeroSection />
      <FeatureSection />
      <Workflow />
     </div>
     
    </>
  )
}

export default App
