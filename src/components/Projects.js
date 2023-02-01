import React from 'react';
import './Projects.css';
import ImageCard from './ImageCard';
import places from "./static/places";
/* import useWIndowPosition from '../hook/useWIndowPosition'; */

const Projects = () => {
  /* const checked = useWIndowPosition('header'); */
  return (
    <div className='root'>
      <ImageCard place={places[0]}/>
    </div>
  )
}

export default Projects;
