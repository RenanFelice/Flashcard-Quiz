import React from 'react';
import Flashcard from './Flashcard'
import './FlashcardList.scss'

const FlashcardList = () => {
    return ( <div className='FlashcardList'>
            <Flashcard/>
            <Flashcard/>
            <Flashcard/>
        </div> );
}
 
export default FlashcardList;