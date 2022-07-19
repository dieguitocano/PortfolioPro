import React from 'react'
import './style/mediaAndTech.css'

const MediaAndTech = () => {
    return (

        <div className='media-tech-container'>
            <div className='media-tech-intro'>
                <h1>Media & Tech</h1>
            </div>
            <div className='cards-media-container'>
                <div className='tech-card'>


                    <div className='icons-card-container'>
                        <i class="fa-brands fa-react"></i>
                    </div>


                </div>
                <div className='tech-card'>
                    <div className='icons-card-container'>
                        <i class="fa-brands fa-html5"></i>
                    </div>
                </div>

                <div className='tech-card'>
                    <div className='icons-card-container'>
                        <i class="fa-brands fa-css3-alt"></i>
                    </div>
                </div>

                <div className='tech-card'>
                    <div className='icons-card-container'>
                        <i class="fa-brands fa-js-square"></i>
                    </div>
                </div>

                <div className='tech-card'>
                    <div className='icons-card-container'>
                        <i class="fa-brands fa-git-alt"></i>
                    </div>
                </div>

                <div className='tech-card'>
                    <div className='icons-card-container'>
                        <i class="fa-brands fa-github"></i>
                    </div>
                </div>

                <div className='media-card'>
                    <div className='icons-media-container'>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-facebook-square"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                </div>

            </div>
        </div>

    )

}

export default MediaAndTech