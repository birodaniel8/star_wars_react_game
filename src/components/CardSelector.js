import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Character from "./cards/Character";
import Planet from "./cards/Planet";
import Movie from "./cards/Movie";
import Species from "./cards/Species";
import Spaceship from "./cards/Spaceship";
import Vehicle from "./cards/Vehicle";
import PropertyCard from "./cards/PropertyCard";

import { setSpecialCard } from "../actions/card";

const CardSelector = ({ selectedCard, setSpecialCard }) => {
  selectedCard.type !== "property" && setSpecialCard(selectedCard.type);
  switch (selectedCard.type) {
    case "character":
      return <Character name={selectedCard.name} />;
    case "planet":
      return <Planet name={selectedCard.name} />;
    case "movie":
      return <Movie name={selectedCard.name} />;
    case "species":
      return <Species name={selectedCard.name} />;
    case "spaceship":
      return <Spaceship name={selectedCard.name} />;
    case "vehicle":
      return <Vehicle name={selectedCard.name} />;
    case "property":
      return <PropertyCard name={selectedCard.name} propertyInfo={selectedCard.propertyInfo} />;
    default:
      return <div></div>;
  }
};

// PropTypes:
CardSelector.propTypes = {
  selectedCard: PropTypes.object.isRequired,
  setSpecialCard: PropTypes.func.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  selectedCard: state.card.selectedCard,
});

export default connect(mapStateToProps, { setSpecialCard })(CardSelector);
