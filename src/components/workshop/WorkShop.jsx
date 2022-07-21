import React from 'react'
import './style/workShop.css'
import quotes from '../resources/Screenshot from 2022-07-18 11-40-44.png'
import store from '../resources/projectoTiendaGrupo.png'
import weather from '../resources/Screenshot from 2022-06-06 14-51-07.png'
import pokemon from '../resources/Screenshot from 2022-07-03 19-29-10.png'
import rick from '../resources/Screenshot from 2022-06-14 00-34-28.png'
import hillson from '../resources/Screenshot from 2022-07-03 20-19-25.png'

const WorkShop = () => {



  return (
    <div className='projects-container'>
      <div className='workshop-intro'>
        <h1>Workshop </h1>
      </div>
      <div className='cards-container'>
        <div className='projects-card'>
          <img className="project-picture" src={pokemon} alt=""></img>

          <div className='letras-card-container'>
            <h2>Pokedex</h2>
            <p>Project based on React, dynamic card system with info consumed from Api, Protected Route</p>

          </div>

        </div>
        <div className='projects-card'>
          <img className="project-picture" src={rick} alt=""></img>

          <div className='letras-card-container'>
            <h2>Rick & Morty</h2>
            <p>Project based on React, dynamic card system in store with info consumed from Api, search features</p>

          </div>

        </div>
        <div className='projects-card'>
          <img className="project-picture" src={weather} alt=""></img>

          <div className='letras-card-container'>
            <h2>Weather App</h2>
            <p>Project based on React, dynamic card system in store with info consumed from Api, using location of device</p>

          </div>

        </div>
        <div className='projects-card'>
          <img className="project-picture" src={hillson} alt=""></img>

          <div className='letras-card-container'>
            <h2>Hillson Adventure</h2>
            <p>Project based on React, dynamic card system with info consumed from Api, add, upgrade, delete.</p>

          </div>

        </div>
        <div className='projects-card'>
          <img className="project-picture" src={store} alt=""></img>

          <div className='letras-card-container'>
            <h2>Store</h2>
            <p>Project based on React, dynamic card system in with info consumed from Api, add, upgrade, delete, store features</p>

          </div>

        </div>
        <div className='projects-card'>
          <img className="project-picture" src={quotes} alt=""></img>

          <div className='letras-card-container'>
            <h2>Quotes</h2>
            <p>Project based on React, dynamic card system in store with info consumed from Api, random Background and Quotes</p>

          </div>

        </div>
      </div>
      
      
    </div>

  )
}

export default WorkShop