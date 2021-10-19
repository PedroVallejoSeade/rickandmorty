import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';

export const Gallery = () => {
    
    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
        console.log(res)
        })
        .catch(err => {
        console.log(err)
        })
    }, [])
    
    return (
        <div>
            
        </div>
    )
}


export default Gallery;