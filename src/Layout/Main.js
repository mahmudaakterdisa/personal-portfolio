import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Header from '../pages/Header/Header';
import './Main.css'
const Main = () => {
    return (
        <div className='mainbody'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;