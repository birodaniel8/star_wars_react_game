import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Button, Container, Typography, Paper } from "@material-ui/core";

import sampleWithoutReplacement from "../SampleWithoutReplacement";
import StartGameButton from "../StartGameButton";
import { setCard } from "../../actions/card";
import { setGameSettings, resetCounter } from "../../actions/game";

const Final = ({ data, settings, counter, cardPath, setCard, setGameSettings, resetCounter }) => {
  const img_src = `${process.env.PUBLIC_URL}/sw_pics/${settings.target.replace("/", "-")}.png`;
  return (
    <Paper>
      <Typography style={{ margin: "20px 0px", padding: "10px", fontWeight: "bold" }}>
        Congratulations! You have got to {settings.target} in {counter} steps.
      </Typography>

      <img src={img_src} alt="" width="50%" />

      <Typography style={{ marginTop: "20px", marginBottom: "10px"}}>Your path:</Typography>

      {cardPath.map((item) => (
        <p>
          <b>{item}</b>
        </p>
      ))}

      <p>
        <b>{settings.target}</b>
      </p>
      <div style={{ marginTop: "20px" }}></div>
      <StartGameButton buttonText="Start a New Game Now" buttonStyleClass="exploreStartButton" />
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
  cardPath: PropTypes.array.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
  settings: state.game.settings,
  counter: state.game.counter,
  cardPath: state.game.cardPath,
});

export default connect(mapStateToProps, { setCard, setGameSettings, resetCounter })(Final);
