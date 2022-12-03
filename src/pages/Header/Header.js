import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="navbar bg-dark">
            <div className="md:flex-1 lg:flex-1 sm:flex-1  lefttext ">
                <a href='/' className="btn btn-ghost normal-case text-xl ml-5">MD</a>

            </div>
            <div className="flex-none right-content">
                <ul className="menu menu-horizontal p-0 listitems ">
                    <li ><a href='resume' className='resume-button'>Resume  </a></li>
                    <li className=''><Link to='projects'>Projects </Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;