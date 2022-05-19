import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import type { Character } from "../../types/Character";

interface CharacterResponse {
  characters: Character[];
}

const query = gql`
  query Characters {
    characters {
      id
      name
      description
      gender
    }
  }
`;

const CharacterList = () => {
  const { data, loading, error } = useQuery<CharacterResponse>(query);
  if (loading || data == null) return <p>Loading...</p>;
  if (error) return <pre>{error.message}</pre>;
  return (
    <div className="CharacterList">
      {data.characters.map((char) => (
        <div className="character" key={char.id}>
          {char.name} : {char.description} : {char.gender || "none"}
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
