import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import './MayLike.css'

export default class MayLike extends Component {
  state = {
    items: [
      {id: 1, title: 'Spider-Man', url: 'https://i.ndtvimg.com/i/2015-04/spider_640x480_81428827476.jpg'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <div className='carousel'>
        <header>
          <h1 className='headersss'>BAXMALISAN</h1>
        </header>
      <Carousel>
        {items.map(item => <div key={item.id}>{item.title}
          <img url = 'https://i.ndtvimg.com/i/2015-04/spider_640x480_81428827476.jpg'></img>
        
        </div>)}
      </Carousel>
      </div>

    )
  }
}