import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Grid, Typography } from "@material-ui/core";

import { useStyles } from "../../styles";
import CardItem from "./CardItem";

const Movie = ({ name, data }) => {
  const classes = useStyles();
  const movie = data.movies.filter((movie) => movie.title === name)[0];
  const img_src = `${process.env.PUBLIC_URL}/sw_pics/${movie.title.replace("/", "-")}.png`;

  return (
    <Paper className={classes.gameCard}>
      <img src={img_src} alt="" width="100%" />
      <Typography className={classes.gameCardTitle}>{movie.title}</Typography>
      <Grid container spacing={1}>
        <CardItem item={movie} property="director" fieldName="title" />
        <CardItem item={movie} property="producer" fieldName="title" />
        <CardItem item={movie} property="release_date" fieldName="title" />
        <CardItem item={movie} property="characters" propertyItemList={data.characters} setCardType="character" />
        <CardItem item={movie} property="planets" propertyItemList={data.planets} setCardType="planet" />
        <CardItem item={movie} property="species" propertyItemList={data.species} setCardType="species" />
        <CardItem
          item={movie}
          property="starships"
          propertyName="Spaceships"
          propertyItemList={data.spaceships}
          setCardType="spaceship"
        />
        <CardItem item={movie} property="vehicles" propertyItemList={data.vehicles} setCardType="vehicle" />
      </Grid>
    </Paper>
  );
};

// PropTypes:
Movie.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps, {})(Movie);
