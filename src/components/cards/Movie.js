import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Grid } from "@material-ui/core";

import CardItem from "./CardItem";

const Movie = ({ name, data }) => {
  const movie = data.movies.filter((movie) => movie.title === name)[0];

  return (
    <Paper>
      <h1>{movie.title}</h1>
      <Grid container spacing={1}>
        <CardItem item={movie} property="director" fieldName="title"/>
        <CardItem item={movie} property="producer" fieldName="title"/>
        <CardItem item={movie} property="release_date" fieldName="title"/>
        <CardItem item={movie} property="characters" itemList={data.characters} setCardType="character" />
        <CardItem item={movie} property="planets" itemList={data.planets} setCardType="planet" />
        <CardItem item={movie} property="species" itemList={data.species} setCardType="species" />
        <CardItem
          item={movie}
          property="starships"
          propertyName="Spaceships"
          itemList={data.spaceships}
          setCardType="spaceship"
        />
        <CardItem item={movie} property="vehicles" itemList={data.vehicles} setCardType="vehicle" />
      </Grid>
    </Paper>
  );
};

// PropTypes:
Movie.propTypes = {
  name: PropTypes.string.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps, {})(Movie);
