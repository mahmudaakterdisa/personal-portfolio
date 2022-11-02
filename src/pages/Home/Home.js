import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>

            <div className='image-container'>
                <img src="https://s30876.pcdn.co/wp-content/uploads/Writing-a-Personal-Profile-for-your-CV-1170x630.jpg.optimal.jpg" alt="myphoto" />
            </div>
            <div className='about-container'>
                <h1>Hello</h1>
                <h3>A Bit About Me</h3>
                <p>
                    I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
                <div className='button-container'>
                    <Link to='/resume'>
                        <button onClick="resume" className='resume-btn'>Resume</button>
                    </Link>

                    <Link to='/projects'>
                        <button className='project-btn'>Projects</button>
                    </Link>
                    <Link to='/contact'>
                        <button className='contacts-btn'>contacts</button>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default Home;