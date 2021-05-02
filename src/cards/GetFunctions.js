export const getMovie = (url, data) => {
  return data.movies.filter((movie) => movie.url === url)[0].title;
};

export const getCharacter = (url, data) => {
  return data.characters.filter((character) => character.url === url)[0].name;
};

export const getPlanet = (url, data) => {
  return data.planets.filter((planet) => planet.url === url)[0].name;
};

export const getSpecies = (url, data) => {
  if (url) {
    return data.species.filter((species) => species.url === url)[0].name;
  } else {
    return "Human"
  }
};

export const getSpaceship = (url, data) => {
  return data.spaceships.filter((spaceship) => spaceship.url === url)[0].name;
};

export const getVehicle = (url, data) => {
  return data.vehicles.filter((vehicle) => vehicle.url === url)[0].name;
};
