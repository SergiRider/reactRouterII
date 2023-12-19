import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, NavLink } from 'react-router-dom';
import gengar from '../assets/img/gengar.png'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';


const Navigation = () => {
  const activeClass = 'navLinkActive'
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/')
  }
  return (
    <Navbar className='navigation'>
   
      <section className='navLinks'>
      <Navbar.Brand className='navBrand' onClick={handleClick}>
      <img className='navIcon' src={gengar}/>
      </Navbar.Brand>
        <NavLink className={activeClass} to='/'>
          Home
        </NavLink>
        | 
        <NavLink className={activeClass} to='/pokemons'>
          Pokemons
        </NavLink>
      </section>
    </Navbar>
  //  
    
  )
}

export default Navigation