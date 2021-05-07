import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Grid, Button, Typography } from "@material-ui/core";

import useStyles from "../../styles";
import sampleWithoutReplacement from "../SampleWithoutReplacement";
import { setCard } from "../../actions/card";

const PropertyCard = ({ name, propertyInfo, data, selectedSpecialCard, setCard, settings }) => {
  const classes = useStyles();

  const pluralizedSelectedSpecialCard =
    selectedSpecialCard.charAt(selectedSpecialCard.length - 1) === "s"
      ? selectedSpecialCard
      : selectedSpecialCard + "s";

  var filteredList;
  if (isNaN(name)) {
    // if it is a birth year:
    if (name.slice(-3) === "BBY" && !isNaN(name.slice(0, -3))) {
      console.log(name.slice(0, -3));
      filteredList = data[pluralizedSelectedSpecialCard].filter(
        (prop) =>
          prop[propertyInfo.property].slice(0, -3) >= name.slice(0, -3) * 0.9 &&
          prop[propertyInfo.property].slice(0, -3) <= name.slice(0, -3) * 1.1
      );
    } else {
      // if it is a normal string:
      filteredList = data[pluralizedSelectedSpecialCard].filter(
        (prop) =>
          prop[propertyInfo.property] === name ||
          prop[propertyInfo.property].includes(name + ",") ||
          prop[propertyInfo.property].includes(", " + name)
      );
    }
  } else {
    // if it is a number:
    filteredList = data[pluralizedSelectedSpecialCard].filter(
      (prop) => prop[propertyInfo.property] >= name * 0.9 && prop[propertyInfo.property] <= name * 1.1
    );
  }

  var sampledList
  if (settings.explore) {
    sampledList = filteredList
  } else {
    sampledList = sampleWithoutReplacement(filteredList, 5);
  }

    
  var propertyName = propertyInfo.property.charAt(0).toUpperCase() + propertyInfo.property.slice(1);
  propertyName = propertyName.replace(/_/g, " ");

  return (
    <Paper className={classes.gameCard}>
      <Typography className={classes.gameCardTitle}>{name}</Typography>
      <Typography className={classes.propertyCardTitle}>({propertyName})</Typography>
      <Grid container spacing={1}>
        <Grid container spacing={1}>
          <Grid item xs={5} align="right">
            <b>{pluralizedSelectedSpecialCard.charAt(0).toUpperCase() + pluralizedSelectedSpecialCard.slice(1)}:</b>
          </Grid>
          <Grid item xs={7} align="left">
            {sampledList.map((element) => {
              return (
                <Button
                  className={classes.itemBtn}
                  variant="contained"
                  onClick={() => setCard(selectedSpecialCard, element[propertyInfo.fieldName])}
                >
                  {element[propertyInfo.fieldName]}
                </Button>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

// PropTypes:
PropertyCard.propTypes = {
  name: PropTypes.string.isRequired,
  propertyInfo: PropTypes.string.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
  selectedSpecialCard: state.card.selectedSpecialCard,
  settings: state.game.settings,
});

export default connect(mapStateToProps, { setCard })(PropertyCard);
