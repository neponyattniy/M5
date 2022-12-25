import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import MayLike from './pages/MayLike/MayLike';
import './reset.css';
import './common.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        
        <Route path="/" exact component={MainPage} />
        <Route path="/list/:id" exact component={ListPage} />
        <Route path="/maylike" exact component={MayLike}/>

      </div>
    );
  }
}

export default App;
