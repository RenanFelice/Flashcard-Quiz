import React from 'react';
import './App.scss';
import FlashcardList from './components/FlashcardList'
import Navbar from './components/Navbar'
import QuizProvider from './context/QuizContext'

function App() {
  return (
    <div className="App">
      <QuizProvider>
        <Navbar />
        <FlashcardList />
      </QuizProvider>
    </div>
  );
}

export default App;
