import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function CreatList(props) {
  return (
    <ul>
      {props.pokedex.map((x, i) => <li key={i + 1}>{x.name}</li>)}
    </ul>
  );
}

ReactDOM.render(
  <CreatList pokedex={pokedex} />,
  document.getElementById('root')
);
