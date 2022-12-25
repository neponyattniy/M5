import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './MayLike.css'

export default class MayLike extends Component {

  render () {
    return (
      <div className='carousel'>
        <header>
          <h1 className='headersss'><span className='marvel'>MARVEL</span></h1>
          <Link className='link3' to = "/">
                  BACK TO MAIN PAGE
                </Link>
        </header>
      </div>

    )
  }
}