import './App.scss'
import { HeroSection } from './components/HeroSection/HeroSection'
import { OfferSection } from './components/OfferSection/OfferSection'
import { InfoSection } from './components/InfoSection/InfoSection'

function App() {
  return (
    <div className='page'>
      <HeroSection />
      <OfferSection />
      <InfoSection />
    </div>
  )
}

export default App
