import React, { useContext } from 'react';
import './Home.scss'
import { submitHandler } from '../utils/submitHandler'
import { quizContext } from '../context/QuizContext'


const Home = () => {
    const { fetchQuestions, difficulty, amountHome, setAmountHome } = useContext(quizContext)
    return (
        <div className='Home'>
            <div className='Home-Title-Container'>
                <h1 className='Home-Title'>Flashcard Game Quiz</h1>
                <h3 className='Home-SubTitle'>Venha se sentir burro também!</h3>
            </div>
            <div className='Form'>
                <form onSubmit={e => submitHandler(e, amountHome, difficulty, fetchQuestions, 'inputHome', setAmountHome)}
                    className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <input value={amountHome} required onChange={e => {
                            e.target.setCustomValidity('')
                            setAmountHome(e.target.value)

                        }}
                            type="text" id='inputHome' className="form-control" placeholder="Número de questões" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Gerar</button>
                </form>
            </div>
        </div>);
}

export default Home;