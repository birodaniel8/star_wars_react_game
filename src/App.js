import React, { useState, useEffect } from "react";
import { LinearProgress, Button } from "@material-ui/core";
import "./App.css";
import Character from "./cards/Character";

const App = () => {
  // var data = {
  //   movies: [],
  //   characters: [],
  //   planets: [],
  //   species: [],
  //   spaceships: [],
  //   vehicles: [],
  // };
  const [data, setData] = useState({
    movies: [],
    characters: [],
    planets: [],
    species: [],
    spaceships: [],
    vehicles: [],
  });
  const [allLoaded, setAllLoaded] = useState(false);
  const [characterId, setCharacterId] = useState(0);

  const loadData = () => {
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/films.json`)
      .then((response) => response.json())
      .then((response) => {
        setData((data) => ({ ...data, movies: response["items"] }));
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/people.json`)
      .then((response) => response.json())
      .then((response) => {
        setData((data) => ({ ...data, characters: response["items"] }));
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/planets.json`)
      .then((response) => response.json())
      .then((response) => {
        setData((data) => ({ ...data, planets: response["items"] }));
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/species.json`)
      .then((response) => response.json())
      .then((response) => {
        setData((data) => ({ ...data, species: response["items"] }));
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/starships.json`)
      .then((response) => response.json())
      .then((response) => {
        setData((data) => ({ ...data, spaceships: response["items"] }));
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/vehicles.json`)
      .then((response) => response.json())
      .then((response) => {
        setData((data) => ({ ...data, vehicles: response["items"] }));
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setAllLoaded(
      Object.entries(data)
        .map((entry) => entry[1].length)
        .every((item) => item > 0)
    );
  }, [data]);

  return (
    <div className="App">
      <LinearProgress
        variant="determinate"
        value={allLoaded === true ? 100 : 0}
      />

      <Button
        variant="contained"
        color="primary"
        disabled={!allLoaded}
        onClick={() => setCharacterId(Math.floor(Math.random() * 82))}
      >
        Random character
      </Button>

      <Character selected={characterId} data={data} />
      {/* {data.movies.map((vehicle, id) => (
        <b id={id}>{vehicle.title}, </b>
      ))}
      <hr />
      {data.characters.map((vehicle, id) => (
        <b id={id}>{vehicle.name}, </b>
      ))}
      <hr />
      {data.planets.map((vehicle, id) => (
        <b id={id}>{vehicle.name}, </b>
      ))}
      <hr />
      {data.species.map((vehicle, id) => (
        <b id={id}>{vehicle.name}, </b>
      ))}
      <hr />
      {data.spaceships.map((vehicle, id) => (
        <b id={id}>{vehicle.name}, </b>
      ))}
      <hr />
      {data.vehicles.map((vehicle, id) => (
        <b id={id}>{vehicle.name}, </b>
      ))}
      <hr /> */}
    </div>
  );
};

export default App;
