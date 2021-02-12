import React, { useState } from 'react'

//TODO: implement the floating search and query method 

const Search = ({characters}) => {

    const [text, setText] = useState('')
    console.log(characters)
    return (
        <section className='search'>
            <form>
                <input
                    type='text' 
                    placeholder='Buscar Personaje' 
                    onChange={(e)=> setText(e.target.value)}
                    autoFocus    
                />
            </form>
        </section>
    )
}

export default Search
