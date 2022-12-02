import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>

            <div className='image-container'>
                <img src="https://img.freepik.com/free-photo/sky-nature-photo-with-motivative-quotes_53876-124522.jpg?w=900&t=st=1669675130~exp=1669675730~hmac=b294c85267b071806e679b002b040544a0be0b18460d894ad5a9ce93169792e8" alt="myphoto" />
            </div>
            <div className='about-container'>
                <h1>Hello</h1>
                <h3>A Bit About Me</h3>
                <p>
                    I'm Mahmuda Akter Disa.I have created a variety of web pages. i am passionate about responsive websites and cutting-edge, pixel-perfect, gorgeous interfaces.
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