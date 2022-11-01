import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="navbar bg-base-100 bg-slate-300">
            <div className="md:flex-1 lg:flex-1 sm:flex-1 lefttext ">
                <a href='/' className="btn btn-ghost normal-case text-xl ml-5">MD</a>

            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 listitems">
                    <li><Link to='/'>Home </Link></li>
                    <li><Link to='resume'>Resume  </Link></li>
                    <li><Link to='projects'>Projects </Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;