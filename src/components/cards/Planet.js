import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Grid, Typography } from "@material-ui/core";

import useStyles from "../../styles";
import CardItem from "./CardItem";

const Planet = ({ name, data }) => {
  const classes = useStyles();
  const planet = data.planets.filter((planet) => planet.name === name)[0];
  const img_src = `${process.env.PUBLIC_URL}/sw_pics/${planet.name.replace("/", "-")}.png`

  return (
    <Paper className={classes.gameCard}>
      <img src={img_src} alt="" width="100%"/>
      <Typography className={classes.gameCardTitle}>
        {planet.name}
      </Typography>
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
          propertyItemList={data.movies}
          fieldName="title"
          setCardType="movie"
        />
        <CardItem item={planet} property="residents" propertyItemList={data.characters} setCardType="character" />
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
