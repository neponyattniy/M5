import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';
import MayLike from '../MayLike/MayLike';
class MainPage extends Component {
    render() { 
        return (
            <div className="main-page">
                <Header /><MayLike/>
                <main className="main-page__content">
                    <section className="main-page__main-section">
                    <div className="main-page__search-box_mobile">
                            <SearchBox />
                        </div>
                        <div className="main-page__movies_mobile">
                            <Movies />
                        </div>
                    <aside className="main-page__favorites_mobile">
                        <Favorites />
                    </aside>
                        <div className="main-page__search-box">
                            <SearchBox />
                        </div>
                        <div className="main-page__movies">
                            <Movies />
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites />
                    </aside>
                </main>
            </div>
        );
    }
}
 
export default MainPage;