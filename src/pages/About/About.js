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
            <p className='desc1'>
              <a className='linkcom' href='https://www.marvel.com/comics/issue/104879/avengers_forever_2021_12'>
              Avengers Forever (2021) #12
              </a>
          </p>
          </div>
          <div className='card2'>
            <p className='desc1'>
              <a className='linkcom' href='https://www.marvel.com/comics/issue/104561/dark_web_ms_marvel_2022_1'>
              Dark Web: Ms. Marvel (2022) #1

              </a>
            </p>
          </div>
          <div className='card3'>
            <p className='desc1'>
              <a className='linkcom' href='https://www.marvel.com/comics/issue/100416/wakanda_2022_3'>
              Wakanda (2022) #3

              </a>
            </p>
          </div>
          <div className='card1mobile'>
            <p className='desc1mobile'>
              <a className='linkcom' href='https://www.marvel.com/comics/issue/104879/avengers_forever_2021_12'>
              Avengers Forever (2021) #12
              </a>
          </p>
          </div>
          <div className='card2mobile'>
            <p className='desc1mobile'>
              <a className='linkcom' href='https://www.marvel.com/comics/issue/104561/dark_web_ms_marvel_2022_1'>
              Dark Web: Ms. Marvel (2022) #1

              </a>
            </p>
          </div>
          <div className='card3mobile'>
            <p className='desc1mobile'>
              <a className='linkcom' href='https://www.marvel.com/comics/issue/100416/wakanda_2022_3'>
              Wakanda (2022) #3

              </a>
            </p>
          </div>
          {/* <div className='card4'>
            <p className='desc1'>
              <a className='linkcom' href='https://www.marvel.com/comics/issue/96893/wolverine_2020_28'>
              Wolverine (2020) #28

              </a>
            </p>
          </div> */}
          

        </div>

      </div>

    )
  }
}