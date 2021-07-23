import React from 'react';
import {  Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './Logout';



function Header() {
    return (
        <>
            <Navbar bg="dark" varient="dark" fixed = "top" > 
                <div className="navbar-wrapper">
                <Navbar.Brand id = "logo">Logo</Navbar.Brand>
                <Logout />
                </div>
            </Navbar>
            
       </>
    )
}


export default Header;
