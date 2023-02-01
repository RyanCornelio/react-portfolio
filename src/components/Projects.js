import React from 'react';
import './Projects.css';
import ImageCard from './ImageCard';
import places from "./static/places";
<<<<<<< HEAD
/* import useWIndowPosition from '../hook/useWIndowPosition'; */
=======
import useWIndowPosition from '../hook/useWIndowPosition';
>>>>>>> ec47a206d4ec7bbc4aaaed26520df1e74282bbbb

const Projects = () => {
  /* const checked = useWIndowPosition('header'); */
  return (
    <div className='root'>
<<<<<<< HEAD
      <ImageCard place={places[0]}/>
=======
      <ImageCard place={places[0]} xs={{ }}/>
>>>>>>> ec47a206d4ec7bbc4aaaed26520df1e74282bbbb
    </div>
  )
}

export default Projects;
