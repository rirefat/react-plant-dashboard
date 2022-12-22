import React from 'react';
import './App.css';
import Body from './Body Section/Body';
import Sidebar from './Sidebar Section/Sidebar.jsx';

const App = () => {
  return (
    <div className='container'>
      <Sidebar/>
      <Body></Body>
    </div>
  );
};

export default App;