import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import './reset.css';
import Spider from './pages/Spider/Spider'
import './common.css';
import About from './pages/About/About'


class App extends React.Component {
  render() {
    return (
      <div className="app">
        
        <Route path="/" exact component={MainPage} />
        <Route path="/list/:id" exact component={ListPage} />
        <Route path="/hero" exact component={Spider}/>
        <Route path="/about" exact component = {About}/>

      </div>
    );
  }
}

export default App;
