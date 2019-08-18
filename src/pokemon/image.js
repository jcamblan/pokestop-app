import React from 'react';
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from "react-router-dom";
import pokeball from '../img/pokeball.svg'
import preloader from '../img/preloader.svg'

const StyledLink = styled(Link)`
  text-decoration: none;
`
const Wrapper = styled.div`
  margin: 0;
  position: relative;
  z-index: 5;
  height: 200px;
  width: 100%;
`
const Image = styled.div`
  position: absolute;
  top: -50px;
  left: calc((100% - 256px) / 2);
`

const PrevPokemonDiv = styled.div`
  position: absolute;
  top: O;
  left: 0;
  width: 150px;
  height 150px;
  overflow: hidden;
`

const PrevPokemonSkin = styled.img`
  position: absolute;
  left: -75px;
  filter: brightness(0%) contrast(100%) opacity(20%);
  width: 150px;
`

const NextPokemonDiv = styled.div`
  position: absolute;
  top: O;
  right: 0;
  width: 150px;
  height 150px;
  overflow: hidden;
`

const NextPokemonSkin = styled.img`
  position: absolute;
  top: O;
  right: -75px;
  filter: brightness(0%) contrast(100%) opacity(20%);
  width: 150px;
`

function PrevPokemon({ nid }) {
  const QUERY = gql`
    query Pokemon($pokemonNid: ID!) {
      pokemon(pokemonNid: $pokemonNid) {
        skins {
          imageUrl
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(QUERY, {
    variables: { pokemonNid: nid },
  });

  if (loading) return (
    <PrevPokemonDiv>
      <PrevPokemonSkin src={preloader} alt=''  />
    </PrevPokemonDiv>
  )
  if (error) return <p>Error :(</p>;
  
  var imageUrl;
  if (data.pokemon.skins.length > 0) {
    imageUrl = data.pokemon.skins[0].imageUrl
  } else {
    imageUrl = pokeball
  }
  return (
    <PrevPokemonDiv>
      <StyledLink to={`/pokemon/${nid}`}>
        <PrevPokemonSkin src={imageUrl} alt=''  />
      </StyledLink>
    </PrevPokemonDiv>
  )
}

function NextPokemon({ nid }) {
  const QUERY = gql`
    query Pokemon($pokemonNid: ID!) {
      pokemon(pokemonNid: $pokemonNid) {
        skins {
          imageUrl
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(QUERY, {
    variables: { pokemonNid: nid },
  });

  if (loading) return (
    <NextPokemonDiv>
      <NextPokemonSkin src={preloader} alt=''  />
    </NextPokemonDiv>
  )
  if (error) return <p>Error :(</p>;
  
  var imageUrl;
  if (data.pokemon.skins.length > 0) {
    imageUrl = data.pokemon.skins[0].imageUrl
  } else {
    imageUrl = pokeball
  }
  return (
    <NextPokemonDiv>
      <StyledLink to={`/pokemon/${nid}`}>
        <NextPokemonSkin src={imageUrl} alt=''  />
      </StyledLink>
    </NextPokemonDiv>
  )
}

function PokemonImage({ skin, prev, next }) {
  return (
    <Wrapper>
      <PrevPokemon nid={prev} />
      <Image><img src={skin} alt='' /></Image>
      <NextPokemon nid={next} />
    </Wrapper>
  )
}

export default PokemonImage;