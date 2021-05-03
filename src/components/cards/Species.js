import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Grid } from "@material-ui/core";

import CardItem from "./CardItem";

const Species = ({ name, data }) => {
  const species = data.species.filter((species) => species.name === name)[0];
  console.log(species);

  return (
    <Paper>
      <h1>{species.name}</h1>
      <Grid container spacing={1}>
        <CardItem item={species} property="homeworld" itemList={data.planets} setCardType="planet" />
        <CardItem item={species} property="classification" />
        <CardItem item={species} property="designation" />
        <CardItem item={species} property="language" />
        <CardItem item={species} property="average_lifespan" />
        <CardItem item={species} property="average_height" />
        <CardItem item={species} property="skin_colors" />
        <CardItem item={species} property="hair_colors" />
        <CardItem item={species} property="eye_colors" />
        <CardItem
          item={species}
          property="films"
          propertyName="Movies"
          itemList={data.movies}
          fieldName="title"
          setCardType="movie"
        />
        <CardItem item={species} property="people" itemList={data.characters} setCardType="character" />
      </Grid>
    </Paper>
  );
};

// PropTypes:
Species.propTypes = {
  name: PropTypes.string.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps, {})(Species);
