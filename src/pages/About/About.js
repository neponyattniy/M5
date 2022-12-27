import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './MayLike.css'


export default class About extends Component {

  render () {
    return (
      <div className='carous'>
        <header>
          <h1 className='headersss'>          <Link className='marvel' to = "/">
                  <span className='back'>BACK TO MAIN PAGE</span>
                </Link></h1>

        </header>
      </div>

    )
  }
}