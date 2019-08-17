import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  position: relative;
  z-index: 5;
  height: 200px;
  width: 250px;
`
const Image = styled.img`
  position: absolute;
  margin-top: -50px;
`

function PokemonImage({ skin, color }) {
  return (
    <Wrapper>
      <Image src={skin} alt='' />
    </Wrapper>
  )
}

export default PokemonImage;