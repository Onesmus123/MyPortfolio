import React from 'react';
import ProjectBox from './ProjectBox';
import MovieAppImage from "../images/MovieAppImage.png"
import WeatherAppImage from "../images/WeatherAppImage.png";
import FIFAPlayersImage from "../images/FIFAPlayersImage.png"
import TaskAppImage from '../images/TaskAppImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WeatherAppImage} projectName="WeatherApp" />
        <ProjectBox projectPhoto={FIFAPlayersImage} projectName="FIFAPlayers" />
        <ProjectBox projectPhoto={MovieAppImage} projectName="MovieApp" />
        <ProjectBox projectPhoto={TaskAppImage} projectName="TaskApp" />
      </div>

    </div>
  )
}

export default Projects