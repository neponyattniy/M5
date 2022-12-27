import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './MayLike.css'
import './About.css'


export default class About extends Component {

  render () {
    return (
      <div className='wrap'>
        <header>
          <h1 className='headersss'>          <Link className='marvel' to = "/">
                  <span className='back'>COMICS</span>
                </Link></h1>

        </header>
        <div className='cards'>
                 
          <div className='card1'>
            <p className='desc1'></p>
          </div>
          <div className='card1'>
            <p className='desc1'></p>
          </div>
          <div className='card1'>
            <p className='desc1'></p>
          </div>
          <div className='card1'>
            <p className='desc1'></p>
          </div>
          

        </div>

      </div>

    )
  }
}