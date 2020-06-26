import React, { useState } from 'react';
import './Flashcard.scss'

const Flashcard = () => {
    const [isFlipping, setIsFlipping] = useState(false)
    const [flip, setFlip] = useState(false)
    return (
    
    <div onClick={() => {
        if(isFlipping) return
        setIsFlipping(true)
        setFlip(!flip)
        setTimeout(() => {
            setIsFlipping(false)
        }, 300);
        
    }} className={`Flashcard ${flip ? 'flip' : ''}`}>
        <div className='front'>
            <div className='option'>esse é o front</div>
            <div className='option'>opção do front1</div>
            <div className='option'>opção do front 2</div>
        </div>
        <div className='back'>esse é o back, resposta aqui</div>
    </div>
    );
}

export default Flashcard;