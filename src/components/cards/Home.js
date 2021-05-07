import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Button, Container, Typography, Paper } from "@material-ui/core";

import useStyles from "../../styles";
import StartGameButton from "../StartGameButton";
import sampleWithoutReplacement from "../SampleWithoutReplacement";
import { setCard } from "../../actions/card";
import { setGameSettings, resetCounter } from "../../actions/game";

const Home = ({ data, settings, setCard, setGameSettings, resetCounter }) => {
  const classes = useStyles();
  const img_src = `${process.env.PUBLIC_URL}/main.png`
  return (
    <Paper className={classes.homeCard}>
      <img src={img_src} alt="" width="100%"/>
      <StartGameButton buttonText="Start Game" buttonStyleClass="mainStartButton" />
      <div></div>
      <Button
        className={classes.exploreButton}
        variant="contained"
        color="secondary"
        onClick={() => {
          setCard("character", sampleWithoutReplacement(data.characters, 1)[0].name);
          resetCounter();
          setGameSettings({ ...settings, explore: true });
        }}
      >
        Explore
      </Button>
    </Paper>
  );
};

// PropTypes:
Home.propTypes = {
  setCard: PropTypes.func.isRequired,
  setGameSettings: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
  settings: state.game.settings,
});

export default connect(mapStateToProps, { setCard, setGameSettings, resetCounter })(Home);
