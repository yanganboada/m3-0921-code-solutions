import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './carousel'

const pokeMon = [
  {
    id: '001',
    name: 'Bulbasaur',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
  },
  {
    id: '004',
    name: 'Charmander',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
  },
  {
    id: '007',
    name: 'Squirtle',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
  },
  {
    id: '010',
    name: 'Caterpie',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png'
  },
  {
    id: '019',
    name: 'Rattata',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png'
  },
  {
    id: '025',
    name: 'Pikachu',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
  }
]

ReactDOM.render(
  <Carousel pokeDex={pokeMon} />,
  document.getElementById('root')
)
