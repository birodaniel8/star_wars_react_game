import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Button, Container, Typography, Paper } from "@material-ui/core";

import sampleWithoutReplacement from "../SampleWithoutReplacement";
import { setCard } from "../../actions/card";
import { setGameSettings, resetCounter } from "../../actions/game";

const Final = ({ data, settings, counter, setCard, setGameSettings, resetCounter }) => {
  return (
    <Paper>
      <Typography style={{ margin: "20px 0px", fontWeight: "bold" }}>
        Congratulations! You have got to {settings.target} in {counter} steps.
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          const sampledCharacters = sampleWithoutReplacement(data.characters, 2);
          setGameSettings({ ...settings, target: sampledCharacters[1].name, on: true });
          setCard("character", sampledCharacters[0].name);
          resetCounter();
        }}
      >
        Start a New Game
      </Button>
    </Paper>
  );
};

// PropTypes:
Final.propTypes = {
  setCard: PropTypes.func.isRequired,
  setGameSettings: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
  settings: state.game.settings,
  counter: state.game.counter,
});

export default connect(mapStateToProps, { setCard, setGameSettings, resetCounter })(Final);
