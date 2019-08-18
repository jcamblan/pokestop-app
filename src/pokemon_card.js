import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components'
import { typeColor } from './colors'
import PokemonImage from './pokemon/image'
import PokemonTitle from './pokemon/title'
import PokemonNavigation from './pokemon/navigation'
import PokemonDatas from './pokemon/datas'
import { Pokeball } from './pokemon/svg'
import square from './img/square.svg'

const Wrapper = styled.section`
  background: ${props => props.pokemonTypeColor}
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-image: url(${square});
  background-repeat: no-repeat;
  background-position: -50px -60px; 

`

function PokemonCard({ match }) {
  const QUERY = gql`
    query Pokemon($pokemonNid: ID!) {
      pokemon(pokemonNid: $pokemonNid) {
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
        previousNid
        nextNid
      }
    }
  `;
  const { loading, error, data } = useQuery(QUERY, {
    variables: { pokemonNid: match.params.pokemonNid },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Wrapper pokemonTypeColor={typeColor(data.pokemon.types[0].name)}>
      <PokemonNavigation
        prev={data.pokemon.previousNid}
        next={data.pokemon.nextNid}
      />
      <PokemonTitle
        name={data.pokemon.name}
        nid={data.pokemon.nid}
        types={data.pokemon.types}
        category={data.pokemon.category}
        />
      <Pokeball color={typeColor(data.pokemon.types[0].name)} />      
      <PokemonImage
        skin={data.pokemon.skins.length > 0 ? data.pokemon.skins[0].imageUrl : ''}
        prev={data.pokemon.previousNid}
        next={data.pokemon.nextNid}
      />
      <PokemonDatas />
    </Wrapper>
  )
}

export default PokemonCard;