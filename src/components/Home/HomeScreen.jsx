import React from 'react'
import DropDown from '../dropdown-menu/DropDown'
import Particle from '../Particle'
import './styles/homeScreen.css'





const HomeScreen = () => {




    return (
        <>
            <div className='diego-box'>
                <Particle />
                <DropDown />
                <div className='diego-cano-container'>
                    <div className='both-lyrics'>
                        <h1 className='diego-cano-name'>Diego Cano</h1>
                        <h2 className='frontend'>frontendDesign </h2>
                    </div>
                </div>
            </div>


        </>

    )
}

export default HomeScreen