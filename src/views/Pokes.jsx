import React from 'react'
import { useContext } from 'react'
import { PokeContext } from '../context/Global'
import {useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Pokes = () => {
      const {pokemon, selected, setSelected} = useContext(PokeContext)
      const navigate = useNavigate()
    const viewDetails = () =>{
      if(selected){
        navigate (`/pokemons/${selected}`)
      }else {
        Swal.fire('Selecciona un pokemon')
      }
    }
  
  return (
    <div className='pokemons'>
      <h1>        Selecciona un pokemon      </h1>
    <section className='elegidos'>
      <select className='pokemonSelect mt-4' value= {selected} onChange={({target})=> setSelected(target.value)}>
        <option value='' disabled>Select a pokemon</option>
        {pokemon.map(({name})=>(
        <option key={name} value={name}> {name}</option>))}
      </select>
      <article>
        <button className='btn btn-primary mt-4' onClick={viewDetails}>Ver detalles</button>
      </article>
    </section>
    </div>
  )
}

export default Pokes