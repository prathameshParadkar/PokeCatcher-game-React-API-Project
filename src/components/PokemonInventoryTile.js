import React from 'react'

export default function PokemonInventoryTile(props) {

    const typeColor = {
        normal : "#c9c9c9",
        fire : "#ff6822",
        water : "#29e6ff",
        grass : "#6bd922",
        fighting : "red",
        flying : "#bda1ff",
        poison : "#e100dd",
        ground : "#de7548",
        rock : "#623623",
        bug : "#b4c949",
        ghost : "#8724a3",
        steel : "#d0d0d0",
        electric : "#e6df2a",
        psychic : "#e690fa",
        ice : "#8fecff",
        dragon : "#d56000",
        dark : "#636363",
        fairy : "#ff9898",
        unknown: "black",
        shadow : "#6b6b6b",
    }

  return (
    <div className='poke-tile'>
        
        <img src={props.img} alt="" />
        <div className='poke-tile-name'>
            {props.name}
        </div>
        <div className='poke-tile-type' style={{backgroundColor : typeColor[props.type]}}>
            {props.type}
        </div>
    </div>
  )
}
