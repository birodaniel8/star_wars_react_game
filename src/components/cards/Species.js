import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Grid, Typography } from "@material-ui/core";

import { useStyles } from "../../styles";
import CardItem from "./CardItem";

const Species = ({ name, data }) => {
  const classes = useStyles();
  const species = data.species.filter((species) => species.name === name)[0];
  const img_src = `${process.env.PUBLIC_URL}/sw_pics/${species.name.replace("/", "-")}.png`;

  return (
    <Paper className={classes.gameCard}>
      <img src={img_src} alt="" width="100%" />
      <Typography className={classes.gameCardTitle}>{species.name}</Typography>
      <Grid container spacing={1}>
        <CardItem item={species} property="homeworld" propertyItemList={data.planets} setCardType="planet" />
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
          propertyItemList={data.movies}
          fieldName="title"
          setCardType="movie"
        />
        <CardItem item={species} property="people" propertyItemList={data.characters} setCardType="character" />
      </Grid>
    </Paper>
  );
};

// PropTypes:
Species.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps, {})(Species);
