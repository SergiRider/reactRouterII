import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate} from 'react-router-dom';
import imagen0 from '../assets/img/gengar.png'

const PokeDetails = () => {
  const {name} = useParams()
  const [pokemon, setPokemon] = useState({})
  const url = 'https://pokeapi.co/api/v2/pokemon/'

  const getPoke = async ()=>{
    try {
  const response = await axios.get(`${url}${name}`)
  if(!response.status){
    throw new Error ('No encontrado')
}
setPokemon(response.data)
}catch (error){
console.log(error.message)
}}

useEffect(()=>{
  getPoke(name)
}, [name])

const navigate = useNavigate()
const handleClick = ()=>{
  navigate('/pokemons')
}

const pokemonStats = pokemon.stats?.map((stat) => {
  return (
    <div className="stats" key={stat.stat.name}>
      <div className="statParams">
        <div className="stat"><span className='remarkName'>{stat?.stat.name} </span>: <span className='remarkValue'>{stat?.base_stat}</span></div>
      </div>
    </div>
  );
});
const types= pokemon.types?.map(type=>type.type.name).join(', ')  


  return (
   <div className='container'>
    <div className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pokemon.sprites?.other.home.front_default} />
      <Card.Body>
        <div className='cardTitle'>{name}</div>
          {pokemonStats}
         <p><span className='remarkName'>Tipo : </span><span className='remarkValue'>{types}</span></p> 
        <Button variant="primary mt-3" onClick={handleClick}>Buscar otro pokemon</Button>
      </Card.Body>
    </div>
    </div>

  )
}

export default PokeDetails