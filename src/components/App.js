import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { LinearProgress, Container } from "@material-ui/core";

import Header from "./Header";
import CardSelector from "./CardSelector";
import { loadData } from "../actions/data";
import { setCard } from "../actions/card";
import { setGameSettings, addToCounter } from "../actions/game";

const App = ({ data, settings, counter, selectedCard, loadData, setCard, setGameSettings, addToCounter }) => {
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

  useEffect(() => loadAllData(), []);
  useEffect(() => allLoaded && setCard("Home"), [allLoaded, setCard]);
  useEffect(() => {
    if (settings.target === selectedCard.name && settings.on === true) {
      setGameSettings({ ...settings, on: false });
      setCard("Final");
    } else {
      addToCounter(counter);
    }
  }, [selectedCard]);
  useEffect(() => {
    setAllLoaded(
      Object.entries(data)
        .map((entry) => entry[1].length)
        .every((item) => item > 0)
    );
  }, [data]);

  return (
    <div>
      <LinearProgress variant="determinate" color="primary" value={allLoaded === true ? 100 : 0} />
      <Container maxWidth="xs" align="center">
        <Header />
        <CardSelector />
      </Container>
    </div>
  );
};

// PropTypes:
App.propTypes = {
  data: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
  selectedCard: PropTypes.object.isRequired,
  loadData: PropTypes.func.isRequired,
  setCard: PropTypes.func.isRequired,
  setGameSettings: PropTypes.func.isRequired,
  addToCounter: PropTypes.func.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
  settings: state.game.settings,
  counter: state.game.counter,
  selectedCard: state.card.selectedCard,
});

export default connect(mapStateToProps, { loadData, setCard, setGameSettings, addToCounter })(App);
