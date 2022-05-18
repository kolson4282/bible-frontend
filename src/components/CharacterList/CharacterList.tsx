import { useState } from "react";
import type { Character } from "../../types/Character";

const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([
    //These will eventually come from the backend
    {
      id: 1,
      name: "God",
      description: "God",
    },
    {
      id: 2,
      name: "Adam",
      description: "1st man",
      gender: "male",
    },
  ]);
  return (
    <div className="CharacterList">
      {characters.map((char) => (
        <div className="character" key={char.id}>
          {char.name} : {char.description} : {char.gender || "N/A"}
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
