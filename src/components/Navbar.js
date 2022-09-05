import React from 'react'
import pokeballImg from './images/pokeball.png'

export default function () {
  return (
    <nav>
        <ul>
            <li>
                <div className='logo-img'>
                    <img src={pokeballImg} alt="" />
                    <p>PokeCatcher</p>
                </div>
            </li>
            <li>By-Prathamesh Paradkar</li>
        </ul>
    </nav>
  )
}
