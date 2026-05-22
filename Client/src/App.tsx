import './App.css'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Apropos from './Pages/about'
import Contact from './Pages/Contact'
import Realisations from './Pages/Realisations'
import Services from './Pages/Services'
import Stack from './Pages/Stack'



function App() {

  return (
   <div>
      <Navbar/>
      <Hero />
      <Stack />
      <Realisations/>
      <Apropos/>
      <Services />
      <Contact />
      <Footer/>
   </div>
  )
}

export default App
