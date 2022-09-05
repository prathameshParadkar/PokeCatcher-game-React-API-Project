import React from 'react'
import axios from 'axios'

export default function RandomPokemon(props) {
  const [message, setMessage] = React.useState(<></>)
  const [isSpawned, setIsSpawned] = React.useState(false)

  function rand(){
    return (Math.floor(Math.random() * 905) + 1)
  }

  function onButton(){
    
    randomPokemonCall()
    setIsSpawned(true)
    
    setTimeout(() => {
      setIsSpawned(false)
      
      setTimeout(() => {
        props.pokeDataHandler([])
      }, 500)
          
    }, 10000)
  }


  const toPokeInventory = (e) => {
    if( e.key === "Enter"){
      if(!(props.pokeData.length === 0) && e.target.value.toLowerCase() === props.pokeData.forms["0"].name){
        props.addToInventoryHandler(true)
        setMessage(<div style={{color : "green"}}>{`${props.pokeData.forms["0"].name} was caught!!!`}</div>)
        setTimeout(() => {
          setMessage("")
        }, 1000)
      }
      else if(!(props.pokeData.length === 0)){
        setMessage(<div style={{color : "red"}}>Wrong name!!!</div>)
        setTimeout(() => {
          setMessage("")
        }, 500)
      }
      e.target.value = "";
    }
  }
  
  const randomPokemonCall = () => {
    axios({
      url : `https://pokeapi.co/api/v2/pokemon/${rand()}`,
      method : "get"
    })
    .then((res) => {
      props.pokeDataHandler(res.data)
      // console.log("yes")
    })
    .catch(err => {console.log(err)})
    setMessage("")
  }


  return (
    <div className='random-pokemon-box'> 
      <div >
        <button disabled = {isSpawned ? true : false} onClick={onButton} >Spawn New Pokemon!</button>
        <div className='random-pokemon-img-slide'>
        {(props.pokeData.length !== 0) && <img src={props.pokeData.sprites.front_default} alt="" />}
        {!(props.pokeData.length !== 0) && <p>Click "Spawn new pokemon" to generate a random pokemon. It only stays for <b>10 seconds</b>. Guess its name quickly to catch it.</p>}
        </div>
      
      </div>
      <div>
        <div className='random-pokemon-input'>
          <label htmlFor="pokemonGuess">  
            Guess the name of pokemon to catch:
          </label>
          
          <input type="text" name='pokemonGuess' onKeyDown={toPokeInventory} />
        
        </div>
        <div className='random-pokemon-message'>
          {message}
        </div>
      </div>
    </div>

  )
}
