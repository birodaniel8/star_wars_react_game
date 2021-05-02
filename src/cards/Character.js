import React from "react";
import { getPlanet, getSpecies, getMovie } from "./GetFunctions"
import { Button } from "@material-ui/core";


const Character = ({ selected, data }) => {
  const c = data.characters[selected];
  // console.log(c);


  if (Object.entries(data)
  .map((entry) => entry[1].length)
  .every((item) => item > 0)) {
    return (
      <div>
        <h1>{c.name}</h1>
        <p>
          <b>Homeworld:</b> <Button variant="contained">{getPlanet(c.homeworld, data)}</Button>
        </p>
        <p>
          <b>Species:</b> <Button variant="contained">{getSpecies(c.species[0], data)}</Button>
        </p>
        <p>
          <b>Movies:</b> {c.films.map(movie => <Button variant="contained">{getMovie(movie, data)}</Button>)}
        </p>
        <p>
          <b>Gender:</b> {c.gender}
        </p>
        <p>
          <b>Skin color:</b> {c.skin_color}
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Character;
