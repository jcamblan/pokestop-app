import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components'
import { typeColor } from './colors'
import PokemonImage from './pokemon/image'
import PokemonTitle from './pokemon/title'
import PokemonNavigation from './pokemon/navigation'
import PokemonDatas from './pokemon/datas'
import { Pokeball, Ornament } from './pokemon/svg'

const Wrapper = styled.section`
  background: ${props => props.pokemonTypeColor}
  margin: 0;
  padding: 0;
  min-height: 100vh;
`

function PokemonCard({ match }) {
  const QUERY = gql`
    query Pokemon($pokemonId: ID!) {
      pokemon(pokemonId: $pokemonId) {
        name
        nid
        category
        skins {
          imageUrl
          kind
          shiny
          gender
        }
        types {
          name
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(QUERY, {
    variables: { pokemonId: match.params.pokemonId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Wrapper pokemonTypeColor={typeColor(data.pokemon.types[0].name)}>
      <Ornament color={typeColor(data.pokemon.types[0].name)} />
      <PokemonNavigation match={match} />
      <PokemonTitle
        name={data.pokemon.name}
        nid={data.pokemon.nid}
        types={data.pokemon.types}
        category={data.pokemon.category}
        />
      <Pokeball color={typeColor(data.pokemon.types[0].name)} />      
      <PokemonImage
        skin={data.pokemon.skins[0].imageUrl || 'http://localhost:3000/pokemon-image.png'}
        color={typeColor(data.pokemon.types[0].name)}
      />
      <PokemonDatas />
    </Wrapper>
  )
}

export default PokemonCard;