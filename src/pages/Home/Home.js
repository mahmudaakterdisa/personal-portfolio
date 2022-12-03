import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>

            <div className='image-container'>
                <img src="https://img.freepik.com/free-photo/creative-inspirational-resource_23-2149144214.jpg?w=900&t=st=1670103727~exp=1670104327~hmac=56cb9262d10289f75e27fc8e0db4dca5a0c51ddb1b53ddb99eba7e180e3495e4" alt="myphoto" />
            </div>
            <div className='about-container'>
                <h1>Hello</h1>
                <h3>A Bit About <span className='text-fuchsia-500'><Typewriter words={['Me!', 'Developer', 'Me!', 'Developer', 'Me!']} loop={5} /></span></h3>
                {/* <Typewriter  /> */}
                <p>
                    I'm Mahmuda Akter Disa.I have created a variety of web pages. i am passionate about responsive websites and cutting-edge, pixel-perfect, gorgeous interfaces.
                </p>
                <div className='button-container'>
                    <Link to='/resume'>
                        <button onClick="resume" className='resume-btn bg-orange-500'>Resume</button>
                    </Link>

                    <Link to='/projects'>
                        <button className='project-btn bg-fuchsia-500'>Projects</button>
                    </Link>
                    <Link to='/contact'>
                        <button className='contacts-btn bg-indigo-500'>contacts</button>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default Home;