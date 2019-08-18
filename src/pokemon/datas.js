import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  border-radius: 30px;
  padding: 5px;
  position: relative;
  z-index: 0;
  margin-top: -60px;
`

class PokemonDatas extends React.Component {
  render() {
    return (
      <Wrapper>
        <p>blavblabl</p>
        <p>blavblabl</p>
        <p>blavblabl</p>
        <p>blavblabl</p>
        <p>blavblabl</p>
        <p>blavblabl</p>
        <p>blavblabl</p>
      </Wrapper>
    )
  }
}

export default PokemonDatas;