import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { LinearProgress, Button, Container, Typography } from "@material-ui/core";
import "./App.css";

import Header from "./Header";
import CardSelector from "./CardSelector";
import { loadData } from "../actions/data";
import { setCard } from "../actions/card";
import { addToCounter } from "../actions/game";

const App = ({ data, selectedCard, setCard, loadData, settings, counter, addToCounter }) => {
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
  useEffect(() => allLoaded && setCard("Home"), [allLoaded]);
  useEffect(() => {
    if (settings.target === selectedCard.name && settings.on === true) {
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
    <div className="App">
      <LinearProgress variant="determinate" value={allLoaded === true ? 100 : 0} />
      <Container maxWidth="xs">
        <Header />
        <CardSelector />
      </Container>
    </div>
  );
};

// PropTypes:
App.propTypes = {
  selectedCard: PropTypes.object.isRequired,
  setCard: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired,
  addToCounter: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, { setCard, loadData, addToCounter })(App);
