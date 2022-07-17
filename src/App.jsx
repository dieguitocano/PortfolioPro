
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeScreen from './components/Home/HomeScreen'
import Particle from './components/Particle'
import Projects from './components/Projects.jsx/Projects'




function App() {





  return (
    <div className="App">

      <Particle />



      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>



    </div>
  )
}

export default App
