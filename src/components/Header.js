import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { LinearProgress, Button, Container, Typography } from "@material-ui/core";
import "./App.css";
import CancelIcon from "@material-ui/icons/Cancel";
import StartGameButton from "./StartGameButton"
import { setCard } from "../actions/card";
import { setGameSettings } from "../actions/game";

const Header = ({ counter, settings, setCard, setGameSettings }) => {
  if (settings.on) {
    return (
      <div>
        <Typography>Target character: {settings.target}</Typography>
        <Button disabled>{counter}</Button>
        <CancelIcon
          color="error"
          onClick={() => {
            setCard("Home");
            setGameSettings({ ...settings, on: false });
          }}
        />
      </div>
    );
  }
  if (settings.explore) {
    return (
      <StartGameButton buttonText="Start Game Now"/>
    )
  }
  return <div></div>

};

// PropTypes:
Header.propTypes = {
  setCard: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  settings: PropTypes.object.isRequired,
  setGameSettings: PropTypes.func.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  counter: state.game.counter,
  settings: state.game.settings,
});

export default connect(mapStateToProps, { setCard, setGameSettings })(Header);
