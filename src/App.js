import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import PokemonInventory from './components/PokemonInventory';
import RandomPokemon from './components/RandomPokemon';

function App() {
  const [addToInventory, setAddToInventory] = useState(false)
  const [pokeData, setPokeData] = useState([])
  return (
    <div >
    <Navbar />
    <div className='container'>
    <RandomPokemon addToInventoryHandler = {setAddToInventory} pokeData = {pokeData} pokeDataHandler = {setPokeData} />
    <PokemonInventory addToInventory = {addToInventory} addToInventoryHandler = {setAddToInventory} pokeData = {pokeData}/>
    </div>
    </div>
  );
}

export default App;
