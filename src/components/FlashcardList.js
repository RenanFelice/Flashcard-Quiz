import React, { useContext } from 'react';
// import Flashcard from './Flashcard'
import './FlashcardList.scss'
import { quizContext } from '../context/QuizContext'

const FlashcardList = () => {
    const { questions, loading } = useContext(quizContext)
    console.log(questions)
    return (

        <div className='FlashcardList'>
            {loading ?
                <>
                    <div className="spinner"></div>
                    <div className="logo">Loading...</div>
                </> : <h1>loadado</h1>}
        </div>);
}

export default FlashcardList;