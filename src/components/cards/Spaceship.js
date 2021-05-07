import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Grid, Typography } from "@material-ui/core";

import useStyles from "../../styles";
import CardItem from "./CardItem";

const Spaceship = ({ name, data }) => {
  const classes = useStyles();
  const spaceship = data.spaceships.filter((spaceship) => spaceship.name === name)[0];
  const img_src = `${process.env.PUBLIC_URL}/sw_pics/${spaceship.name.replace("/", "-")}.png`

  return (
    <Paper className={classes.gameCard}>
      <img src={img_src} alt="" width="100%"/>
      <Typography className={classes.gameCardTitle}>
        {spaceship.name}
      </Typography>
      <Grid container spacing={1}>
        <CardItem item={spaceship} property="model" />
        <CardItem item={spaceship} property="manufacturer" />
        <CardItem item={spaceship} property="cost_in_credits" />
        <CardItem item={spaceship} property="crew" />
        <CardItem item={spaceship} property="length" />
        <CardItem item={spaceship} property="max_atmosphering_speed" />
        <CardItem item={spaceship} property="hyperdrive_rating" />
        <CardItem
          item={spaceship}
          property="films"
          propertyName="Movies"
          propertyItemList={data.movies}
          fieldName="title"
          setCardType="movie"
        />
        <CardItem item={spaceship} property="pilots" propertyItemList={data.characters} setCardType="character" />
      </Grid>
    </Paper>
  );
};

// PropTypes:
Spaceship.propTypes = {
  name: PropTypes.string.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps, {})(Spaceship);
