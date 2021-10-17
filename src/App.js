import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';

const App = () => {
  return (
    <div className = "OuterWrap">
      <div className = "App">
        <Nav />
        <Main />
      </div>
      <div className = "MusicControls">
        MusicControls
      </div>
    </div>
  );
}

export default App;
