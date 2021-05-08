import React, { useState } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Grid, Button, Typography } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";

import { useStyles } from "../styles";
import StartGameButton from "./StartGameButton";
import { setCard } from "../actions/card";
import { setGameSettings } from "../actions/game";

const Header = ({ settings, counter, setCard, setGameSettings }) => {
  const classes = useStyles();
  const [showTarget, setShowTarget] = useState(false);

  if (settings.on) {
    const img_src = `${process.env.PUBLIC_URL}/sw_pics/${settings.target.replace("/", "-")}.png`;
    return (
      <Paper className={classes.header}>
        <Grid container spacing={1}>
          <Grid item xs={8} align="center">
            <Typography>Target character: </Typography>
            <Button className={classes.headerButton} onClick={() => setShowTarget(!showTarget)}>
              {settings.target}
            </Button>
          </Grid>
          <Grid item xs={2} align="center">
            <Typography>Steps:</Typography>
            <Button className={classes.headerButton}> {counter} </Button>
          </Grid>
          <Grid item xs={2} className={classes.cancelIconBox}>
            {!showTarget ? (
              <CancelIcon
                className={classes.cancelIcon}
                fontSize="large"
                color="error"
                onClick={() => {
                  setCard("Home");
                  setGameSettings({ ...settings, on: false });
                }}
              />
            ) : (
              <EmojiFlagsIcon
                className={classes.cancelIcon}
                fontSize="large"
                onClick={() => {
                  setShowTarget(!showTarget);
                  setCard("character", settings.target);
                  setGameSettings({ ...settings, on: false, explore: true });
                }}
              />
            )}
          </Grid>
          <Grid container spacing={1} align="center">
            <Grid item xs={8} hidden={!showTarget}>
              <Grid item xs={4} hidden={!showTarget}>
                <img src={img_src} alt="" width="100%" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
  if (settings.explore) {
    return <StartGameButton buttonText="Start Game Now" buttonStyleClass="exploreStartButton" />;
  }
  return <div></div>;
};

// PropTypes:
Header.propTypes = {
  settings: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
  setCard: PropTypes.func.isRequired,
  setGameSettings: PropTypes.func.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  settings: state.game.settings,
  counter: state.game.counter,
});

export default connect(mapStateToProps, { setCard, setGameSettings })(Header);
