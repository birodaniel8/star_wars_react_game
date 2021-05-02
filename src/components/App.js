import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { LinearProgress, Button } from "@material-ui/core";
import "./App.css";
import CardSelector from "./CardSelector"

import { setCard } from "../actions/card";
import { loadData } from "../actions/data";

const App = ({ data, selectedCard, setCard, loadData }) => {
  const [allLoaded, setAllLoaded] = useState(false);

  const loadAllData = () => {
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/films.json`)
      .then((response) => response.json())
      .then((response) => {
        loadData({movies: response["items"]})
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/people.json`)
      .then((response) => response.json())
      .then((response) => {
        loadData({characters: response["items"]})
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/planets.json`)
      .then((response) => response.json())
      .then((response) => {
        loadData({planets: response["items"]})
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/species.json`)
      .then((response) => response.json())
      .then((response) => {
        loadData({species: response["items"]})
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/starships.json`)
      .then((response) => response.json())
      .then((response) => {
        loadData({spaceships: response["items"]})
      });
    fetch(`${process.env.PUBLIC_URL}/sw_api_data/vehicles.json`)
      .then((response) => response.json())
      .then((response) => {
        loadData({vehicles: response["items"]})
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
        onClick={() => setCard("character", Math.floor(Math.random() * 82))}
      >
        Random character
      </Button>

      <CardSelector />

    </div>
  );
};

// PropTypes:
App.propTypes = {
  selectedCard: PropTypes.object.isRequired,
  setCard: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  selectedCard: state.card.selectedCard,
  data: state.data.data,
});

export default connect(mapStateToProps, { setCard, loadData })(App);
