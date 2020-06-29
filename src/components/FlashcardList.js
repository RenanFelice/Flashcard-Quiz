import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Flashcard from './Flashcard'
import './FlashcardList.scss'
import { quizContext } from '../context/QuizContext'

const FlashcardList = () => {
    const { loading, questions } = useContext(quizContext)
    console.log('flashcardlist render', questions)
    let result;
    if (questions) {
        result = <> {questions.data.results.map(item => <Flashcard key={uuidv4()} info={item}/>)}</>
    } else {
        result = <h1>Something went wrong</h1>
    }
    return (
        <div className='FlashcardList'>
            {loading
                ?
                <>
                    <div className="spinner"></div>
                    <div className="logo">Loading...</div>
                </>
                :
                <>{result}</>}
        </div>);
}

export default FlashcardList;