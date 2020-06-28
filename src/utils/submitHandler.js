function submitHandler(e, amount, difficulty, fetchQuestions, inputID, setAmount) {
    e.preventDefault()
    let formInput = document.querySelector(`#${inputID}`)
    let isNum = /^\d+$/.test(amount);

    if (!isNum) {
        formInput.setCustomValidity('Digite apenas números.')
        formInput.reportValidity();


    } else if (amount > 50) {
        formInput.setCustomValidity('O valor deve ser menor ou igual a 50.')
        formInput.reportValidity();

    } else {
        fetchQuestions(amount, difficulty)
        setAmount('')
    } 


}

export {submitHandler}