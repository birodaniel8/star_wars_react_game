import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Grid } from "@material-ui/core";

import CardItem from "./CardItem";

const Vehicle = ({ name, data }) => {
  const vehicle = data.vehicles.filter((vehicle) => vehicle.name === name)[0];
  const img_src = `${process.env.PUBLIC_URL}/sw_pics/${vehicle.name.replace("/", "-")}.png`

  return (
    <Paper>
      <img src={img_src} alt="" width="100%"/>
      <h1>{vehicle.name}</h1>
      <Grid container spacing={1}>
        <CardItem item={vehicle} property="model" />
        <CardItem item={vehicle} property="manufacturer" />
        <CardItem item={vehicle} property="cost_in_credits" />
        <CardItem item={vehicle} property="crew" />
        <CardItem item={vehicle} property="length" />
        <CardItem item={vehicle} property="max_atmosphering_speed" />
        <CardItem
          item={vehicle}
          property="films"
          propertyName="Movies"
          propertyItemList={data.movies}
          fieldName="title"
          setCardType="movie"
        />
        <CardItem item={vehicle} property="pilots" propertyItemList={data.characters} setCardType="character" />
      </Grid>
    </Paper>
  );
};

// PropTypes:
Vehicle.propTypes = {
  name: PropTypes.string.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps, {})(Vehicle);
