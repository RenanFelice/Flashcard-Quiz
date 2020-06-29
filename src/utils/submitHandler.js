function submitHandler(e, amount, difficulty, fetchQuestions, inputID, setAmount, props) {
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
        props.history.push('/flashcardlist')
    } 


}


function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function decodeString(str){
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
}

export {submitHandler, shuffle, decodeString}