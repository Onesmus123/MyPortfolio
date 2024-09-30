import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    MovieAppDesc : "A React application designed for managing and viewing favorite Kenyan movies or TV shows. Features include adding new movies, filtering by title and rating, and displaying movie details with React Hooks for efficient state management.",
    MovieAppGithub : "https://github.com/Onesmus123/React-Hooks-Checkpoint-.git",
    MovieAppWebsite : "https://main--movieappkenya.netlify.app/",

    WeatherAppDesc : "The WeatherApp is a simple and intuitive app that provides real-time weather updates for any location. Users can easily search for a city to view current conditions, forecasts, and key metrics like temperature and humidity. It offers accurate information, making it a handy resource for everyday planning.",
    WeatherAppGithub : "https://github.com/Onesmus123/Weather-App.git",
    WeatherAppWebsite : "https://main--weatherappkenya.netlify.app/",

    FIFAPlayersDesc:"This application showcases detailed profiles of some of the world's best football players. Built with React and React-Bootstrap, it offers an intuitive and visually appealing way to explore player stats and information.",
    FIFAPlayersGithub:"https://github.com/Onesmus123/React-Project-2.git",
    
    TaskAppDesc:"A task management application using the MERN stack that allows users to securely manage, track, and organize their tasks with personalized lists and token-based authentication.",
    TaskAppGithub:"https://github.com/Onesmus123/Task-List-App.git",
    TaskAppWebsite:"https://task-list-app-copy-frontend.onrender.com/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox