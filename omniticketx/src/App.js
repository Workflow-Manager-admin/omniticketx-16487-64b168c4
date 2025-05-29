import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';

// PUBLIC_INTERFACE
function App() {
  // All top-level routing/pages will go as children to MainContainer in future
  return <MainContainer />;
}

export default App;