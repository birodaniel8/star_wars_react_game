import React, { useState, useEffect } from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import "./App.css";
import datajson from "./data2.json"

const App = () => {
  var data = {
    movies: [],
    characters: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
  };
  const [moviesLoaded, setMoviesLoaded] = useState(false);
  const [charactersLoaded, setCharactersLoaded] = useState(false);
  const [planetsLoaded, setPlanetsLoaded] = useState(false);
  const [speciesLoaded, setSpeciesLoaded] = useState(false);
  const [starshipsLoaded, setStarshipsLoaded] = useState(false);
  const [vehiclesLoaded, setVehiclesLoaded] = useState(false);

  const [progress, setProgress] = useState(0);

  const loadCharacters = () => {
    fetch("https://swapi.dev/api/people/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const peopleCount = response.count;
        var fetches = [];
        for (let i = 0; i < peopleCount; i++) {
          fetches.push(
            fetch(`http://swapi.dev/api/people/${i + 1}/`)
              .then((response) => response.json())
              .then((response) => {
                if (!("detail" in response)) {
                  data.characters.push(response);
                  // console.log(response);
                  // console.log(data.characters.length);
                  // console.log(progress)
                  setProgress(progress+100/peopleCount)
                }
              })
          );
        }
        Promise.all(fetches).then(() => {
          setCharactersLoaded(true);
          console.log(progress)
        });
      });
  }

  const loadMovies = () => {
    fetch("https://swapi.dev/api/films/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const movieCount = response.count;
        var fetches = [];
        for (let i = 0; i < movieCount; i++) {
          fetches.push(
            fetch(`http://swapi.dev/api/films/${i + 1}/`)
              .then((response) => response.json())
              .then((response) => {
                if (!("detail" in response)) {
                  data.movies.push(response);
                  // console.log(response);
                  // console.log(data.movies.length);
                }
              })
          );
        }
        Promise.all(fetches).then(() => {
          setMoviesLoaded(true);
        });
      });
  }

  const loadPlanets = () => {
    fetch("https://swapi.dev/api/planets/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const planetCount = response.count;
        var fetches = [];
        for (let i = 0; i < planetCount; i++) {
          fetches.push(
            fetch(`http://swapi.dev/api/planets/${i + 1}/`)
              .then((response) => response.json())
              .then((response) => {
                if (!("detail" in response)) {
                  data.planets.push(response);
                  // console.log(response);
                  // console.log(data.planets.length);
                }
              })
          );
        }
        Promise.all(fetches).then(() => {
          setPlanetsLoaded(true);
        });
      });
  }

  const loadSpecies = () => {
    fetch("https://swapi.dev/api/species/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const speciesCount = response.count;
        var fetches = [];
        for (let i = 0; i < speciesCount; i++) {
          fetches.push(
            fetch(`http://swapi.dev/api/species/${i + 1}/`)
              .then((response) => response.json())
              .then((response) => {
                if (!("detail" in response)) {
                  data.species.push(response);
                  // console.log(response);
                  // console.log(data.planets.length);
                }
              })
          );
        }
        Promise.all(fetches).then(() => {
          setSpeciesLoaded(true);
        });
      });
  }

  const loadSpaceships = () => {
    fetch("https://swapi.dev/api/starships/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const starshipCount = response.count;
        var fetches = [];
        for (let i = 0; i < starshipCount; i++) {
          fetches.push(
            fetch(`http://swapi.dev/api/starships/${i + 1}/`)
              .then((response) => response.json())
              .then((response) => {
                if (!("detail" in response)) {
                  data.starships.push(response);
                  // console.log(response);
                  // console.log(data.planets.length);
                }
              })
          );
        }
        Promise.all(fetches).then(() => {
          setStarshipsLoaded(true);
        });
      });
  }

  const loadVehicles = () => {
    fetch("https://swapi.dev/api/vehicles/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const vehicleCount = response.count;
        var fetches = [];
        for (let i = 0; i < vehicleCount; i++) {
          fetches.push(
            fetch(`http://swapi.dev/api/vehicles/${i + 1}/`)
              .then((response) => response.json())
              .then((response) => {
                if (!("detail" in response)) {
                  data.vehicles.push(response);
                  // console.log(response);
                  // console.log(data.planets.length);
                }
              })
          );
        }
        Promise.all(fetches).then(() => {
          setVehiclesLoaded(true);
        });
      });
  }

  useEffect(() => {
    // loadMovies();
    // loadCharacters();
    // loadPlanets();
    // loadSpecies();
    // loadSpaceships();
    // loadVehicles();
    console.log(datajson)
    console.log(datajson.crew)
  }, []);

  return (
    <div className="App">
      <LinearProgress variant="determinate" value={progress} />
      <p>The characters are <b>{charactersLoaded ? '' : 'not'}</b> loaded.</p>
      <p>The movies are <b>{moviesLoaded ? '' : 'not'}</b> loaded.</p>
      <p>The planets are <b>{planetsLoaded ? '' : 'not'}</b> loaded.</p>
      <p>The species are <b>{speciesLoaded ? '' : 'not'}</b> loaded.</p>
      <p>The starships are <b>{starshipsLoaded ? '' : 'not'}</b> loaded.</p>
      <p>The vehicles are <b>{vehiclesLoaded ? '' : 'not'}</b> loaded.</p>
    </div>
  );
};

export default App;
