import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contacts-container bg-gray-300 flex flex-col sm:flex-col justify-center items-center'>

                <div>
                    <h1>Contact Me</h1>
                    <hr></hr>
                    <p>Looking forward to hearing from you</p>
                </div>
                <div className='other-contacts' >

                    <h3>Phone</h3>
                    <p>+4917682232784</p>
                    <h3>Email</h3>
                    <p>mahmuda.akter.disa@rwth-aachen.de</p>
                    <h3>LinkedIn</h3>
                    <a href='https://www.linkedin.com/in/mahmuda-akter-disa-230873214/'>
                        <h3><FaLinkedin></FaLinkedin></h3>
                    </a>
                </div>



            </div>

        </div>
    );
};

export default Contact;