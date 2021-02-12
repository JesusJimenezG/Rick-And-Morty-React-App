import axios from 'axios'

const fetchCharacters = async (currentPage) => {
    const result = await axios({
        method: 'GET',
        url: 'https://rickandmortyapi.com/api/character',
        params: {page: currentPage.toString()}
    })
    return result.data
}
const queryCharacters = async (id) => {
    const result = await axios({
        method: 'GET',
        url: `https://rickandmortyapi.com/api/character/${id}`,
    })
    return result.data
}

const Provider = {
    fetchCharacters: fetchCharacters,
    queryCharacters: queryCharacters
}

export default Provider