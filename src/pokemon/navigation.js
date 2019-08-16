import React from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getNextPokemonId, getPrevPokemonId } from '../utils'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

function PokemonNavigation({ match }) {
  return (
    <Wrapper>
        <Link to={`/pokemon/${getPrevPokemonId(match.params.pokemonId)}`}>
          {'<='}
        </Link>
        <Link to={`/pokemon/${getNextPokemonId(match.params.pokemonId)}`}>
          {'=>'}
        </Link>
    </Wrapper>
  )
}

export default PokemonNavigation;