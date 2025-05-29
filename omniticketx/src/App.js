import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import { BrowserRouter } from 'react-router-dom';

// PUBLIC_INTERFACE
function App() {
  // All top-level routing/pages will go as children to MainContainer in future
  return (
    <BrowserRouter>
      <MainContainer />
    </BrowserRouter>
  );
}

export default App;