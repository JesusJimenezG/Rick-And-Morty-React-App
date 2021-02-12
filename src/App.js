import React from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import './App.css';


const App = () => {

    return (<div className='container'>
        <Header />
        <Search />
        <CharacterGrid />
    </div>);
}

export default App;