import React from 'react'
import './dropDown.css'

const DropDown = () => {

    const goHome = () => navigate('/')


    return (

        <ul class="menu">
            <li>
                <a onClick={goHome} href="/#/"><span class="material-symbols-outlined">
                    visibility
                </span></a>

                <ul className='dropdown-options'>
                    <li><a href="/#/workshop">Workshop</a></li>
                    <li><a href="/#/about">About</a></li>
                    <li><a href="/#/media">Media</a></li>
                </ul>
            </li>
        </ul>



    )
}

export default DropDown