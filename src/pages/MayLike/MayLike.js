import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './MayLike.css'

export default class MayLike extends Component {

  render () {
    return (
      <div className='carousel'>
        <header>
          <h1 className='headersss'><span className='marvel'>MARVEL</span></h1>
          <h2 className='link123'><Link to = "/">
                  Возврат на главную страницу
                </Link></h2>
        </header>
      </div>

    )
  }
}