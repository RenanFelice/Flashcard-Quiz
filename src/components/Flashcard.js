import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Flashcard.scss'
import { shuffle, decodeString } from '../utils/submitHandler'

const Flashcard = ({ info }) => {
    const [isFlipping, setIsFlipping] = useState(false)
    const [flip, setFlip] = useState(false)
    const [questions] = useState(shuffle([...info.incorrect_answers, info.correct_answer]))
    return (

        <div onClick={() => {
            if (isFlipping) return
            setIsFlipping(true)
            setFlip(!flip)
            setTimeout(() => {
                setIsFlipping(false)
            }, 300);

        }} className={`Flashcard ${flip ? 'flip' : ''}`}>
            <div className='front'>
                <div className='question'>{decodeString(info.question)}</div>
                {questions.map(question => <li key={uuidv4()} className='options'>{decodeString(question)}</li>)}
            </div>
            <div className='back'>{info.correct_answer}</div>
        </div>
    );
}

export default Flashcard;