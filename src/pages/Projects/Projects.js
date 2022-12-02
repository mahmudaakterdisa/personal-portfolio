import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allproject from '../AllProject/Allproject';
import './Projects.css'

const Projects = () => {
    const getprojectData = useLoaderData();
    return (
        <div className='project-container'>
            {
                getprojectData.map(project => <Allproject project={project}></Allproject>)
            }
        </div>
    );
};

export default Projects;