import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from "react-loader-spinner";
import CharacterCard from './CharacterCard';
import Provider from '../../services/Provider';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//import spinner from '../../assets/img/spinner.gif'

const CharacterGrid = () => {

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    let currentPage = page

    useEffect(() => {
        const fetchCharacters = async () => {
            const characters = await Provider(page)
            if (currentPage <= characters.info.pages) {
                setCharacters(prev => [...prev, ...characters.results])
            }
            setLoading(false)
        }
        fetchCharacters()
    }, [page, currentPage])

    return loading
        ? (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Loader
                type='ThreeDots'
                width={80}
                color="rgba(0,0,0, 0.6)"
                timeout={3000}
            />
        </div>)
        : (
            <InfiniteScroll
                dataLength={characters.length}
                next={() => setTimeout(() => {
                    setPage(currentPage += 1)
                }, 2000)}
                hasMore={true}
                loader={(<div className='loader'>
                    <p className='pagination'>
                        Página: {currentPage}
                    </p>
                    
                    <Loader
                        type='ThreeDots'
                        width={80}
                        height={40}
                        color="rgba(0,0,0, 0.6)"
                        timeout={2000}
                    />
                </div>)}
            >
                <section className='cards'>
                    {characters.map(item => (
                        <CharacterCard key={item.id} item={item} />
                    ))}
                </section>
            </InfiniteScroll>);
}

export default CharacterGrid
