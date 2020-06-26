import React, { useState, useContext } from 'react';
import {quizContext} from '../context/QuizContext'
import './Navbar.scss'





const Navbar = () => {
    const {fetchQuestions} = useContext(quizContext)
    const [traducao] = useState({ 'easy': 'Fácil',
    'medium': 'Médio',
    'hard': 'Difícil'
})
    const [difficulty, setDifficulty] = useState('')
    const [amount, setAmount] = useState(10)



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <a className="navbar-brand" href="/"><img alt='questionImg' src={require('../question.svg')}></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle difficulty" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{traducao[difficulty] || "Dificuldade"}</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <span onClick={() => setDifficulty('easy')} className="dropdown-item" >Fácil</span>
                            <span onClick={() => setDifficulty('medium')} className="dropdown-item" >Médio</span>
                            <span onClick={() => setDifficulty('hard')} className="dropdown-item">Difícil</span>
                            <span onClick={() => setDifficulty('')} className="dropdown-item">Qualquer dificuldade</span>
                        </div>
                    </li>

                </ul>
                <form onSubmit={e => {
                    e.preventDefault()
                    let formInput = document.querySelector('.form-control')
                    let isNum = /^\d+$/.test(amount);
                   
                    if(!isNum) {  
                        formInput.setCustomValidity('Digite apenas números.')
                        formInput.reportValidity();

                        
                    } else if(amount > 50){
                        formInput.setCustomValidity('O valor deve ser menor ou igual a 50.')
                        formInput.reportValidity();
                        
                    } else fetchQuestions(amount, difficulty)
                    
                    
                    
                }} className="form-inline my-2 my-lg-0">
                    <input required onChange={e => {
                        e.target.setCustomValidity('')
                        setAmount(e.target.value)
                        
                    }} className="form-control mr-sm-2" type="search" placeholder="Número de questões" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Gerar</button>

                </form>
            </div>
        </nav>
    );
}

export default Navbar;