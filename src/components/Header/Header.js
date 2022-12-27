import React, { Component } from 'react';
import './Header.css';
import {  Link } from 'react-router-dom';


class Header extends Component {
    render() { 
        return (
            <header className="header">
                <Link className='link1' to = "/hero">
                SPIDER-MAN
                </Link>
                <h1 className="header__title">
                    <span className='marvel'>MOVIES</span>
                </h1>
                <Link className='link2' to = "/about">
                ABOUT
                </Link>
            </header>
        );
    }
}
 
export default Header;