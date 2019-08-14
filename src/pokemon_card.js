import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

class PokemonSkins extends React.Component {
  render() {
    const skins = this.props.skins.map((skin, index) => {
      return (
        <img src={skin.imageUrl} key={index} alt={skin.kind} />
      )
    });

    return (
      skins
    )
  }
}

function PokemonCard({ match }) {
  const QUERY = gql`
    query Pokemon($pokemonId: ID!) {
      pokemon(pokemonId: $pokemonId) {
        name
        skins {
          imageUrl
          kind
          shiny
          gender
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(QUERY, {
    variables: { pokemonId: match.params.pokemonId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <PokemonSkins skins={data.pokemon.skins} />
  )
}

export default PokemonCard;