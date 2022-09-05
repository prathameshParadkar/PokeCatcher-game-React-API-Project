import React from 'react'
import PokemonInventoryTile from './PokemonInventoryTile'

export default function PokemonInventory(props) {
  const [catchedPokeData, setCatchedpokeData] = React.useState([])

  React.useEffect(() => {
    if(props.addToInventory){
      setCatchedpokeData(prevState => {
        return(
          [
            ...prevState,
            props.pokeData
          ]
        )
      })
      props.addToInventoryHandler(false)
    }
  }, [props.addToInventory])

  return (
    <div className='inventory-box'>
    {
      !(catchedPokeData.length === 0) && catchedPokeData.map(item => {
        return(
          <PokemonInventoryTile 
          key = {item.id}
          img = {item.sprites.front_default}
          name = {item.forms[0].name}
          type = {item.types[0].type.name}
          />
        )
      })
      
    }
    {
      (catchedPokeData.length === 0) && <p>Catched Pokemon will appear here.</p>
    }
    </div>
  )
}
