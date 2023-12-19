import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const PokeContext = createContext()

const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'

const PokeProvider = ({children}) => {
    const [pokemon, setPokemon] = useState([])
    const [selected, setSelected] = useState('')

const getPoke = async ()=>{
    try {
        const response = await axios.get(url)
        if(!response.status){
            throw new Error ('No encontrado')
        }
        setPokemon(response.data.results)
    }catch (error){
        console.log(error.message)
}}
useEffect(()=>{
    getPoke()
}, [])

  return (
    <PokeContext.Provider value={{pokemon, setPokemon, selected, setSelected}}>
        {children}
    </PokeContext.Provider>
  )
}
  
export default PokeProvider