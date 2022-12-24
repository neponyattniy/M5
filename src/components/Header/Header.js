import React, { Component } from 'react';
import './Header.css';
import { BrowserRouter, Link } from 'react-router-dom';


class Header extends Component {
    render() { 
        return (
            <header className="header">
                <h1 className="header__title">
                    BAXMALISAN
                </h1>
                <Link to = "/maylike">
                Вам может понравиться
                </Link><a  id='link2'>
                Наши контакты
                </a>
            </header>
        );
    }
}
 
export default Header;