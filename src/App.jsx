
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import DropDown from './components/dropdown-menu/DropDown'
import Footer from './components/footer/Footer'
import Loader from './components/loader/Loader'
import Particle from './components/Particle'

const Showcase = lazy(() => import('./components/showcase/Showcase'))
const AboutMe = lazy(() => import('./components/aboutme/AboutMe'))
const MediaAndTech = lazy(() => import('./components/mediatech/MediaAndTech'))
const HomeScreen = lazy(() => import('./components/Home/HomeScreen'))


function App() {
  return (
    <>
      <div className="App">
        <DropDown />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/showcase' element={<Showcase />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/media-tech' element={<MediaAndTech />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  )
}

export default App
