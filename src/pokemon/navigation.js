import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { getNextPokemonId, getPrevPokemonId } from '../utils'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 1rem 1.5rem 1rem;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:active {
    color: white;
  }
`

function PokemonNavigation({ match }) {
  return (
    <Wrapper>
        <StyledLink to={`/pokemon/${getPrevPokemonId(match.params.pokemonId)}`}>
          {'<='}
        </StyledLink>
        <StyledLink to={`/pokemon/${getNextPokemonId(match.params.pokemonId)}`}>
          {'=>'}
        </StyledLink>
    </Wrapper>
  )
}

export default PokemonNavigation;