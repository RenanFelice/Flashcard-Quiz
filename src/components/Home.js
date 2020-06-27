import React from 'react';
import './Home.scss'

const Home = () => {
    return (
        <div className='Home'>
            <div className='Home-Title-Container'>
                <h1 className='Home-Title'>Flashcard Game Quiz</h1>
                <h3 className='Home-SubTitle'>Venha se sentir burro também!</h3>
            </div>
            <div className='Form'>
                <form class="form-inline">
                    <div class="form-group mx-sm-3 mb-2">
                        <input type="text" class="form-control"  placeholder="Número de questões" />
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Gerar</button>
                </form>
            </div>
        </div>);
}

export default Home;