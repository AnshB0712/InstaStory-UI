import {Stories} from './components/Stories'
import {HeroSection} from './components/HeroSection'
import { data } from './data'

function App() {
  return (
  <>
  <Stories stories={data}/>
  <HeroSection />
  </>
  )
}

export default App
