import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Grid } from "@material-ui/core";

import CardItem from "./CardItem";

const Planet = ({ name, data }) => {
  const planet = data.planets.filter((planet) => planet.name === name)[0];

  return (
    <Paper>
      <h1>{planet.name}</h1>
      <Grid container spacing={1}>
        <CardItem item={planet} property="climate" />
        <CardItem item={planet} property="diameter" />
        <CardItem item={planet} property="gravity" />
        <CardItem item={planet} property="rotation_period" />
        <CardItem item={planet} property="orbital_period" />
        <CardItem item={planet} property="population" />
        <CardItem item={planet} property="terrain" />
        <CardItem
          item={planet}
          property="films"
          propertyName="Movies"
          itemList={data.movies}
          fieldName="title"
          setCardType="movie"
        />
        <CardItem item={planet} property="residents" itemList={data.characters} setCardType="character" />
      </Grid>
    </Paper>
  );
};

// PropTypes:
Planet.propTypes = {
  name: PropTypes.string.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps, {})(Planet);
