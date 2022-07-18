import React from 'react'
import './dropDown.css'

const DropDown = () => {


    return (

        <ul class="menu">
            <li>
                <a href="#"><span class="material-symbols-outlined">
                    visibility
                </span></a>

                <ul className='dropdown-options'>
                    <li><a href="/projects">Workshop</a></li>
                    <li><a href="/aboutme">About</a></li>
                    <li><a href="#">Media</a></li>
                </ul>
            </li>
        </ul>



    )
}

export default DropDown