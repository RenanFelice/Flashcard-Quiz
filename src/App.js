import React from 'react';
import './App.scss';
import FlashcardList from './components/FlashcardList'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FlashcardList/>
    </div>
  );
}

export default App;
