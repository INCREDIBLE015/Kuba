import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Body from './Components/Body/Body';

function App() {
  return (
    <div className="app">
      <Header />
       <div className="row">
        <Sidebar />

        <Body />
      </div>

    </div>
  );
}

export default App;
