import {Route, Routes} from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Pokes from './views/Pokes'
import PokeDetails from './views/PokeDetails'
import NotFound from './views/NotFound'
import Home from './views/Home'

function App() {
  

  return (
    <>
     <div>
      <Navigation/>
      <Routes>
        <Route
        path='/'
        element={<Home/>}
        />
        <Route
        path='/pokemons'
        element={<Pokes/>}
        />
        <Route
        path='/pokemons/:name'
        element={<PokeDetails/>}
        />
         <Route
        path='*'
        element={<NotFound/>}
        />
      </Routes>






     </div>
    </>
  )
}

export default App
