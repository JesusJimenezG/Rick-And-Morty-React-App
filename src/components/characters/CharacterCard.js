import React from 'react'

const CharacterCard = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.image} alt={item.name} />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Estado: </strong> {item.status}
                        </li>
                        <li>
                            <strong>Especie: </strong> {item.species}
                        </li>
                        <li>
                            <strong>Tipo: </strong> {item.type}
                        </li>
                        <li>
                            <strong>Género: </strong> {item.gender}
                        </li>
                        <li>
                            <strong>Origen: </strong> {item.origin.name}
                        </li>
                        <li>
                            <strong>Localidad: </strong> {item.location.name}
                        </li>
                        <li>
                            <strong>Episodios: </strong>
                        </li>
                        <ul>
                            {item.episode.map(element => (
                                <li key={element.toString().replace('https://rickandmortyapi.com/api/episode/', 'Episodio: ')}>{(element).toString().replace('https://rickandmortyapi.com/api/episode/', 'Episodios: ')}</li>
                            ))}
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard
