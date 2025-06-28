import React from 'react'
import './style/mediaAndTech.css'
import Footer from '../footer/Footer';
const MediaAndTech = () => {
    return (
    <>   
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
                        <i class="fa-brands fa-wordpress"></i>
                    </div>
                </div>

                <div className='tech-card'>
                    <div className='icons-card-container'>
                        <i class="fa-brands fa-github"></i>
                    </div>
                </div>

                <div className='media-card'>
                    <div className='icons-media-container'>
                        <a href='https://www.linkedin.com/in/diego-cano-aa5183216/' >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href='https://www.facebook.com/diego.cano.313/' >
                        <i className="fa-brands fa-facebook-square"></i>
                        </a>
                        <a href='https://www.instagram.com/_diego.cano_/' >
                        <i className="fa-brands fa-instagram"></i>
                        </a>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    </> 
    );

};

export default MediaAndTech