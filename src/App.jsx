
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutMe from './components/aboutme/AboutMe'
import HomeScreen from './components/Home/HomeScreen'
import Particle from './components/Particle'
import Projects from './components/Projects.jsx/Projects'




function App() {





  return (
    <div className="App">

      



      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/aboutme' element={<AboutMe />} />
      </Routes>



    </div>
  )
}

export default App
