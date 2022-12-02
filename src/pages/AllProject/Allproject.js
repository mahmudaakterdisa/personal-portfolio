import React from 'react';
import { Link } from 'react-router-dom';
import './Allproject.css'

const Allproject = ({ project }) => {
    const { project_name, project_description, project_image, Project_link } = project;
    return (

        <div className='allproject-container'>
            <div className='details-container'>
                <h1>{project_name}</h1>
                <p>{project_description}</p>
                <a href={Project_link} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-active btn-secondary mr-3">project Link</button>
                </a>
                <a href={Project_link} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-active btn-secondary ">Explore Github</button>
                </a>

            </div>

            <div className='projectimage-container'>
                <img src={project_image} alt="project" />
            </div>
        </div>


    );
};

export default Allproject;