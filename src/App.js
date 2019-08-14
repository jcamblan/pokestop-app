import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import PokemonCard from './pokemon_card';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={this.props.client}>
        <Router>
          <Route path="/pokemon/:pokemonId" component={PokemonCard} />
        </Router>
        <div>
          <h2>My first Apollo app 🚀</h2>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
