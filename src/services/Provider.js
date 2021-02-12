import axios from 'axios'

const Provider = async (currentPage) => {
    const result = await axios({
        method: 'GET',
        url: 'https://rickandmortyapi.com/api/character',
        params: {page: currentPage.toString()}
    })
    return result.data
}

export default Provider