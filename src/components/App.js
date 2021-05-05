import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { LinearProgress, Button, Container, Typography } from "@material-ui/core";
import "./App.css";

import CardSelector from "./CardSelector";
import sampleWithoutReplacement from "./SampleWithoutReplacement";
import { setCard } from "../actions/card";
import { loadData } from "../actions/data";
import { setGameSettings, addToCounter, resetCounter } from "../actions/game";

const App = ({
  data,
  selectedCard,
  setCard,
  loadData,
  settings,
  counter,
  setGameSettings,
  addToCounter,
  resetCounter,
}) => {
  const [allLoaded, setAllLoaded] = useState(false);

  const loadAllData = () => {
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/films.json`)
      .then((response) => response.json())
      .then((response) => {
        loadData({ movies: response["items"] });
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/people.json`)
      .then((response) => response.json())
      .then((response) => {
        loadData({ characters: response["items"] });
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/planets.json`)
      .then((response) => response.json())
      .then((response) => {
        loadData({ planets: response["items"] });
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/species.json`)
      .then((response) => response.json())
      .then((response) => {
        loadData({ species: response["items"] });
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/starships.json`)
      .then((response) => response.json())
      .then((response) => {
        loadData({ spaceships: response["items"] });
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/vehicles.json`)
      .then((response) => response.json())
      .then((response) => {
        loadData({ vehicles: response["items"] });
      });
  };

  useEffect(() => {
    loadAllData();
  }, []);

  useEffect(() => {
    setAllLoaded(
      Object.entries(data)
        .map((entry) => entry[1].length)
        .every((item) => item > 0)
    );
  }, [data]);

  useEffect(() => {
    addToCounter(counter);
  }, [selectedCard]);

  return (
    <div className="App">
      <LinearProgress variant="determinate" value={allLoaded === true ? 100 : 0} />

      <Button
        variant="contained"
        color="secondary"
        disabled={!allLoaded}
        onClick={() => {
          const sampledCharacters = sampleWithoutReplacement(data.characters, 2);
          setGameSettings({ ...settings, target: sampledCharacters[1].name });
          setCard("character", sampledCharacters[0].name);
          resetCounter();
        }}
      >
        Start Game
      </Button>

      <Button
        variant="contained"
        color="primary"
        disabled={!allLoaded}
        onClick={() => {
          setCard("character", sampleWithoutReplacement(data.characters, 1)[0].name);
          resetCounter();
        }}
      >
        Explore
      </Button>

      <Button disabled>{counter}</Button>

      <Typography>Target character: {settings.target}</Typography>

      <Container maxWidth="xs" >
        <CardSelector />
        {settings.target === selectedCard.name && (
        <Typography style={{ margin: "20px 0px", fontWeight: "bold" }}>
          Congratulations! You have got to {settings.target} in {counter} steps.
        </Typography>
      )}
      </Container>


    </div>
  );
};

// PropTypes:
App.propTypes = {
  selectedCard: PropTypes.object.isRequired,
  setCard: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired,
  setGameSettings: PropTypes.func.isRequired,
  addToCounter: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  settings: PropTypes.object.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  selectedCard: state.card.selectedCard,
  data: state.data.data,
  counter: state.game.counter,
  settings: state.game.settings,
});

export default connect(mapStateToProps, { setCard, loadData, setGameSettings, addToCounter, resetCounter })(App);
