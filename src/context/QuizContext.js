import React, { createContext, useState } from 'react';
import axios from 'axios'

export const quizContext = createContext();

const QuizProvider = (props) => {

    const [questions, setQuestions] = useState()
    const [loading, setLoading] = useState(true)

    const fetchQuestions = async (amount, difficulty) => {
        setLoading(true)
        try {

            await axios(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`).then(res => {
                console.log(res)
                setQuestions(res)
            })


        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }

    return (

        <quizContext.Provider value={{ fetchQuestions, questions, loading }}>
            {props.children}
        </quizContext.Provider>);
}

export default QuizProvider;