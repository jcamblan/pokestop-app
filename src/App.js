import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import PokemonCard from './pokemon_card';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components'

const Wrapper = styled.section`
`;


class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={this.props.client}>
        <Wrapper>
          <Router>
            <Route path="/pokemon/:pokemonNid" component={PokemonCard} />
          </Router>
        </Wrapper>
      </ApolloProvider>
    );
  }
}

export default App;
