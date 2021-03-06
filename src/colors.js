export const pokemonTypesColors = {
  bug: '#acc44e',
  dark: '#595465',
  dragon: '#2b6cba',
  electric: '#efd35c',
  fighting: '#c14c68',
  fire: '#f4ad5f',
  flying: '#93a8d9',
  fairy: '#e7a9e0',
  ground: '#cc956b',
  ghost: '#576aa8',
  grass: '#76b761',
  ice: '#9ed8d3',
  normal: '#a5a5a0',
  psychic: '#e87677',
  poison: '#9d6bc1',
  rock: '#c5b890',
  steel: '#69a4a8',
  water: '#79b6dd',
}

export function typeColor(key) {
  return pokemonTypesColors[key.toLowerCase()]
}