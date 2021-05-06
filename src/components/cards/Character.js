import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Grid } from "@material-ui/core";

import CardItem from "./CardItem";

const Character = ({ name, data }) => {
  const character = data.characters.filter((character) => character.name === name)[0];
  const img_src = `${process.env.PUBLIC_URL}/sw_pics/${character.name.replace("/", "-")}.png`

  return (
    <Paper>
      <img src={img_src} alt="" width="100%"/>
      <h1>{character.name}</h1>
      <Grid container spacing={1}>
        <CardItem item={character} property="homeworld" propertyItemList={data.planets} setCardType="planet" />
        <CardItem item={character} property="species" propertyItemList={data.species} setCardType="species" />
        <CardItem
          item={character}
          property="films"
          propertyName="Movies"
          propertyItemList={data.movies}
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
          propertyItemList={data.spaceships}
          setCardType="spaceship"
        />
        <CardItem item={character} property="vehicles" propertyItemList={data.vehicles} setCardType="vehicle" />
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
