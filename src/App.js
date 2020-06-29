import React from 'react';
import './App.css';
import FlashcardList from './components/FlashcardList'
import Navbar from './components/Navbar'
import QuizProvider from './context/QuizContext'
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <QuizProvider>
        <Navbar />
        <Switch>
          <Route exact path='/' render={props => <Home props={props}/>} />
          <Route exact path='/flashcardlist' component={FlashcardList} /> 
        </Switch>
      </QuizProvider>
    </div>
  );
}

export default App;
