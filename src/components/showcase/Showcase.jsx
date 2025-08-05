import React from "react";
import "./style/showcase.css";
import quotes from "../resources/Screenshot from 2022-07-18 11-40-44.png";
import store from "../resources/projectoTiendaGrupo.png";
import weather from "../resources/Screenshot from 2022-06-06 14-51-07.png";
import pokemon from "../resources/Screenshot from 2022-07-03 19-29-10.png";
import rick from "../resources/Screenshot from 2022-06-14 00-34-28.png";
import hillson from "../resources/Screenshot from 2022-07-03 20-19-25.png";
import Loader from "../loader/Loader";
import techub from "../resources/Screenshot from 2022-07-26 18-54-36.png";
import raf from "../resources/raf.png";
import Footer from "../footer/Footer";


const Showcase = () => {
  return (
    <div className="projects-container">
      <div className="showcase-intro">
        <h1>Showcase</h1>
      </div>

      <div className="cards-container">
        <div className="projects-card">
          <a href="https://soft-centaur-121b7a.netlify.app/">
            <img className="project-picture" src={raf} alt=""></img>
          </a>

          <div className="letras-card-container">
            <h2>RAF Antioquia</h2>
            <p>
              Responsive website built with WordPress, featuring customizable
              content sections.
            </p>
          </div>
        </div>
        <div className="projects-card">
          <a href="https://pokedex-pre-last.netlify.app/">
            <img className="project-picture" src={pokemon} alt=""></img>
          </a>

          <div className="letras-card-container">
            <h2>Pokedex</h2>
            <p>
              Project based on React, dynamic card system with info consumed
              from Api, Routes, search features
            </p>
          </div>
        </div>
        <div className="projects-card">
          <a href="https://rick-mortyreact.netlify.app/">
            <img className="project-picture" src={rick} alt=""></img>
          </a>

          <div className="letras-card-container">
            <h2>Rick & Morty</h2>
            <p>
              Project based on React, dynamic card system in store with info
              consumed from Api, search features
            </p>
          </div>
        </div>

        <div className="projects-card">
          <a href="https://weather-appdone.netlify.app/">
            <img className="project-picture" src={weather} alt=""></img>
          </a>

          <div className="letras-card-container">
            <h2>Weather App</h2>
            <p>
              Project based on React, dynamic card system with info consumed
              from Api, using location of device
            </p>
          </div>
        </div>
        <div className="projects-card">
          <a href="https://hillsonadv-practice.netlify.app/">
            <img className="project-picture" src={hillson} alt=""></img>
          </a>

          <div className="letras-card-container">
            <h2>Hillson Adventure</h2>
            <p>
              Project based on React, dynamic card system with info consumed
              from Api, add, upgrade, delete.
            </p>
          </div>
        </div>
        <div className="projects-card">
          <img className="project-picture" src={techub} alt=""></img>

          <div className="letras-card-container">
            <h2>Tech Hub</h2>
            <p>
              Project based on React, dynamic card system with info consumed
              from Api, add, upgrade, delete, store features
            </p>
          </div>
        </div>
        <div className="projects-card">
          <a href="https://store-training1.netlify.app/">
            <img className="project-picture" src={store} alt=""></img>
          </a>

          <div className="letras-card-container">
            <h2>Store</h2>
            <p>
              Project based on React, dynamic card system with info consumed
              from Api, add, upgrade, delete, store features
            </p>
          </div>
        </div>
        <div className="projects-card">
          <a href="https://changing-quotes.netlify.app/">
            <img className="project-picture" src={quotes} alt=""></img>
          </a>

          <div className="letras-card-container">
            <h2>Quotes</h2>
            <p>
              Project based on React, dynamic card system with info consumed
              from Api, random Background and Quotes
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Showcase;
