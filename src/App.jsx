
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutMe from './components/aboutme/AboutMe'
import DropDown from './components/dropdown-menu/DropDown'
import Footer from './components/footer/Footer'
import HomeScreen from './components/Home/HomeScreen'
import MediaAndTech from './components/mediatech/MediaAndTech'
import Particle from './components/Particle'
import WorkShop from './components/workshop/WorkShop'





function App() {





  return (
    <>
      <div className="App">
        <DropDown />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/workshop' element={<WorkShop />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/media-tech' element={<MediaAndTech />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
