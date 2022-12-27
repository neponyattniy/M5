import React, { Component } from 'react'
import './Spider.css'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from './Footer';
import Description from './Description';

export default class Spider extends Component {
    render() {
        return (
            <div>
                <header className='header1'>
  
                    <h1 className='header2'>SPIDER-MAN                  <Link className='link1' to = '/'>
                        HOME
                    </Link></h1>
                </header>
            <Carousel className='caru'>
                <div className='photo'>
                    <img src="https://images4.alphacoders.com/844/thumb-1920-844967.jpg" />
                </div>
                <div>
                    <img src="https://wallpapercave.com/wp/wp3892792.jpg" />
                </div>
                <div>
                    <img src="https://cdn.wallpapersafari.com/35/35/lS6Lhj.jpg" />
                </div>
                <div>
                    <img src="https://images7.alphacoders.com/317/317140.png" />
                </div>
                <div>
                    <img src="https://wallpapers.com/images/featured/p4ashmgeamn2mvkn.jpg" />
                </div>

            </Carousel>
            <Description/>
            <Footer/>

            </div>
        );
    }
};
