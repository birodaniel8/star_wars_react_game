import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Grid } from "@material-ui/core";

import CardItem from "./CardItem";

const Character = ({ name, data }) => {
  const character = data.characters.filter((character) => character.name === name)[0];

  return (
    <Paper>
      <h1>{character.name}</h1>
      <Grid container spacing={1}>
        <CardItem item={character} property="homeworld" itemList={data.planets} setCardType="planet" />
        <CardItem item={character} property="species" itemList={data.species} setCardType="species" />
        <CardItem
          item={character}
          property="films"
          propertyName="movies"
          itemList={data.movies}
          setCardType="movie"
          fieldName="title"
        />
        <CardItem item={character} property="gender" />
        <CardItem item={character} property="skin_color" />
        <CardItem item={character} property="birth_year" />
        <CardItem item={character} property="eye_color" />
        <CardItem item={character} property="hair_color" />
        <CardItem item={character} property="height" />
        <CardItem item={character} property="mass" />
        <CardItem
          item={character}
          property="starships"
          propertyName="Spaceships"
          itemList={data.spaceships}
          setCardType="spaceship"
        />
        <CardItem item={character} property="vehicles" itemList={data.vehicles} setCardType="vehicle" />
      </Grid>
    </Paper>
  );
};

// PropTypes:
Character.propTypes = {
  name: PropTypes.string.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps, {})(Character);
