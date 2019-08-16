import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
  color: white;
`
const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const PokemonName = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  padding: 0;
`
const PokemonNid = styled.p``
const PokemonTypes = styled.div``
const PokemonCategory = styled.div``
const PokemonType = styled.div`
  margin: 0 2px;
  padding: 2px;
  border: 2px solid white;
  display: inline;
`

function PokemonTitle({ name, nid, types, category}) {
  return (
    <Wrapper>
      <FlexRow>
        <PokemonName>{name}</PokemonName>
        <PokemonNid>{`#${nid}`}</PokemonNid>
      </FlexRow>
      <FlexRow>
        <PokemonTypes>{types.map(type => {
          return <PokemonType>{type.name}</PokemonType>
        })}</PokemonTypes>
        <PokemonCategory>{category}</PokemonCategory>
      </FlexRow>
    </Wrapper>
  )
}

export default PokemonTitle;