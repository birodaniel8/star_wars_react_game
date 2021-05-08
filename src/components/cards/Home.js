import React, { useState } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import { useStyles } from "../../styles";
import StartGameButton from "../StartGameButton";
import sampleWithoutReplacement from "../SampleWithoutReplacement";
import { setCard } from "../../actions/card";
import { setGameSettings, resetCounter } from "../../actions/game";

const Home = ({ data, settings, setCard, setGameSettings, resetCounter }) => {
  const classes = useStyles();
  const img_src = `${process.env.PUBLIC_URL}/main.png`;
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <Paper className={classes.homeCard}>
      <img src={img_src} alt="" width="100%" />

      <StartGameButton buttonText="Start Game" buttonStyleClass="mainStartButton" />
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

      <div className={classes.instructions} onClick={() => setShowInstructions(!showInstructions)}>
        Instructions
        {showInstructions ? (
          <ExpandLessIcon style={{ marginLeft: "5px" }} />
        ) : (
          <ExpandMoreIcon style={{ marginLeft: "5px" }} />
        )}
      </div>

      <div className={classes.instructionText} hidden={!showInstructions}>
        <p>
          The goal of this game is to get to a randomly selected target character from another randomly selected initial
          character in the least amount of steps.
        </p>

        <p>
          In each step you can see a card with many properties and clicking on these properties will lead you to a new
          card with new information (e.g. selecting the 'homeworld' will show additional info the planet itself or
          selecting the 'yellow' eye property will list characters with yellow eyes).
        </p>

        <p>
          Note that each category can only list 5 related items (the movie card will not show you all characters in that
          movie but 5 randomly selected ones).
        </p>

        <p>
          In the 'explore' mode you don't play a game, however all items in a category are listed to explore the Star
          Wars galaxy.
        </p>
      </div>
    </Paper>
  );
};

// PropTypes:
Home.propTypes = {
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

export default connect(mapStateToProps, { setCard, setGameSettings, resetCounter })(Home);
