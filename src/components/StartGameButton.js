import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Button } from "@material-ui/core";

import { useStyles } from "../styles";
import sampleWithoutReplacement from "./SampleWithoutReplacement";
import { setCard } from "../actions/card";
import { setGameSettings, resetCounter } from "../actions/game";

const StartGameButton = ({ buttonText, buttonStyleClass, data, settings, setCard, setGameSettings, resetCounter }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes[buttonStyleClass]}
      variant="contained"
      color="primary"
      onClick={() => {
        const sampledCharacters = sampleWithoutReplacement(data.characters, 2);
        setGameSettings({ ...settings, target: sampledCharacters[1].name, on: true, explore: false });
        setCard("character", sampledCharacters[0].name);
        resetCounter();
      }}
    >
      {buttonText}
    </Button>
  );
};

// PropTypes:
StartGameButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonStyleClass: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  setCard: PropTypes.func.isRequired,
  setGameSettings: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
  settings: state.game.settings,
});

export default connect(mapStateToProps, { setCard, setGameSettings, resetCounter })(StartGameButton);
