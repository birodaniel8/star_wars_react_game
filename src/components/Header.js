import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { LinearProgress, Button, Container, Typography, Paper, Grid } from "@material-ui/core";
import "./App.css";
import CancelIcon from "@material-ui/icons/Cancel";
import StartGameButton from "./StartGameButton";
import { setCard } from "../actions/card";
import { setGameSettings } from "../actions/game";
import useStyles from "../styles";

const Header = ({ counter, settings, setCard, setGameSettings }) => {
  const classes = useStyles();

  if (settings.on) {
    return (
      <Paper className={classes.header}>
        <Grid container spacing={1}>
          <Grid item xs={8} align="center">
            <Typography>Target character: </Typography>
            <Button style={{ width: "100%" }}> {settings.target} </Button>
          </Grid>
          <Grid item xs={2} align="center">
            <Typography>Steps:</Typography>
            <Button style={{ width: "100%" }}> {counter} </Button>
          </Grid>
          <Grid item xs={2} align="center">
            <CancelIcon
              fontSize="large"
              color="error"
              onClick={() => {
                setCard("Home");
                setGameSettings({ ...settings, on: false });
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }
  if (settings.explore) {
    return <StartGameButton buttonText="Start Game Now" />;
  }
  return <div></div>;
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
