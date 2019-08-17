import React from 'react';
import styled from 'styled-components'
import { lighten } from 'polished'
import { typeColor } from '../colors'

export default function PokemonTitle({ name, nid, types, category }) {
  return (
    <Wrapper>
      <FlexRow>
        <PokemonName>{name}</PokemonName>
        <PokemonNid>{`#${nid}`}</PokemonNid>
      </FlexRow>
      <FlexRow>
        <PokemonTypes>{types.map(type => {
          return (
            <PokemonType type={types[0].name} key={type.name}>
              {type.name}
            </PokemonType>
          )
        })}</PokemonTypes>
        <PokemonCategory>{category}</PokemonCategory>
      </FlexRow>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  color: white;
  padding: 0 1rem;
  margin: 10px 0;
`
const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const PokemonName = styled.h1`
  font-size: 2rem;
  margin: 0 0 8px 0;
  font-weight: 900;
  padding: 0;
`
const PokemonNid = styled.p`
  font-size: calc(100% - 2px);
  font-weight: bold;
`
const PokemonTypes = styled.div``
const PokemonCategory = styled.div`
  font-size: calc(100% - 2px);
`
const PokemonType = styled.div`
  margin: 0 2px;
  border-radius: 50px;
  padding: 3px 15px;
  font-weight: 600;
  display: inline;
  background-color: ${props => lighten(0.1, typeColor(props.type))}
  font-size: calc(100% - 1px);
`