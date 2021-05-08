import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Typography } from "@material-ui/core";

import StartGameButton from "../StartGameButton";

const Final = ({ settings, counter, cardPath }) => {
  const img_src = `${process.env.PUBLIC_URL}/sw_pics/${settings.target.replace("/", "-")}.png`;
  return (
    <Paper>
      <Typography style={{ margin: "20px 0px", padding: "10px", fontWeight: "bold" }}>
        Congratulations! You have got to {settings.target} in {counter} steps.
      </Typography>

      <img src={img_src} alt="" width="50%" />

      <Typography style={{ marginTop: "20px", marginBottom: "10px" }}>Your path:</Typography>

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
  settings: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
  cardPath: PropTypes.array.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  settings: state.game.settings,
  counter: state.game.counter,
  cardPath: state.game.cardPath,
});

export default connect(mapStateToProps, {})(Final);
