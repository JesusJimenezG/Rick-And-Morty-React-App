import React from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';


const App = () => {

    return (<div className='container'>
        <Header />
        <CharacterGrid />
    </div>);
}

export default App;