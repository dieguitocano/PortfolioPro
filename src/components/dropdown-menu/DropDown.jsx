import React from 'react'
import './dropDown.css'

const DropDown = () => {

   
    return (

        <ul class="menu">
            <li>
                <a href="#">Parent Link</a>

                <ul>
                    <li><a href="#">Workshop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Media</a></li>
                </ul>
            </li>
        </ul>



    )
}

export default DropDown