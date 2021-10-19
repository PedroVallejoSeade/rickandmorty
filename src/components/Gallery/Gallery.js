import React from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const Gallery = () => {
    
    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        fetchCharacters()
    }, [])

    const fetchCharacters = () => {
        axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
            setCharacters(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container-fluid" style={{display: "flex", flexWrap: "wrap", gap: '10px', justifyContent: 'center', margin: '10px 0px 10px 0px', padding: '0vw', content: '100vw'}}>
            {characters.map((character) => (
                <Card key = {character.id} character = {character} />
            ))}
        </div>
    )
}


export default Gallery;