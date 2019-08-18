import React from 'react';
import styled from 'styled-components'
import back from '../img/arrow-left.svg'
import heart from '../img/heart.svg'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 1rem 3rem 1rem;
  z-index: 4;
`

function PokemonNavigation({ prev, next }) {
  return (
    <Wrapper>
      <img src={back} alt='' />
      <img src={heart} alt='' />
    </Wrapper>
  )
}

export default PokemonNavigation;