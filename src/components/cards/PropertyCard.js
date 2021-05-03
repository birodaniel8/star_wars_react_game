import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Paper, Grid, Button } from "@material-ui/core";

import CardItem from "./CardItem";

import { setCard } from "../../actions/card";

const PropertyCard = ({ name, propertyInfo, data, selectedSpecialCard, setCard }) => {
  const pluralizedSelectedSpecialCard =
    selectedSpecialCard.charAt(selectedSpecialCard.length - 1) === "s"
      ? selectedSpecialCard
      : selectedSpecialCard + "s";

  const filteredList = data[pluralizedSelectedSpecialCard].filter((prop) => prop[propertyInfo.property].includes(name));

  return (
    <Paper>
      <h1>{name}</h1>
      <Grid container spacing={1}>
        <h2>{propertyInfo.property}</h2>
        <Grid container spacing={1}>
          <Grid item xs={5} align="right">
            <b>{pluralizedSelectedSpecialCard.charAt(0).toUpperCase() + pluralizedSelectedSpecialCard.slice(1)}:</b>
          </Grid>
          <Grid item xs={7} align="left">
            {filteredList.map((element) => {
              return (
                <Button
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
});

export default connect(mapStateToProps, { setCard })(PropertyCard);
